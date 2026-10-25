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

import { animations } from "@tamagui/config/animations-motion";
import defaultConfig from "./default-config";

/**
 * The config that `config.ts` spreads in, plus its animation driver.
 *
 * @remarks
 * Exported as `@cyclone-ui/tokens/tamagui-defaults` for the Tamagui configs
 * `@cyclone-ui/theme-builder` generates in apps, so they import nothing else
 * from `@tamagui/config`.
 */
export default { ...defaultConfig, animations };
