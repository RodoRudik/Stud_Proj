const { test, expect } = require('@playwright/test');

test.describe('Proyecto 3: Robot Detective', () => {
    test('El robot crea y completa tareas', async ({ page }) => {
        // 1. Viajar
        await page.goto('https://demo.playwright.dev/todomvc');
        
        // 2. Función helper para agregar tareas (¡para no repetir código!)
        async function agregarTarea(texto) {
            await page.getByPlaceholder('What needs to be done?').fill(texto);
            await page.getByPlaceholder('What needs to be done?').press('Enter');
        }
        
        // 3. Agregar las 3 tareas
        await agregarTarea('Estudiar JavaScript');
        await agregarTarea('Practicar Playwright');
        await agregarTarea('Ayudar a mi tutor');
        
        // 4. Marcar como completada "Practicar Playwright"
        // Pista: busca el listitem que contiene ese texto, luego busca el checkbox dentro
        // "Busca un listitem que tenga el texto 'Practicar Playwright', 
        // y dentro de él, busca el checkbox"
        await page.getByRole('listitem').filter({ hasText: 'Practicar Playwright' }).getByRole('checkbox').check();

        // 5. Verificaciones
        // a) Contar que hay 3 tareas en total ✅ CORREGIDO
        await expect(page.locator('.todo-list').getByRole('listitem')).toHaveCount(3);

        // b) Verificar que "Practicar Playwright" tiene clase "completed" ✅ CORREGIDO
        await expect(page.getByRole('listitem').filter({ hasText: 'Practicar Playwright' })).toHaveClass(/completed/);

        // c) Verificar que el contador dice "2 items left" ✅ (ya estaba bien)
        await expect(page.getByText('2 items left')).toBeVisible();
    });
});