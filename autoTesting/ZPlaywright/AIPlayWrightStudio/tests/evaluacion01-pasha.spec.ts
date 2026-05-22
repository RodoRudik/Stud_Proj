import { test, expect } from '@playwright/test';

/*test('El navegante silencioso', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    // espera que la página cargue completamente (opcional, pero a veces necesario)
    await page.waitForLoadState('networkidle');
    //Verifica que el título de la página (en la pestaña del navegador) contenga la palabra "DuckDuckGo"
    await expect(page).toHaveTitle(/DuckDuckGo/);
    //verificar que el campo de busqueda sea visible
    await expect(page.getByPlaceholder('Search privately')).toBeVisible();
});

test('El formulario express', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    // espera que la página cargue completamente (opcional, pero a veces necesario)
    await page.waitForLoadState('networkidle');

    // creo un locator para los campos de 'name' 'email' y 'password' para verificar que contengan los datos ingresados
    const nameInput = page.getByPlaceholder('Name');
    /*const emailInput = page. getByAltText('Email Address');*//*
    const passwordInput = page.getByPlaceholder('Password');
    // lenar los campos de 'name' 'email' y 'password' con datos de prueba
    /*await emailInput.fill('@example.com');*//*
    await nameInput.fill('Test User');
    // tengo el campo de 'email' dos veces y debo llenar el segundo campo, por lo que uso el método 'nth' para seleccionar el segundo campo de 'email'
           
    await passwordInput.fill('TestPassword123');
    // verificar que los campos contengan los datos ingresados
    await expect(nameInput).toHaveValue('Test User');
   /* await expect(emailInput.nth(0)).toHaveValue('@example');
    await expect(emailInput.nth(1)).toHaveValue('@example');*//*
    await expect(passwordInput).toHaveValue('TestPassword123');
});

test('El detective de estados', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    await page.waitForLoadState('networkidle');
    
    // Buscar "Playwright"
    const buscador = page.locator('input[name="q"]');
    await buscador.fill('Playwright');
    await buscador.press('Enter');
    await page.waitForLoadState('networkidle');
    
    // ✅ Verificar URL (RegExp sin comillas)
    await expect(page).toHaveURL(/q=Playwright/);
    
    // ✅ Verificar que hay AL MENOS 3 resultados
    // Opción A: Verificar que el tercer enlace de resultado es visible
   // Busca enlaces que contengan texto de resultado (títulos de páginas)
   // Verifica que hay AL MENOS 3 resultados (no exactamente 3)
    await expect(page.getByRole('link').nth(2)).toBeVisible();
    
});*/

// ✅ 1. Define la función FUERA del test (y agrega tipos TypeScript)
// ✅ Función helper CORREGIDA - fuera del test
// ✅ Función helper ULTRA-CORREGIDA
async function buscarYVerificar(page: Page, textoBusqueda: string): Promise<boolean> {
    try {
        const buscador = page.locator('input[name="q"]');
        await buscador.clear();
        await buscador.fill(textoBusqueda);
        await buscador.press('Enter');
        
        await page.waitForURL(/q=/);
        await page.waitForTimeout(1500);
        
        // ✅ ESTRATEGIA SIMPLE: ¿Aparece el mensaje "No results"?
        const paginaContenido = await page.content();
        
        // Si la página dice "No results found for X", entonces NO hay resultados
        if (paginaContenido.toLowerCase().includes('no results') && 
            paginaContenido.toLowerCase().includes(textoBusqueda.toLowerCase())) {
            return false;
        }
        
        // Si no hay mensaje de "No results", asumimos que SÍ hay resultados
        // (DuckDuckGo siempre muestra algo, pero si no dice "no results", es porque encontró algo)
        return true;
        
    } catch (error) {
        return false;
    }
}

test('El arquitecto de código', async ({ page }) => {
    // 1. Viajar a DuckDuckGo UNA SOLA VEZ
    await page.goto('https://duckduckgo.com/');
    await page.waitForLoadState('networkidle');
    
    // 2. Probar con "TypeScript" → debería tener resultados
    const hayResultadosTS = await buscarYVerificar(page, 'TypeScript');
    console.log(`🔍 TypeScript: ${hayResultadosTS ? '✅ Resultados encontrados' : '❌ Sin resultados'}`);
    await expect(hayResultadosTS).toBeTruthy();
    
    // 3. Probar con "XyZ999NoExiste" → NO debería tener resultados
    const hayResultadosFake = await buscarYVerificar(page, 'XyZ999NoExiste');
    console.log(`🔍 XyZ999NoExiste: ${hayResultadosFake ? '✅ Resultados encontrados' : '❌ Sin resultados'}`);
    await expect(hayResultadosFake).toBeFalsy();
});