import { test, expect } from "../fixtures/baseFixtures.ts";
import { LeftHandSideMenu } from "../pages/LeftHandSideMenu.ts";

test("HRM 3 - add new user to system", async ({ page, loginPage, leftHandSideMenu, adminPage }) => {

    await page.goto("/"); // Uses the baseURL from playwright.config.ts
    await page.waitForLoadState("domcontentloaded");
    /* 
    Step 2: select user role . ADMIN | ESS
    Step 3: select status ENABLED | DISABLE
    Step 4: type employee Name
    Step 5: input username: test123QA
    Step 6: input password: Test123@
    Step 7: click save
    Step 8: search user
    Assert there is new user was created.
  
    */
    await loginPage.login("Admin", "admin123");
    const adminNavBtn = await leftHandSideMenu.getNavButtonByName('Admin');
    await adminNavBtn.click();


    await adminPage.waitForLoad();
    await adminPage.clickAddUser();
    await adminPage.inputEmployeeName('Abc')
});
