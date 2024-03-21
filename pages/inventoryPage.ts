import { Locator,Page } from "@playwright/test";

export class InventoryPage{

    private readonly  menu: Locator;


    constructor (page: Page){
        this.menu = page.getByRole('button', { name: 'Open Menu' })
    }

    async ClickMenu(){
        await this.menu.click();
    }
}