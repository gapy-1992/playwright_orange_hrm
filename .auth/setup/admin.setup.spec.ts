import { test as setup } from '../../fixtures/baseFixtures'
import path from 'path'


const adminFile = path.join(process.cwd(), '.auth', '.state', 'admin.json')
setup('Authenticated for user admind', async ({ page }) => {
    await page.goto("/")
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.locator('.orangehrm-login-button').click();

    await page.context().storageState({ path: adminFile })
})

