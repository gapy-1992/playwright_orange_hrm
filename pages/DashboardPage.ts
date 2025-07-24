import { expect, type Locator, type Page } from '@playwright/test';
import { LeftHandSideMenu } from './LeftHandSideMenu';
export class DashboardPage {
    readonly page;
    constructor(page: Page) {
        this.page = page
    }

    async waitForPageLoad() {
        await this.page.waitForSelector('.oxd-table-filter', { state: 'visible' });
    }

    //TODO: there are some dropdown check box, create optional variable to handle it.
    async searchUserName(userName: string) {
        await this.page.locator(`.oxd-input-group:has-text("Username") input`).fill(userName);
        await this.page.locator(`button[type="submit"]`).click();
    }
}