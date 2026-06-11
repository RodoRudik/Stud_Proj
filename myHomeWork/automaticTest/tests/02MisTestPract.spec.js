import {test, expect} from '@playwright/test';

test.only('take value from table and compare with the value of the alert', async ({page}) => {

    const table = page.locator(".table-responsive");
    const rowsTable = page.locator(".table-responsive tbody tr");   
    await page.goto('https://practice.expandtesting.com/dynamic-table');
    await table.waitFor();         
    const numerElementTable = await rowsTable.count();
    let rows;

    const yellowCPU = await page.locator("#chrome-cpu").textContent();
    console.log(yellowCPU);
        
    for ( rows = 0; rows < numerElementTable; rows++) {

        const textRows = await rowsTable.nth(rows).textContent();
        const firstWordRow = await rowsTable.nth(rows).locator("td").nth(0).textContent()
        if(firstWordRow === 'Chrome') {

            console.log(textRows);                      
            console.log(await rowsTable.nth(rows).locator("td").count());
            const numElemRows = await rowsTable.nth(rows).locator("td").count();
            let i;   

            for(i = 0; i < numElemRows; i++){

                const textElementRows = await rowsTable.nth(rows).locator("td").nth(i).textContent();
                if(textElementRows.includes('%')){
                    const cpuChromeTable = textElementRows
                    console.log("CPU table = " + textElementRows);
                    console.log(yellowCPU + "; Table CPU-" + cpuChromeTable)
                    break;
                }
            }
            break;
        }
    }

    
});