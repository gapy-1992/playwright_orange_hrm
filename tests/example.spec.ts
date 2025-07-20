import { test, expect } from '@playwright/test';
import { locatorProcessor } from '../utils/LocatorProcessor';
test('Verify login success with valid account', async ({ page }) => {
  await page.goto('');
  await page.waitForLoadState('domcontentloaded');
  const userNameTxt = await page.getByPlaceholder('Username');
  userNameTxt.fill('Admin');

  const pwdTxt = await page.getByPlaceholder('Password');
  pwdTxt.fill('admin123')
  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
  await page.locator('.orangehrm-login-button', { hasText: " Login " }).click();
});

test('', async ({ page }) => {
  await page.goto('/'); // Uses the baseURL from playwright.config.ts
  await page.waitForLoadState('domcontentloaded');

  const userNameTxt = await locatorProcessor('placeholder="Username"', page);
  await userNameTxt.fill('Admin');

  const pwdTxt = await locatorProcessor('placeholder="Password"', page);
  await pwdTxt.fill('admin123');

  const loginBtn = await locatorProcessor('.orangehrm-login-button', page);
  await loginBtn.click();

})