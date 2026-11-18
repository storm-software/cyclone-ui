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

import { composer } from "eslint-flat-config-utils";
import parser from "jsonc-eslint-parser";
import baseConfig from "../../eslint.config.mjs";

export default composer(baseConfig)
  .append({
    files: ["**/*.json"],
    rules: {
      "@nx/dependency-checks": [
        "error",
        {
          ignoredFiles: ["{projectRoot}/eslint.config.{js,cjs,mjs}"]
        }
      ]
    },
    languageOptions: {
      parser
    }
  })
  .append({
    files: [
      "./package.json",
      "./generators.json",
      "./executors.json",
      "./generators.json",
      "./executors.json",
      "./migrations.json"
    ],
    rules: {
      "@nx/nx-plugin-checks": "error"
    },
    languageOptions: {
      parser
    }
  });
