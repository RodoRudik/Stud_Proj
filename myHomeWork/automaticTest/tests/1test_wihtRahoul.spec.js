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

test.only('test para capturar mensaje de error al iniciar sesión', async ({page}) => {

    await page.goto('https://practice.expandtesting.com/login');
    await page.locator('#username').fill('usuariosinvalido');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('[type="submit"]').click();
    console.log(await page.locator('#flash').textContent());
    await expect(page.locator('#flash')).toContainText('Your username is invalid!');
});