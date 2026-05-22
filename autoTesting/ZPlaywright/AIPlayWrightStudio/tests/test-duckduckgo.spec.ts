import { test, expect } from '@playwright/test';

/*test('El robot hace viaje simple', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    // ✅ Más resistente a cambios de diseño:
    await expect(page.getByPlaceholder('Search the web without being tracked'/*este es un selector css por id*//*)).toBeVisible();
    // O incluso mejor:
    await expect(page.getByRole('searchbox')).toBeVisible();
});*/

/*test('El robot busca Playwright TypeScript', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    
    // 1. Encontrar el buscador UNA VEZ (como agarrar el lápiz antes de escribir)
    const buscador = page.getByRole('searchbox');
    
    // 2. Usar ese lápiz para escribir y presionar Enter
    await buscador.fill('Playwright TypeScript');
    await buscador.press('Enter');
    
    // 3. Verificar que la URL cambió (no el contenido del input)
    await expect(page).toHaveURL(/q=Playwright/);
    
    // Opcional: Verificar que hay resultados
    await expect(page.getByRole('link').first()).toBeVisible();
});*/

test('El validador estricto', async ({ page }) => {
    // 1. Viajar y esperar a que todo cargue
    await page.goto('https://duckduckgo.com/');
    await page.waitForLoadState('networkidle');
    
    // 2. Usar un locator más confiable para DuckDuckGo
    const buscador = page.locator('input[name="q"]'); // El input de búsqueda real
    
    // 3. Escribir y presionar Enter
    await buscador.fill('   ');
    await buscador.press('Enter');
    
    // 4. Esperar un momento a que la página responda
    await page.waitForTimeout(2000); // 2 segundos (solo para debugging)
    
    // 5. Verificar que no hay resultados "reales"
    // DuckDuckGo a veces muestra sugerencias, así que verificamos la URL
    await expect(page).toHaveURL('https://duckduckgo.com/');
});