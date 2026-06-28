import { test, expect } from '@playwright/test';

test.only('Dinamic pagination table', async ({ page }) => {

    const optionSelect = ["3", "5", "10", "-1"];
    let i;
         
    await page.goto('https://practice.expandtesting.com/dynamic-pagination-table');
    await page.locator('.sorting_asc').waitFor();

    await page.locator('[name="example_length"]').waitFor();
    //await page.locator('[name="example_length"]').selectOption(optionSelect[0]);    
    for(i = 0; i < optionSelect.length; i++){
        await page.locator('[name="example_length"]').selectOption(optionSelect[i]);
        
        if(optionSelect[i] === "3"){
            console.log(await page.locator(".sorting_1").allTextContents()); 
            console.log(await page.locator(".odd td").nth(1).textContent());
            console.log(await page.locator(".even td").nth(1).textContent()); 
            console.log(await page.locator(".odd td").nth(7).textContent());          
        } else if(optionSelect[i] === "5"){
            console.log(await page.locator(".sorting_1").allTextContents());
            console.log(await page.locator(".odd td").nth(3).textContent());
            console.log(await page.locator(".even td").nth(3).textContent()); 
            console.log(await page.locator(".odd td").nth(9).textContent());            
            console.log(await page.locator(".even td").nth(9).textContent()); 
            console.log(await page.locator(".odd td").nth(15).textContent());            
        } else if(optionSelect[i] === "-1"){
            console.log(await page.locator(".sorting_1").allTextContents());
            console.log(await page.locator(".odd td").nth(5).textContent());
            console.log(await page.locator(".even td").nth(5).textContent()); 
            console.log(await page.locator(".odd td").nth(11).textContent());            
            console.log(await page.locator(".even td").nth(11).textContent()); 
            console.log(await page.locator(".odd td").nth(17).textContent());   
            
            console.log(await page.locator(".even td").nth(17).textContent()); 
            console.log(await page.locator(".odd td").nth(23).textContent());            
            console.log(await page.locator(".even td").nth(23).textContent()); 
            console.log(await page.locator(".odd td").nth(29).textContent());
            console.log(await page.locator(".even td").nth(29).textContent());          
        }
    }
});