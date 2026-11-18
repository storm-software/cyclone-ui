/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { fileURLToPath } from "node:url";
import type { Alias, Plugin } from "vite";
import { transformWithOxc } from "vite";

const resolveFromRoot = (path: string) =>
  fileURLToPath(new URL(`../../${path}`, import.meta.url));

/**
 * Point React Native imports (e.g. from `@cyclone-ui/icons`) at their web
 * builds; `react-native` itself ships Flow syntax Node cannot load.
 */
export const reactNativeWebAliases: Alias[] = [
  {
    find: "react-native-svg",
    replacement: resolveFromRoot(
      "apps/storybook/node_modules/@tamagui/react-native-svg"
    )
  },
  {
    find: /^react-native\/Libraries\/Renderer\/shims\//,
    replacement: resolveFromRoot(
      "apps/storybook/node_modules/@tamagui/proxy-worm"
    )
  },
  {
    find: "react-native",
    replacement: resolveFromRoot("node_modules/react-native-web")
  }
];

/** Built workspace packages, which keep their JSX (`jsx: preserve`). */
const COMPONENT_DIST_RE = /\/(components|packages)\/[^/]+\/dist\/.+\.mjs$/;

/**
 * Transforms the JSX in workspace components' `dist/*.mjs` so tests can
 * import other components. Vite's oxc plugin parses `.mjs` as plain JS.
 */
export const componentDistJsx = (): Plugin => ({
  name: "cyclone-ui:component-dist-jsx",
  enforce: "pre",
  async transform(code, id) {
    if (!COMPONENT_DIST_RE.test(id.split("?")[0]!)) {
      return null;
    }

    const result = await transformWithOxc(code, id, {
      lang: "jsx",
      jsx: { runtime: "automatic" }
    });

    return { code: result.code, map: result.map };
  }
});
