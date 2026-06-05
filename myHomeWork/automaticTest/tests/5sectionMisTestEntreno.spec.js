const {test, expect} = require('@playwright/test');

test('test drop option', async ({page}) => {

    await page.goto('https://practice.expandtesting.com/locators');
    console.log(await page.locator(".mb-3 h4").nth(2).textContent());
    await page.locator("select#countrySelect").selectOption('Brazil'); 
    await page.pause();   
});

test('test radio-button', async ({page}) => {

    await page.goto('https://practice.expandtesting.com/radio-buttons');
    await page.locator(".card").nth(0).waitFor();
    await page.locator("[type='radio']").nth(3).click();
    await expect(page.locator("[type='radio']").nth(3)).toBeChecked();
    await page.locator(".card").nth(1).waitFor();
    await page.locator("#football").click();
    await expect(page.locator("#football")).toBeChecked();
    console.log(await page.locator("#football").isChecked());
    await page.locator("#tennis").uncheck();
    expect(await page.locator("#tennis").isChecked()).toBe(false);
});