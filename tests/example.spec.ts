import { test } from '../fixtures/baseFixtures.ts';
import { Expect } from '@playwright/test';

test('', async ({
  page,
  loginPage }) => {
  await page.goto('/'); // Uses the baseURL from playwright.config.ts
  await page.waitForLoadState('domcontentloaded');

  await loginPage.login('Admin', 'admin123');

})