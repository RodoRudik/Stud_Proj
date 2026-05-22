import { test, expect } from '@playwright/test';

test('Automatizar el llenado del formulario.', async ({ page }) => {
    await page.goto('https://www.toolsqa.com/selenium-training/#enroll-form');
    await page.waitForLoadState('networkidle');

    /*1-Llenar First Name y Email usando getByLabel.*/
    const firstNameInput = page.getByLabel('First Name');
    const emailInput = page.getByLabel('Email');
    await firstNameInput.fill('Test User');
    await emailInput.fill('testuser@example.com');
    /*2-Llenar Mobile usando getByPlaceholder o locator (si no tiene label claro).*/
    const mobileInput = page.getByLabel('Mobile'); // Ajusta el selector si el placeholder es diferente
    await mobileInput.pressSequentially('1234567890'); // Simula la escritura del número de móvil
    /*3-Seleccionar un valor en el dropdown Select State usando .selectOption().*/
    const stateDropdown = page.getByLabel('Country'); // Ajusta el selector si el label es diferente//
    await stateDropdown.selectOption('Angola'); // Reemplaza con el valor correcto del dropdown//
    /*4-NO hacer clic en "Submit" (para evitar enviar datos reales).*/
    const submitButton = page.getByRole('button', { name: 'Send' }); // Localiza el botón de envío pero no hagas clic en él
    // Verifica que no se haga clic en el botón de envío
    await expect(submitButton).toBeVisible(); // Asegúrate de que el botón esté visible pero no lo presiones
   /* 5-Verificar con expect(...).toHaveValue() que First Name y Email contienen exactamente lo que escribiste.*/
    await expect(firstNameInput).toHaveValue('Test User');
    await expect(emailInput).toHaveValue('testuser@example.com');   
    
});