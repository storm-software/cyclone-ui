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
import type { TamaguiPluginOptions } from "@razorwind/tamagui";
import tamagui from "@razorwind/tamagui/generate";

export default definePlugin((options: TamaguiPluginOptions = {}) => {
  const tamaguiPlugin = tamagui({
    animations: "motion",
    defaultFont: "body-md",
    target: "v3",
    ...options
  });
  const generateTamagui = tamaguiPlugin.generate;

  return {
    ...tamaguiPlugin,
    name: "cyclone-ui:tamagui-generate",

    generate: async (
      ...[spec, config]: Parameters<NonNullable<typeof generateTamagui>>
    ) => {
      if (!generateTamagui || !spec.fonts) {
        return generateTamagui?.(spec, config) ?? {};
      }

      const fonts = Object.fromEntries(
        Object.entries(spec.fonts).map(([name, font]) => {
          if (font.source !== "local" || !font.files) {
            return [name, font];
          }

          return [
            name,
            {
              ...font,
              files: font.files.filter(
                file =>
                  typeof file.weight !== "string" ||
                  /^\d+(?:\.\d+)?$/u.test(file.weight.trim())
              )
            }
          ];
        })
      ) as typeof spec.fonts;

      return generateTamagui({ ...spec, fonts }, config);
    }
  };
});
