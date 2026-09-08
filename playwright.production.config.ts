import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'playwright-report/production' }]],
  outputDir: 'test-results/production',
  use: {
    baseURL: 'https://kanso-living.vercel.app',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'production-desktop',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'production-mobile',
      use: { ...devices['Pixel 5'] },
    },
  ],
});
