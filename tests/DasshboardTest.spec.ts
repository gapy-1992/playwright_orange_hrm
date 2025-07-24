import { test, expect } from "../fixtures/baseFixtures.ts";
import { DashboardPage } from "../pages/DashboardPage.ts";
import { LeftHandSideMenu } from "../pages/LeftHandSideMenu.ts";
import { LoginPage } from "../pages/LoginPage.ts";

test("HRM 3 - add new user to system", async ({
    page,
    loginPage,
    leftHandSideMenu,
    adminPage,
    dashboardPage }) => {

    await page.goto("/"); // Uses the baseURL from playwright.config.ts
    await page.waitForLoadState("domcontentloaded");
    await loginPage.login("Admin", "admin123");
    const adminNavBtn = await leftHandSideMenu.getNavButtonByName('Admin');
    await adminNavBtn.click();


    await adminPage.waitForLoad();
    await adminPage.clickAddUser();
    await adminPage.inputEmployeeName('Peter Mac Anderson');
    await adminPage.selectUserRole('Admin');
    await adminPage.selectStatus('Enabled');
    await adminPage.fillUserName('test123mezztzxttt');
    await adminPage.fillPassword('Test123@');
    await adminPage.fillConfirmPassword('Test123@');
    await adminPage.clickSave();

    await dashboardPage.waitForPageLoad();
    await dashboardPage.searchUserName("test123mezztzxc");
});
