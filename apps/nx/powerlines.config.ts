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

import tsdown from "@powerlines/plugin-tsdown";
import untyped from "@powerlines/plugin-untyped";
import { defineConfig } from "powerlines/config";

const config = defineConfig([
  {
    skipCache: true,
    name: "nx-base",
    input: ["src/index.ts", "src/executors/*/executor.ts"],
    plugins: [untyped(), tsdown()],
    platform: "node",
    resolve: {
      skipNodeModulesBundle: true
    },
    tsdown: {
      minify: false,
      unbundle: false,
      exports: false,
      fixedExtension: false
    }
  },
  {
    skipCache: true,
    name: "nx-plugin",
    input: ["src/plugin/index.ts"],
    plugins: [tsdown()],
    platform: "node",
    resolve: {
      noExternal: ["@powerlines/nx/helpers/plugin-utilities"]
    },
    tsdown: {
      minify: false,
      exports: false,
      fixedExtension: false
    }
  }
]);

export default config;
