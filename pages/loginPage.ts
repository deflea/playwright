import { expect, Locator, Page } from "@playwright/test";

export class LoginPage{
    private readonly inputUsername: Locator;
    private readonly inputPassword: Locator;
    private readonly buttonLogin: Locator;
    private readonly errorMessage: Locator;
    private readonly page: Page

    constructor(page: Page){
        this.inputUsername = page.locator('[data-test="username"]');
        this.inputPassword = page.locator('[data-test="password"]');
        this.buttonLogin = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async loginWithCredentials(username:string, password:string){        
        await this.inputUsername.fill(username);
        await this.inputPassword.fill(password);
        await this.buttonLogin.click();
    }

    async loginWithIncorrectCredentials(username:string, password:string, expectedMessage: string){        
        await this.inputUsername.fill(username);
        await this.inputPassword.fill(password);
        await this.buttonLogin.click();
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText(expectedMessage);
    }
}