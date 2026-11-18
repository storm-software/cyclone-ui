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

import { GLOBALS_UPDATED } from "storybook/internal/core-events";
import { addons } from "storybook/manager-api";
import { resolveStorybookTheme, storybookThemes } from "./storybook-themes";

addons.setConfig({
  theme: storybookThemes.dark
});

addons.register("cyclone-ui/theme", api => {
  const syncManagerTheme = () => {
    addons.setConfig({
      theme: resolveStorybookTheme(api.getGlobals().mode)
    });
  };

  syncManagerTheme();
  api.on(GLOBALS_UPDATED, syncManagerTheme);
});
