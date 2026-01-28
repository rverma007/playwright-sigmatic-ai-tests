// playwright.config.js
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 60 * 1000,

  retries: 0,
  workers: 1, // ✅ sequential execution

  use: {
    headless: false,
    viewport: { width: 1400, height: 800 },

    actionTimeout: 30 * 1000,
    navigationTimeout: 60 * 1000,

    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",

    launchOptions: {
      slowMo: 500,
    },
  },

  reporter: [
    ["list"],
    ["allure-playwright"],
    ["html", { open: "never" }],
  ],
});

