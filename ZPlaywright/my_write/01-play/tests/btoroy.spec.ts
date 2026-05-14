import { test, chromium } from '@playwright/test';

test('close cookies', async ({ page }) => {
    await page.goto('https://www.udemy.com/');
    await page.getByRole('button', { name: 'OK', exact: true }).click();    
});

test('Is the cookies banner still present', async ({ page }) => {
    await page.goto('https://www.udemy.com/');
    
    await page.pause();   
});