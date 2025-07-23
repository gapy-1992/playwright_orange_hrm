import { test, expect } from "../fixtures/baseFixtures.ts";

test("HRM 2 - Login with incorrect credentials", async ({ page, loginPage }) => {
  await page.goto("/"); // Uses the baseURL from playwright.config.ts
  await page.waitForLoadState("domcontentloaded");

  await loginPage.login("Test", "test123");
  await expect(page.getByText("Invalid credentials")).toBeVisible();
});
