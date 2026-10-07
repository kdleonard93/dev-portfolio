import { expect, test } from '@playwright/test';

test('index page shows the portfolio heading', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Kyle Leonard' })).toBeVisible();
});
