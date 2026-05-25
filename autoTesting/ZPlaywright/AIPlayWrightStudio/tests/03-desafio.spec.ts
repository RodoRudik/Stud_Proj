import { test, expect } from '@playwright/test';

test.describe('Validación de Login', () => {
    
    test('Login exitoso muestra mensaje de bienvenida', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login');
        
        // Llenar credenciales válidas
        await page.getByLabel('Username').fill('tomsmith');
        await page.getByLabel('Password').fill('SuperSecretPassword!');
        await page.getByRole('button', { name: 'Login' }).click();
        
        // 🔍 Assertions HARD
        await expect(page).toHaveURL(/secure/); // URL cambió
        await expect(page.getByText('You logged into a secure area!')).toBeVisible(); // Mensaje visible
        
        // 🔍 Assertion SOFT (campo secundario)
        await expect.soft(page.getByText('Welcome to the Secure Area')).toBeVisible();
    });
    
    test.skip('Login fallido muestra error', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login');
        await page.getByLabel('Username').fill('usuario-invalido');
        await page.getByLabel('Password').fill('contraseña-incorrecta');
        await page.getByRole('button', { name: 'Login' }).click();
        
        // Validar mensaje de error
        await expect(page.locator('#flash')).toContainText('Your username is invalid!');
    });
});
//codigo con error por problema de pagina
// Usa test.describe() para agrupar tus tests bajo "Validación de Contacto".
/*test.describe('Validación de respuestas de Formulario', () => {
    
    //Crea un test de éxito: llena el formulario correctamente, envíalo y verifica:
    test('Envío exitoso muestra mensaje de confirmación', async ({ page }) => {
        await page.goto('https://demoqa.com/automation-practice-form');
        await page.waitForLoadState('networkidle');

        const firstNameInput = page.getByPlaceholder('First Name');
        const emailInput = page.locator('#userEmail'); // Ajusta el selector si el placeholder es diferente
        await firstNameInput.fill('Test User');
        await emailInput.fill('testuser@example.com');
        
        const submitButton = page.getByRole('button', { name: 'Submit' });
        await submitButton.click(); // Envía el formulario

        // 🔍 Assertions HARD: verificar que aparecen mensajes de error
        // DemoQA muestra errores con clase .invalid-feedback o border rojo
        await expect(page.locator('#firstName:invalid')).toBeVisible();
        await expect(page.locator('#lastName:invalid')).toBeVisible();
        
        // 🔍 Assertion SOFT: verificar que el email que llenamos sigue ahí
        await expect.soft(page.locator('#userEmail')).toHaveValue('testuser@example.com');
                      
        
    });    
    
    //Crea un test de error (con test.skip() por ahora): intenta enviar con email inválido y valida que aparezca un mensaje de error.
    test.skip('Validar mensaje de error con email inválido', async ({ page }) => {
        await page.goto('https://demoqa.com/automation-practice-form');
        await page.waitForLoadState('networkidle');
        const emailInput = page.locator('#userEmail'); // Ajusta el selector si el placeholder es diferente
        await emailInput.fill('invalid-email'); // Rellena con un email inválido
        const submitButton = page.getByRole('button', { name: 'Submit' });
        await submitButton.click(); // Intenta enviar el formulario
        // Verifica que aparezca un mensaje de error (ajusta el selector según el mensaje específico)
        await expect(page.locator('[data-testid="error-message"]')).toBeVisible(); // Ajusta el selector para el mensaje de error
    });
});
*/