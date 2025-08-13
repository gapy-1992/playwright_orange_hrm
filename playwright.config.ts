import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Root directory for all test files
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    trace: 'on-first-retry',
    viewport: { width: 1080, height: 720 },
  },
  projects: [
    {
      name: 'setup-admin-role',
      testDir: '.auth/setup',
      testMatch: ['**/admin.setup.spec.ts'], // Match .setup.ts files in .auth/setup
      use: {
        ...devices['Desktop Edge'],
      },
    },
    {
      name: 'Admin test case',
      testDir: 'tests/adminTest', // Directory for admin test cases
      use: {
        ...devices['Desktop Edge'],
        storageState: '.auth/.state/admin.json', // Use storage state from setup
      },
      dependencies: ['setup-admin-role'], // Ensure setup runs first
    },
  ],
});