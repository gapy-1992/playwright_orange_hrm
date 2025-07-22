import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// new page object must be add into here
type baseFixture = {
    loginPage: LoginPage
}


export const test = base.extend<baseFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
        await page.close();
    }

})
export { expect } from '@playwright/test';

