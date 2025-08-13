import { test } from "@playwright/test";

test('do login auto', async ({ page }) => {
    await page.goto('/web/index.php/leave/viewLeaveList')
})