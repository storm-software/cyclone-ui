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

import { defaultMasks } from "@cyclone-ui/masks";
import {
  componentThemes,
  darkColors,
  lightColors,
  palettes,
  shadows,
  templates
} from "@cyclone-ui/tokens";
import { createThemeBuilder } from "@tamagui/theme-builder";
import { getColorDefinition } from "./get-color-definition";

export const buildThemes = () => {
  const themesBuilder = createThemeBuilder()
    .addPalettes(palettes)
    .addTemplates(templates)
    .addMasks(defaultMasks)
    .addThemes({
      light: {
        template: "base",
        palette: "light",
        nonInheritedValues: {
          ...lightColors,
          ...shadows.light
        }
      },
      dark: {
        template: "base",
        palette: "dark",
        nonInheritedValues: {
          ...darkColors,
          ...shadows.dark
        }
      }
    })
    .addChildThemes({
      base: getColorDefinition("base"),
      brand: getColorDefinition("brand"),
      alternate: getColorDefinition("alternate"),
      accent: getColorDefinition("accent"),
      help: getColorDefinition("help"),
      success: getColorDefinition("success"),
      warning: getColorDefinition("warning"),
      error: getColorDefinition("error"),
      info: getColorDefinition("info")
    })
    .addChildThemes(componentThemes, {
      // to save bundle size but make alt themes not work on components
      avoidNestingWithin: ["alt1", "alt2"]
    });

  return themesBuilder.build();
};
