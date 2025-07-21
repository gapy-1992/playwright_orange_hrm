import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// new page object add into here
type baseFixture = {
    loginPage: LoginPage
}


export const test = base.extend<baseFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
})
export { expect } from '@playwright/test';

