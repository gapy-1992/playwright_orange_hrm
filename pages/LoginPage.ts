import { Locator, Page } from "@playwright/test";

export class LoginPage {
    private pwdTxt: Locator;
    private loginBtn: Locator;
    private userNameTxt: Locator;
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.userNameTxt = page.getByPlaceholder('Username')
        this.pwdTxt = page.getByPlaceholder('Password');
        this.loginBtn = page.locator('.orangehrm-login-button');
    }
    async login(userName, password) {
        await this.userNameTxt.fill(userName);
        await this.pwdTxt.fill(password);
        await this.loginBtn.click();
    }

}