// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  timeout: 40 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: 'html',
 
  use: {

    browserName: 'chromium',
    headless: false,
   
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    
  },

  /* Configure projects for major browsers */
  

  /* Run your local dev server before starting the tests */
  
});

