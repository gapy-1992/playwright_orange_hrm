import { Page } from "@playwright/test";

export class BasePage {
    readonly page; //
    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async waitForElement(selector: string, timeout: number = 30000) {
        await this.page.waitForSelector(selector, { state: 'visible', timeout });
    }

    async getText(selector: string): Promise<string> {
        return this.page.locator(selector).innerText();
    }
}