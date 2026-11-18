import { realpathSync } from "node:fs";
import { dirname, join } from "node:path";
import { defineConfig } from "vitest/config";
import {
  componentDistJsx,
  reactNativeWebAliases
} from "../../tools/config/vitest.component";

// Components resolve different pnpm peer variants of `@tamagui/core` and
// `@tamagui/web`; a second copy can't see the first one's config. Point every
// import at this package's copy (inlined below so `node_modules` imports go
// through the alias too).
const tamaguiCore = realpathSync(
  join(import.meta.dirname, "node_modules/@tamagui/core")
);
const tamaguiWeb = join(dirname(tamaguiCore), "web");

export default defineConfig({
  root: import.meta.dirname,
  cacheDir: "../../node_modules/.vite/packages/nextjs",
  plugins: [componentDistJsx()],
  oxc: { jsx: { runtime: "automatic" as const } },
  resolve: {
    alias: [
      { find: /^@tamagui\/core$/, replacement: tamaguiCore },
      { find: /^@tamagui\/web$/, replacement: tamaguiWeb },
      ...reactNativeWebAliases
    ]
  },
  test: {
    name: "nextjs",
    watch: false,
    environment: "node",
    include: ["test/**/*.spec.{ts,tsx}"],
    exclude: ["test/**/*.browser.spec.ts", "test/fixture/**"],
    server: { deps: { inline: true } }
  }
});
