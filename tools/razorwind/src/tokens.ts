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

import { definePlugin } from "@razorwind/core/plugin";
import styleDictionary from "@razorwind/style-dictionary";
import { mapDtcgDictionaryToTamaguiV5 } from "./dtcg-to-tamagui";

export default definePlugin(
  styleDictionary({
    hooks: {
      preprocessors: {
        "dtcg-to-tamagui-v5": mapDtcgDictionaryToTamaguiV5
      }
    },
    preprocessors: ["dtcg-to-tamagui-v5"],
    platforms: {
      js: {
        transformGroup: "js",
        buildPath: "packages/theme/src/js",
        files: [
          {
            destination: "tokens.js",
            format: "javascript/es6"
          }
        ]
      }
    }
  }),
  {
    name: "cyclone-ui:tokens",
    preprocessors: [
      {
        name: "dtcg-to-tamagui-v5",
        preprocessor: mapDtcgDictionaryToTamaguiV5
      }
    ]
  }
);
