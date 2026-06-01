const {test} = require('@playwright/test');

test('first test in Playwright, muestra ejemplo de cosas innecesarias que se pueden mejorar', async ({browser}) => {

    //creacion de la constante context
    const context = await browser.newContext(); // browser.newCOntext(), abre un navegador nuevo y le introduce plugins, cookies a es eproxy
    const page = await context.newPage();
    await page.goto('https://practice.expandtesting.com/cookie-alert');
});

test('test mejorado con menos lineas de codigo que arriba', async ({page}) => {

    await page.goto('https://practice.expandtesting.com/login');
});