const { test, expect } = require('@playwright/test');

test.describe('Proyecto 2: Robot Escritor', () => {
    test('El robot escribe una tarea', async ({ page }) => {
        // 1. Viajar a la página
        await page.goto('https://demo.playwright.dev/todomvc');

        //Esperar un momento a que cargue todo (opcional, pero útil al inicio)
        await page.waitForLoadState('networkidle');
        
        // 2. Encontrar la caja de texto (Pista: usa getByPlaceholder)
        const inputTarea = page.getByPlaceholder('What needs to be done?');
        
        
        // 3. Escribir el texto y presionar Enter
        await inputTarea.fill('Aprender Playwright con mi tutor');
        await inputTarea.press('Enter');
        
        // 4. Verificar que la tarea apareció en la lista
        // Pista: busca el texto de tu tarea dentro de un elemento de lista (listitem)
        await expect(page.getByText('Aprender Playwright con mi tutor')).toBeVisible();
    });
});