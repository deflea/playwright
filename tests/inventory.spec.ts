import {test, expect} from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";

let login: LoginPage;
let menu: InventoryPage

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    login = new LoginPage(page);
})

