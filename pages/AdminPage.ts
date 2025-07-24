import { Locator, Page } from "@playwright/test";
import { error } from "console";

export class AdminPage {
    private addBtn: Locator;
    readonly page: Page;
    constructor(page: Page) {
        this.page = page

    };

    async waitForLoad() {
        await this.page.waitForSelector('.orangehrm-background-container', { state: 'visible' });
    }

    async clickAddUser() {
        await this.page.getByRole('button', { name: 'Add' }).click();
    }

    async inputEmployeeName(name: string) {
        await this.page.getByPlaceholder('Type for hints...', { exact: true }).fill(name);
    }

    // async selectUserRole(roleName: string) {
    //     await this.page.getB
    // }

}