import { test, expect } from '@playwright/test';

test("Examination all of locators for page", async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/locators');
    await page.locator("h1").waitFor();
    await page.getByRole("button", {name: "Add Item"}).textContent();
    await page.getByRole("link", {name: "Contact"}).textContent();
    await page.getByText("Hot Deal: Buy 1 Get 1 Free");
    console.log(await page.getByText("Hot Deal: Buy 1 Get 1 Free").textContent());
    await page.getByLabel("Choose a country").selectOption("Brazil");
    await page.getByLabel("Email for newsletter").fill("estemi@email");  
    await page.getByPlaceholder("Search the site").fill("Este sitio");
    await page.getByPlaceholder("Filter by tag").fill("filtrado");
    await page.getByAltText("User avatar").textContent();
    await page.getByTitle("Refresh content").click(); 
   // await page.getByTestId("status message").textContent();
    console.log(await page.getByTestId("status-message").textContent());     

} );