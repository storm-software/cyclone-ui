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

import { defineConfig } from "@sourcebook/config";

export default defineConfig({
  homepage: "https://cyclone-ui.com",
  useLocalOutput: false,
  displayName: "Cyclone UI",
  docs: [
    {
      type: "design-system",
      outputPath: "docs/design-system",
      tokens: "packages/tokens/src/tokens",
      fonts: ["fonts/storm-sans", "fonts/storm-serif"],
      icons: "components/icons/src/icons",
      components: "components"
    },
    {
      type: "library",
      outputPath: "docs/packages",
      packages: "packages"
    },
    {
      type: "application",
      variant: "cli",
      src: "packages/cli"
    }
  ]
});
