import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LeftHandSideMenu } from '../pages/LeftHandSideMenu';
import { AdminPage } from '../pages/AdminPage';
import { DashboardPage } from '../pages/DashboardPage';

// new page object must be add into here
type baseFixture = {
    loginPage: LoginPage,
    leftHandSideMenu: LeftHandSideMenu,
    adminPage: AdminPage,
    dashboardPage: DashboardPage
}

export const test = base.extend<baseFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        //wait for element trong loginPage load
        await use(loginPage);
    },
    leftHandSideMenu: async ({ page }, use) => {
        const leftHandSideMenu = new LeftHandSideMenu(page);
        //wait for element trong lefthandsindemenu load 
        await use(leftHandSideMenu);
    },
    adminPage: async ({ page }, use) => {
        const adminPage = new AdminPage(page);
        //wait for element trong adminpage load 
        await use(adminPage);
    },
    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        //wait for element trong adminpage load 
        await use(dashboardPage);
    },


})
export { expect } from '@playwright/test';

