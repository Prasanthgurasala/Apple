import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://www.apple.com/uk/');
    await page.getByRole('navigation', { name: 'Global' }).getByRole('link', { name: 'Mac', exact: true }).click();
    await page.locator('.image-wrapper').first().click();
    await page.getByRole('link', { name: 'Buy MacBook Air M1' }).click();
    await page.getByRole('button', { name: 'Select Apple M1 Chip with 8‑Core CPU and 7‑Core GPU Processor 256GB Storage' }).click();
    await page.getByRole('button', { name: 'Add to Bag' }).click();
    await page.getByRole('button', { name: 'Review Bag' }).click();
    await page.locator('[id="shoppingCart\\.actions\\.navCheckout"]').click();
    await page.getByRole('button', { name: 'Continue as Guest' }).click();
    await page.getByRole('button', { name: 'Continue to Shipping Address' }).click();
    await page.goto('https://secure5.store.apple.com/uk/shop/checkout?_s=Fulfillment-init');
    await page.locator('label').filter({ hasText: 'I’ll pick it up' }).click();

});
