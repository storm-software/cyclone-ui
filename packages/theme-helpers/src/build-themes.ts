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
