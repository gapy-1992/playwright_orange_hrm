import { Page } from "@playwright/test";
import { locatorProcessor } from "../utils/LocatorProcessor";

export class BasePage {
    readonly page; //
    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async getText(selector: string): Promise<string> {
        return (await locatorProcessor(selector, this.page)).innerText();
    }

    async click(selector: string) {
        return (await locatorProcessor(selector, this.page)).click();
    }

    async fill(selector: string, text: string) {
        return (await locatorProcessor(selector, this.page)).fill(text);
    }
}