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

import theme from "@cyclone-ui/themes/storybook";
import { addons } from "storybook/manager-api";

/**
 * Storybook `create()` requires CSS color strings. The generated Razorwind
 * theme currently emits unresolved DTCG token objects, which crash the
 * manager and leave a blank page.
 */
addons.setConfig({
  theme: theme.dark
});
