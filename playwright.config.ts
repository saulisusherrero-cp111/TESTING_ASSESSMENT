import { defineConfig, devices } from '@playwright/test';
import { resolveEnvironment } from './src/utils/envResolver';

const { envName, baseURL } = resolveEnvironment();

export default defineConfig({
  testDir: './src/tests',
  timeout: 30000,

  use: {
    headless: true,

    // THIS IS THE IMPORTANT PART
    baseURL: baseURL,

    trace: 'on-first-retry'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ],

  reporter: [['html', { open: 'never' }]],
});

console.log(`[playwright.config] Using ENV: ${envName}`);
console.log(`[playwright.config] baseURL: ${baseURL}`);