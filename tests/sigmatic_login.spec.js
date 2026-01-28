// playwright test for sigmatic dashboard login
const { test, expect } = require('@playwright/test');

test('@smoke Sigmatic dashboard login', async ({ page }) => {
  await page.goto('https://staging.sigmatic.ai/dashboard/');
  // Try to find login form
  const emailSelector = 'input[type="email"], input[name*="email" i], input[placeholder*="email" i]';
  const passwordSelector = 'input[type="password"], input[name*="password" i], input[placeholder*="password" i]';
  const loginButtonSelector = 'button[type="submit"], button:has-text("Login"), button:has-text("Sign In")';

  // If login form is present, fill it
  if (await page.$(emailSelector)) {
    await page.fill(emailSelector, 'admin@sigmatic.ai');
    await page.fill(passwordSelector, 'admin123');
    await page.click(loginButtonSelector);
    await page.waitForLoadState('networkidle');
  }

  // Validate dashboard loaded
  await expect(page).toHaveURL(/dashboard/);
  await expect(page).toHaveTitle(/Sigmatic/);
});
