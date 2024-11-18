/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { createTamagui } from "@cyclone-ui/tamagui";
import { cyclone } from "@cyclone-ui/themes";
import type { CreateTamaguiProps, InferTamaguiConfig } from "@tamagui/web";

export const config: InferTamaguiConfig<CreateTamaguiProps> = createTamagui({
  themes: cyclone
} as CreateTamaguiProps);

export type AppConfig = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
