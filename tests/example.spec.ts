import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test('', async ({ page }) => {
  await page.goto('/'); // Uses the baseURL from playwright.config.ts
  await page.waitForLoadState('domcontentloaded');

  const LoginInstance = new LoginPage(page);
  await LoginInstance.login('Admin', 'admin123');

})