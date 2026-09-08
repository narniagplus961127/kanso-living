import { expect, test } from '@playwright/test';

test.describe('Kanso Living storefront', () => {
  test('loads the homepage with canonical metadata', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });

    await page.goto('/');

    await expect(page.getByRole('heading', { name: /less, but better lived/i })).toBeVisible();
    await expect(page).toHaveTitle('Japanese-Minimalist Furniture for Quiet Homes — Kanso Living');
    await expect(page.locator('[data-nextjs-dialog]')).toHaveCount(0);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://kanso-living.vercel.app',
    );
    expect(consoleErrors).toEqual([]);
  });

  test('searches the collection and opens a product', async ({ page }) => {
    await page.goto('/products');
    await page.getByPlaceholder('Search the collection').fill('Tsuki');

    await expect(page.getByRole('heading', { name: 'Tsuki Platform Bed' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sumi Lounge Chair' })).toHaveCount(0);

    await page.getByRole('link', { name: 'Tsuki Platform Bed', exact: true }).click();
    await expect(page).toHaveURL(/\/products\/tsuki-platform-bed$/);
    await expect(page.getByRole('heading', { name: 'Tsuki Platform Bed' })).toBeVisible();
  });

  test('adds a product to the shopping bag', async ({ page }) => {
    await page.goto('/products/tsuki-platform-bed');
    await page.getByRole('button', { name: 'Add to bag' }).click();

    await expect(page.getByRole('heading', { name: 'Your bag' })).toBeVisible();
    await expect(page.getByText('1 piece selected')).toBeVisible();
    await expect(page.getByText('Tsuki Platform Bed').last()).toBeVisible();
  });

  test('expands an FAQ answer', async ({ page }) => {
    await page.goto('/faq');
    await page.getByRole('button', { name: 'Where do you deliver?' }).click();

    await expect(page.getByText(/deliver throughout Peninsular Malaysia/i)).toBeVisible();
  });

  test('serves crawler discovery files', async ({ request }) => {
    const sitemap = await request.get('/sitemap.xml');
    const robots = await request.get('/robots.txt');

    expect(sitemap.ok()).toBeTruthy();
    expect(await sitemap.text()).toContain('/products/tsuki-platform-bed');
    expect(robots.ok()).toBeTruthy();
    expect(await robots.text()).toContain('/sitemap.xml');
  });

  test('opens mobile navigation', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile navigation is only rendered in the mobile project.');

    await page.goto('/');
    await page.getByRole('button', { name: 'Open navigation' }).click();
    await expect(page.getByRole('link', { name: 'Collection' })).toBeVisible();
  });
});
