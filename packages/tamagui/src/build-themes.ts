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

import {
  defaultMasks,
  getColorDefinition,
  type ColorThemeTokens
} from "@cyclone-ui/colors";
import { createThemeBuilder } from "@tamagui/theme-builder";
import { componentThemes } from "./tokens/component-themes";
import { getPalettes } from "./tokens/palettes";
import { shadows } from "./tokens/shadows";
import { templates } from "./tokens/templates";
import { darkColors, lightColors } from "./tokens/tokens";

export const buildThemes = (colors: ColorThemeTokens): any => {
  const themesBuilder = createThemeBuilder()
    .addPalettes(getPalettes(colors))
    .addTemplates(templates)
    .addMasks({
      identity: defaultMasks.identity,
      inverse: defaultMasks.inverse,
      strengthen: defaultMasks.strengthen
    })
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
      link: getColorDefinition("link"),
      help: getColorDefinition("help"),
      success: getColorDefinition("success"),
      warning: getColorDefinition("warning"),
      danger: getColorDefinition("danger"),
      info: getColorDefinition("info"),
      positive: getColorDefinition("positive"),
      negative: getColorDefinition("negative")
    })
    .addChildThemes(componentThemes, {
      // to save bundle size but make alt themes not work on components
      avoidNestingWithin: ["alt1", "alt2"]
    });

  return themesBuilder.build();
};
