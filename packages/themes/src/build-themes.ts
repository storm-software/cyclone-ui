import { createThemeBuilder } from "@tamagui/theme-builder";
import { palettes } from "./palettes";
import { maskOptions, templates } from "./templates";
import { defaultMasks } from "@cyclone-ui/masks";
import { shadows } from "./shadows";
import { darkColors, lightColors } from "./tokens";
import { componentThemes } from "./component-themes";

const colorThemeDefinition = (colorName: string) => [
  {
    parent: "light",
    palette: colorName,
    template: "colorLight"
  },
  {
    parent: "dark",
    palette: colorName,
    template: "base"
  }
];

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
      base: colorThemeDefinition("base"),
      brand: colorThemeDefinition("brand"),
      accent: colorThemeDefinition("accent"),
      help: colorThemeDefinition("help"),
      success: colorThemeDefinition("success"),
      warning: colorThemeDefinition("warning"),
      error: colorThemeDefinition("error"),
      info: colorThemeDefinition("info")
    })
    .addChildThemes(componentThemes, {
      // to save bundle size but make alt themes not work on components
      avoidNestingWithin: ["alt1", "alt2"]
    });

  return themesBuilder.build();
};
