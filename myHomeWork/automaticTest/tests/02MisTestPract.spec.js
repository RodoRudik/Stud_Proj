import {test, expect} from '@playwright/test';

test.only('take value from table and compare with the value of the alert', async ({page}) => {

    const table = page.locator(".table-responsive");
    const rowsTable = page.locator(".table-responsive tbody tr");

   
    await page.goto('https://practice.expandtesting.com/dynamic-table');
    await table.waitFor(); 
    console.log(await rowsTable.nth(0).textContent()); 
    
    const numerElementTable = await rowsTable.count();
    let rows;
        
    for ( rows = 0; rows < numerElementTable; rows++) {
        const textRows = await rowsTable.nth(rows).textContent();
        const firstWordRow = await rowsTable.nth(rows).locator("td").nth(0).textContent()

        if(firstWordRow === 'Chrome') {
            console.log(textRows);
            console.log("CPU = " + await rowsTable.nth(rows).locator("td").nth(1).textContent());            
            console.log(await rowsTable.nth(rows).locator("td").count());

            const numElemRows = await rowsTable.nth(rows).locator("td").count();

            let i;
            const elemRows = await rowsTable.nth(rows).locator("td").nth(i);
            for(i = 0; i < numElemRows; i++){
                if(elemRows.toC("%"))
            }
            break;
        }
    }
});