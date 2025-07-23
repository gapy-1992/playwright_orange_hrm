import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LeftHandSideMenu } from '../pages/LeftHandSideMenu';

// new page object must be add into here
type baseFixture = {
    loginPage: LoginPage
    leftHandSideMenu: LeftHandSideMenu
}


export const test = base.extend<baseFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
        await page.close();
    },
    leftHandSideMenu: async ({ page }, use) => {
        const leftHandSideMenu = new LeftHandSideMenu(page);
        await use(leftHandSideMenu);
    }


})
export { expect } from '@playwright/test';

