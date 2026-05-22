const { test, expect } = require('@playwright/test');

test.describe('Mi primer proyecto', () => {
    test('El robot visita la página', async ({ page }) => {
        // Aquí vamos a escribir la magia...
        // 1. Dile al robot a dónde ir
        await page.goto('https://demo.playwright.dev/todomvc');

        // 2. Dile al robot que busque el texto y verifica que lo ve
        // Usa expect( ... ).toBeVisible();       
        // 2. Esperar un momento a que cargue todo (opcional, pero útil al inicio)
        await page.waitForLoadState('networkidle');

        // 3. Buscar por el texto visible (más flexible)
        await expect(page.getByText('todos', { exact: true })).toBeVisible();
    });
});