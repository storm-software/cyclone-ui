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

import { plugin as tsdown } from "@powerlines/plugin-tsdown";
import type { UserConfig } from "powerlines";
import { defineConfig } from "powerlines/config";

const config: UserConfig = defineConfig({
  input: ["src/index.ts", "bin/cli.ts"],
  output: {
    format: ["esm"],
    dts: true,
    copy: {
      path: "dist/maps/styles",
      assets: [
        {
          input: "maps/styles/__generated__",
          glob: "*.json",
          output: "styles"
        }
      ]
    }
  },
  resolve: {
    skipNodeModulesBundle: true
  },
  plugins: [
    tsdown({
      outputOptions: {
        keepNames: true
      },
      exports: false
    })
  ]
});

export default config;
