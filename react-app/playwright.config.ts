import {defineConfig, devices} from "@playwright/test";

require("dotenv").config();

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["list"], ["html"]],
  use: {
    baseURL: "http://127.0.0.1:5173",
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: {...devices["Desktop Chrome"]},
    },

    {
      name: "firefox",
      use: {...devices["Desktop Firefox"]},
    },

    {
      name: "webkit",
      use: {...devices["Desktop Safari"]},
    },

    {
      name: "Mobile Safari",
      use: {...devices["iPhone 12"]},
    },

    {
      name: "Microsoft Edge",
      use: {...devices["Desktop Edge"], channel: "msedge"},
    },
  ],
});
