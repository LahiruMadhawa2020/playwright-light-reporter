import { test, expect } from '@playwright/test';

test.describe('User journey @smoke', () => {
  test('REQ_DEMO-1 TEST_XRAY-1001 user sees home page @functional', async ({ page }) => {
    await test.step('Go to example.com', async () => {
      await page.setContent('<html><body><h1>Example Domain</h1></body></html>');
    });
    await test.step('Check heading', async () => {
      await expect(page.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
    });
  });

  test('REQ_DEMO-2 TEST_XRAY-1002 failure sample @regression', async ({ page }) => {
    await test.step('Open page', async () => {
      await page.setContent('<html><body><h1>Example Domain</h1></body></html>');
    });
    await test.step('Failing expectation', async () => {
      await expect(page.getByText('This text does not exist')).toBeVisible({ timeout: 1500 });
    });
  });
});
