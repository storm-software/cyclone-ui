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

import colorVariants from "@razorwind/color-variants";
import { defineConfig } from "@razorwind/core";
import type { Tokens } from "@razorwind/core/schema";
import css from "@razorwind/css/generate";
import designMD from "@razorwind/design-md/generate";
import shadcn from "@razorwind/shadcn/generate";
import storybook from "@razorwind/storybook/generate";
import tamagui from "@razorwind/tamagui/generate";

export default defineConfig({
  name: "cyclone-ui",
  title: "Cyclone UI",
  homepage: "https://cyclone-ui.com",
  logo: "https://public.storm-cdn.com/cyclone-ui/assets/dark-logo.svg",
  verbose: true,
  splitThemes: true,
  tokensPath: "packages/themes/src/tokens/**/*.json",
  componentsPath: ["components"],
  plugins: [
    colorVariants(),
    shadcn({
      configFile: "registry.json"
    }),
    tamagui({
      animations: "motion",
      defaultFont: "Space Grotesk",
      outputPath: "packages/themes/src/tamagui/config.ts"
    }),
    designMD(),
    css({
      outputPath: "packages/themes/src/css/tokens.css"
    }),
    storybook({
      outputPath: "packages/themes/src/storybook",
      mapTheme: (tokens: Tokens) => {
        return {
          dark: {
            base: "dark",
            colorPrimary: tokens.dark?.color?.forground?.primary,
            colorSecondary: tokens.dark?.color?.forground?.secondary,

            barTextColor: tokens.dark?.color?.forground?.primary,
            barSelectedColor: tokens.dark?.color?.forground?.secondary,
            barBg: tokens.dark?.color?.background?.primary,
            barHoverColor: tokens.dark?.color?.background?.secondary,

            buttonBg: tokens.dark?.button?.primary?.background,
            buttonBorder: tokens.dark?.button?.primary?.border,

            inputBg: tokens.dark?.control?.primary?.background,
            inputBorder: tokens.dark?.control?.primary?.border,
            inputTextColor: tokens.dark?.control?.primary?.foreground,
            inputBorderRadius: tokens.dark?.radius?.md,

            booleanBg: tokens.dark?.control?.primary?.background,
            booleanSelectedBg: tokens.dark?.control?.primary?.background,

            brandImage:
              "https://public.storm-cdn.com/cyclone-ui/assets/dark-logo.svg"
          },
          light: {
            base: "light",
            colorPrimary: tokens.light?.color?.forground?.primary,
            colorSecondary: tokens.light?.color?.forground?.secondary,

            barTextColor: tokens.light?.color?.forground?.primary,
            barSelectedColor: tokens.light?.color?.forground?.secondary,
            barBg: tokens.light?.color?.background?.primary,
            barHoverColor: tokens.light?.color?.background?.secondary,

            buttonBg: tokens.light?.button?.primary?.background,
            buttonBorder: tokens.light?.button?.primary?.border,

            inputBg: tokens.light?.background?.elevated,
            inputBorder: tokens.light?.control?.primary?.border,
            inputTextColor: tokens.light?.control?.primary?.foreground,
            inputBorderRadius: tokens.light?.radius?.md,

            booleanBg: tokens.light?.control?.primary?.background,
            booleanSelectedBg: tokens.light?.control?.primary?.background,

            // //
            // colorPrimary: "#3A10E5",
            // colorSecondary: "#585C6D",

            // // UI
            // appBg: "#ffffff",
            // appContentBg: "#ffffff",
            // appPreviewBg: "#ffffff",
            // appBorderColor: "#585C6D",
            // appBorderRadius: 4,

            // // Text colors
            // textColor: "#10162F",
            // textInverseColor: "#ffffff",

            // // Toolbar default and active colors
            // barTextColor: "#9E9E9E",
            // barSelectedColor: "#585C6D",
            // barHoverColor: "#585C6D",
            // barBg: "#ffffff",

            // // Form colors
            // inputBg: tokens.light?.background?.elevated,
            // inputBorder: tokens.light?.border?.primary,
            // inputTextColor: tokens.light?.color?.forground?.primary,
            // inputBorderRadius: 1,

            brandImage:
              "https://public.storm-cdn.com/cyclone-ui/assets/light-logo.svg"
          }
        };
      }
    })
  ]
});
