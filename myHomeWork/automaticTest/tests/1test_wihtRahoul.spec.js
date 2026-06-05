const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');

test('first test in Playwright, muestra ejemplo de cosas innecesarias que se pueden mejorar', async ({browser}) => {

    //creacion de la constante context
    const context = await browser.newContext(); // browser.newCOntext(), abre un navegador nuevo y le introduce plugins, cookies a es eproxy
    const page = await context.newPage();
    await page.goto('https://practice.expandtesting.com/inputs');
});

test('test mejorado con menos lineas de codigo que arriba, login correcto', async ({page}) => {

    await page.goto('https://practice.expandtesting.com/login');
    await page.locator('#username').fill('practice');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('[type="submit"]').click();
});

test('test para capturar mensaje de error al iniciar sesión', async ({page}) => {

    await page.goto('https://practice.expandtesting.com/login');
    await page.locator('#username').fill('usuariosinvalido');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('[type="submit"]').click();
    console.log(await page.locator('#flash').textContent());
    await expect(page.locator('#flash')).toContainText('Your username is invalid!');
});

test('test para escribir mal usuario y luego corregir', async ({page}) => {

    const username = page.locator('#username');
    const password = page.locator('#password');
    const submitButton = page.locator('[type="submit"]');
    


    await page.goto('https://practice.expandtesting.com/login');
    await username.fill('usuariosinvalido');
    await password.fill('SuperSecretPassword!');
    await submitButton.click();
    await expect(page.locator('#flash')).toContainText('Your username is invalid!');
    await username.fill('practice');
    await password.fill('SuperSecretPassword!');
    await submitButton.click();    
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});
test('test para escoger accesorio de una tienda de accesorios', async ({page}) => {

    await page.goto('https://practice.expandtesting.com/bookstore');
    console.log(await page.locator(".card-title").nth(0).textContent());
    console.log(await page.locator(".card-title").nth(2).textContent());
});
test('test para escoger lista de productos de una tienda de accesorios', async ({page}) => {

    await page.goto('https://practice.expandtesting.com/bookstore');
    //await page.waitForLoadState('networkidle');//dos maneras de utilizar esta linea
    await page.locator("h5.card-title").first().waitFor();//esto hace lo mismo que la linea comentada arriba
    console.log(await page.locator("h5.card-title").allTextContents());
    
});