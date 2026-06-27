import { test, expect } from '@playwright/test';

test.only('Dinamic pagination table', async ({ page }) => {

    const optionSelect = ["3", "5", "10", "-1"];
    let i;
         
    await page.goto('https://practice.expandtesting.com/dynamic-pagination-table');
    await page.locator('.sorting_asc').waitFor();

    await page.locator('[name="example_length"]').waitFor();
    /*await page.locator('[name="example_length"]').selectOption(optionSelect[0]);
    
    console.log(await page.locator(".sorting_1").allTextContents());*/

    console.log(await page.locator("[name='example_length']").length());

    for(i = 0; i < optionSelect.length; i++){
        await page.locator('[name="example_length"]').selectOption(optionSelect[i]);
        
        if(optionSelect[i] === "5"){
            console.log(await page.locator(".sorting_1").allTextContents());
            break;
        }            
    }
});