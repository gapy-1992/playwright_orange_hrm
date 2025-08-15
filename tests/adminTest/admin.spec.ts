import { test } from "@playwright/test";

test('Verify add user to system', async ({ page }) => {
    await page.goto('/web/index.php/leave/viewLeaveList')
})

test('Add a user to the system with existing username', async ({ page }) => {
    await page.goto('/web/index.php/leave/viewLeaveList')
})

test('Add a job', async ({ page }) => {
    await page.goto('/web/index.php/leave/viewLeaveList')
})

test('Delete a job', async ({ page }) => {
    await page.goto('/web/index.php/leave/viewLeaveList')
})

test('Add an employee', async ({ page }) => {
    await page.goto('/web/index.php/leave/viewLeaveList')
})

test('Edit an employee', async ({ page }) => {
    await page.goto('/web/index.php/leave/viewLeaveList')
})

test('Delete an employee', async ({ page }) => {
    await page.goto('/web/index.php/leave/viewLeaveList')
})

test('Add an vacancy', async ({ page }) => {
    await page.goto('/web/index.php/leave/viewLeaveList')
})

test('Delete an vacancy', async ({ page }) => {
    await page.goto('/web/index.php/leave/viewLeaveList')
})

test('Access to maintanance mode with incorrect credentials', async ({ page }) => {
    await page.goto('/web/index.php/leave/viewLeaveList')
})

test('Create a post', async ({ page }) => {
    await page.goto('/web/index.php/leave/viewLeaveList')
})

test('Like a post', async ({ page }) => {
    await page.goto('/web/index.php/leave/viewLeaveList')
})