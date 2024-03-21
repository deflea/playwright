import {test, expect} from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

let login: LoginPage;

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    login = new LoginPage(page);
})

test('Login y logout con credenciales válidas', async ({ page }) => {        
    await login.loginWithCredentials('standard_user','secret_sauce');        
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('span.title')).toBeVisible();
    await expect(page.locator('span.title')).toContainText('Products')
    /* await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', {name: 'Logout'}).click();
    await expect(page).toHaveURL('https://www.saucedemo.com'); */
});
/* 
test('Intento iniciar sesión con usuario bloqueado', async ({ page }) => {    
    await login.loginWithIncorrectCredentials('locked_out_user', 'secret_sauce', 'Epic sadface: Sorry, this user has been locked out.')    
}); */
