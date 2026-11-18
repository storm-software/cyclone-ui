import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./test",
  testMatch: "**/*.browser.spec.ts",
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: "list",
  outputDir: "./test-results",
  use: {
    baseURL: "http://localhost:3197",
    colorScheme: "light",
    trace: "retain-on-failure",
    launchOptions: process.env.CHROMIUM_PATH
      ? { executablePath: process.env.CHROMIUM_PATH }
      : {}
  },
  webServer: {
    command: "node test/production-server.mjs",
    url: "http://localhost:3197",
    reuseExistingServer: false,
    timeout: 120_000
  }
});
