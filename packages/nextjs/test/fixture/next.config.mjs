import { realpathSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { withCycloneUI } from "../../src/index.ts";

// The fixture imports workspace components that resolve different pnpm peer
// variants of `@tamagui/core`/`@tamagui/web`; a second copy can't see the
// first one's config. Point every import at one copy, as an app's single
// install does.
const tamaguiCore = realpathSync(
  new URL("../../node_modules/@tamagui/core", import.meta.url)
);
// Turbopack resolves aliases to paths relative to the project directory.
const fromProject = (path) => `./${relative(import.meta.dirname, path)}`;

export default withCycloneUI({
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    resolveAlias: {
      "@tamagui/core": fromProject(tamaguiCore),
      "@tamagui/web": fromProject(join(dirname(tamaguiCore), "web"))
    }
  },
  experimental: {
    exposeTestingApiInProductionBuild: process.env.EXPOSE_TESTING_API === "1"
  }
}, {
  // `CYCLONE_UI_TAILWIND=1` runs the suite with Tamagui's CSS layered for
  // Tailwind; `tailwind.browser.spec.ts` only runs then.
  tailwind: process.env.CYCLONE_UI_TAILWIND === "1"
});
