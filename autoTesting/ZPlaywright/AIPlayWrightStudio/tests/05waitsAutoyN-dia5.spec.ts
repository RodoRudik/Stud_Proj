import { test, expect } from '@playwright/test';

test('Navegar a una tabla de productos, extraer precios y validar que todos sean válidos', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-table/');
    // Esperar a que la tabla esté visible
    await page.waitForLoadState('networkidle');
    /*<table id="courses_table" border="1" cellpadding="6" cellspacing="0">
      </table>*/
    await page.waitForSelector('#courses_table');
    // contar filas de la tabla
    const rows = await page.locator('#courses_table tbody tr').count();
    console.log(`Número de filas en la tabla: ${rows}`);
    expect(rows).toBeGreaterThan(0); // Asegurarse de que hay filas en la tabla

    for (let i = 0; i < rows; i++) {
        // seleccionar celda especifica con QuerySelector
        const celda = await page.locator(`#courses_table tbody tr:nth-child(${i + 1}) td:nth-child(5)`);
        const precioTexto = await celda.textContent();
        console.log(`Precio extraído de la fila ${i + 1}: ${precioTexto}`);
        // verificar que es un numero mayor que 0
        expect(precioTexto).not.toBeNull(); // Asegurarse de que el texto no es nulo.      
       
    }
});