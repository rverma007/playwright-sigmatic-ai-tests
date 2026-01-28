import { test, expect } from "@playwright/test";

// Utility function (define ONCE, after imports)
function generateRandomEmail() {
  const timestamp = Date.now();
  return `testruchi_${timestamp}@gmail.com`;
}

test("@smoke Admin can add user and see it in Users List", async ({ page }) => {
  const baseUrl = "https://staging.sigmatic.ai";
  const adminEmail = "admin@sigmatic.ai";
  const adminPassword = "admin123";

  const userName = "test11665";
  const userEmail = generateRandomEmail(); // ✅ RANDOM EMAIL

  // 1️⃣ Login
  await page.goto(`${baseUrl}/dashboard`, { waitUntil: "domcontentloaded" });

  await page.getByLabel(/email/i).fill(adminEmail);
  await page.getByLabel(/password/i).fill(adminPassword);
  await page.getByRole("button", { name: /login/i }).click();

  // 2️⃣ Go to Users page
  await page.getByText("Onboard").click();
  await page.getByText("Add Users").click();
  await expect(page.getByText("Users List")).toBeVisible();

  // 3️⃣ Click ADD USER
  await page.getByRole("button", { name: "ADD USER" }).click();

  // 4️⃣ Fill Add User modal
  await page.getByLabel(/name/i).fill(userName);
  await page.getByLabel(/email/i).fill(userEmail);
  await page.getByRole("combobox", { name: "Role" }).click();
  await page.getByRole("option", { name: "Admin" }).click();
  await page.getByRole("button", { name: /submit/i }).click();

  // 5️⃣ Validate success message (if shown)
  const successToast = page.getByText(/success|added|invite/i);
  if (await successToast.count()) {
    await expect(successToast).toBeVisible();
  }

  // 6️⃣ Search for the new user
  await page.getByPlaceholder("Search Users").fill(userEmail);

  // 7️⃣ Validate email exists
  await expect(
    page.getByText(userEmail, { exact: true })
  ).toBeVisible({ timeout: 15000 });

  // 8️⃣ Validate username exists
  await expect(
    page.getByText(userName, { exact: true })
  ).toBeVisible({ timeout: 15000 });
});
