import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const projectRoot = dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => ({
  resolve: {
    tsconfigPaths: true
  },
  root: import.meta.dirname,
  cacheDir: "../../node_modules/.vite/apps/storybook",
  plugins: [],
  test: {
    watch: false,
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({ configDir: join(projectRoot, ".storybook") })
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            provider: playwright(),
            headless: true,
            instances: [{ browser: "chromium" }]
          }
        }
      }
    ]
  }
}));
