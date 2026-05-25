//import { test, expect } from '@playwright/test';

con problemas

/*import { test, expect } from '../fixtures/userData.fixture.ts';


test.describe('funcion de fixture', () => {
    
    test('llena usuario y contraseña', async ({ page, userData }) => {
        await page.goto('https://the-internet.herokuapp.com/login');
        
        // Llenar credenciales válidas
        const usernameInput = page.getByLabel('Username');
        await usernameInput.fill('usalo');
        console.log(userData.name);
        const passwordInput = page.getByLabel('Password');
        await passwordInput.fill('SuperSecretPassword!');
        console.log(userData.password);
        await page.getByRole('button', { name: 'Login' }).click();
        
        await page.waitForLoadState('networkidle');        
        
               
        await expect(page.locator('#invalid')).toContainText('Your username is invalid!');
    });
    
    test('Login perfecto con click', async ({ page, userData }) => {
        await page.goto('https://the-internet.herokuapp.com/login');
        
        // Llenar credenciales válidas
        const usernameInput = page.getByLabel('Username');
        await usernameInput.fill(userData.name);
        console.log(userData.name);
        const passwordInput = page.getByLabel('Password');
        await passwordInput.fill(userData.password);
        console.log(userData.password);
        await page.getByRole('button', { name: 'Login' }).click();

        await page.waitForLoadState('networkidle'); 

       
        // 🔍 Assertion SOFT (campo secundario)
        await expect(page.getByText('Your username is invalid!')).toBeVisible(); 
    });
});*/