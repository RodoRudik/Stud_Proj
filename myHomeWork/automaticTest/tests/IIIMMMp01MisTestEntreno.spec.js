const {test, expect} = require('@playwright/test');

test('email to forgot password', async ({page}) => {

    await page.goto('https://practice.expandtesting.com/forgot-password');
    await page.locator(".card-body").waitFor();
    await page.locator("#email").fill('rodolfo93er@gmail.com');
    await page.locator('[type="submit"]').click();
    await expect(page.locator("#confirmation-alert p")).toBeVisible();
    await expect(page.locator("#confirmation-alert p")).toHaveText('An e-mail has been sent to you which explains how to reset your password.');
});
// test que creare mas adelante con APIs

/*test('check the email have a new message', async ({page}) => {

    await page.goto('https://mail.google.com/mail/u/0/#inbox/FMfcgzQgMMGCJdxkmQlsrQQQNwBpGSGf');

});*/