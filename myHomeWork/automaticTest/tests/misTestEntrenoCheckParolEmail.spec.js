const {test, expect} = require('@playwright/test');

test('comprobacion de login correcto y cambio de pagina', async ({page}) => {
    
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const submitButton = page.locator('[type="submit"]');
        
    await page.goto('https://practice.expandtesting.com/login');
    await page.locator("#login").waitFor();
    await userName.fill('practice');
    await password.fill('SuperSecretPassword!');
    await submitButton.click();
    await expect(page.url()).toBe('https://practice.expandtesting.com/secure');
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});

test('comprobacion de login incorrecto username incorrecto', async ({page}) => {
    
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const submitButton = page.locator('[type="submit"]');
        
    await page.goto('https://practice.expandtesting.com/login');
    await page.locator("#login").waitFor();
    await userName.fill('practiceinvalido');
    await password.fill('SuperSecretPassword!');
    await submitButton.click();
    await expect(page.locator('#flash')).toContainText('Your username is invalid!');
    await expect(page.url()).toBe('https://practice.expandtesting.com/login');
});

test('comprobacion de login incorrecto password incorrecto', async ({page}) => {
    
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const submitButton = page.locator('[type="submit"]');
        
    await page.goto('https://practice.expandtesting.com/login');
    await page.locator("#login").waitFor();
    await userName.fill('practice');
    await password.fill('SuperSecretPassword!nocorrecto');
    await submitButton.click();
    await expect(page.locator('#flash')).toContainText('Your password is invalid!');
    await expect(page.url()).toBe('https://practice.expandtesting.com/login');
});

test('test con variantespara el register page', async ({page}) => {

    const registerBox = page.locator('.card-body');
    const submitButton = page.locator('[type="submit"]');
    const username = page.locator('#username');
    const password = page.locator('#password');
    const confirmPassword = page.locator('#confirmPassword');

    //comprovacion de que mensage que no se ha escrito en ningun campo
    await page.goto('https://practice.expandtesting.com/register');
    await registerBox.waitFor();
    await submitButton.click();
    await expect(page.locator('#flash b')).toContainText('All fields are required.');

    // comprobacion de que solo se escribio un campo
    await registerBox.waitFor();
    await username.fill('usuario');
    await submitButton.click();
    await expect(page.locator('#flash b')).toContainText('All fields are required.');

    //comprobacion de que las password necesita mas caracteres
    await registerBox.waitFor();
    await username.fill('usuario');
    await password.fill('12');
    await confirmPassword.fill('12');
    await submitButton.click();
    await expect(page.locator('#flash b')).toContainText('Password must be at least 4 characters long.');

    //comprobacion de que las password no coinciden
    await registerBox.waitFor();
    await username.fill('usuario');
    await password.fill('1234');
    await confirmPassword.fill('12345');
    await submitButton.click();
    await expect(page.locator('#flash b')).toContainText('Passwords do not match.');    

});

test('test del register page correcto y cambio de url', async ({page}) => {

    const registerBox = page.locator('.card-body');
    const submitButton = page.locator('[type="submit"]');
    const username = page.locator('#username');
    const password = page.locator('#password');
    const confirmPassword = page.locator('#confirmPassword');

    //comprobacion de que el registro es correcto
    await page.goto('https://practice.expandtesting.com/register');
    await registerBox.waitFor();
    await username.fill('usuar');
    await password.fill('1237');
    await confirmPassword.fill('1237');
    await submitButton.click();    
    await page.waitForURL('https://practice.expandtesting.com/login');
    await expect(page.locator('#flash b')).toContainText('Successfully registered, you can log in now.');
});