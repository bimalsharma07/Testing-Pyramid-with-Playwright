import { test, expect } from '@playwright/test';

test('Redirect to Orange HRM', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

});

