import { test, expect } from '@playwright/test';

test('Add user test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://staging.sigmatic.ai/login/");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("admin@sigmatic.ai");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("textbox", { name: "Password" }).press("Enter");
  await page.getByRole("textbox", { name: "Password" }).press("Enter");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByText("Onboard").click();
  await page.getByText("Add Users").click();
  await page.getByRole("button", { name: "Add User" }).click();
  await page.getByRole("textbox", { name: "Name" }).click();
  await page.getByRole("textbox", { name: "Name" }).fill("test11");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("a@b.com");
  await page.getByRole("combobox", { name: "Role" }).click();
  await page.getByRole("option", { name: "Admin" }).click();
  await page.getByRole("button", { name: "Submit" }).click();

  await expect(page.getByText("test11")).toBeVisible();
  await expect(page.getByText("a@b.com")).toBeVisible();
});




