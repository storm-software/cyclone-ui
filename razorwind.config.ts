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
            colorPrimary: tokens?.dark?.color?.foreground?.primary,
            colorSecondary: tokens?.dark?.color?.foreground?.secondary,

            barTextColor: tokens?.dark?.color?.foreground?.primary,
            barSelectedColor: tokens?.dark?.color?.foreground?.accent,
            barBg: tokens?.dark?.color?.surface2,
            barHoverColor: tokens?.dark?.color?.surface3,

            buttonBg: tokens?.dark?.color?.background?.primary,
            buttonBorder: tokens?.dark?.color?.border?.primary,

            inputBg: tokens?.dark?.color?.background?.primary,
            inputBorder: tokens?.dark?.color?.border?.primary,
            inputTextColor: tokens?.dark?.color?.foreground?.primary,
            inputBorderRadius: tokens?.dark?.radius?.md,

            booleanBg: tokens?.dark?.color?.background?.primary,
            booleanSelectedBg: tokens?.dark?.color?.background?.primary,

            brandImage:
              "https://public.storm-cdn.com/cyclone-ui/assets/dark-logo.svg"
          },
          light: {
            base: "light",
            colorPrimary: tokens?.light?.color?.foreground?.primary,
            colorSecondary: tokens?.light?.color?.foreground?.secondary,

            barTextColor: tokens?.light?.color?.foreground?.secondary,
            barSelectedColor: tokens?.light?.color?.foreground?.primary,
            barBg: tokens?.light?.color?.surface2,
            barHoverColor: tokens?.light?.color?.surface3,

            buttonBg: tokens?.light?.color?.background?.primary,
            buttonBorder: tokens?.light?.color?.border?.primary,

            inputBg: tokens?.light?.color?.background?.primary,
            inputBorder: tokens?.light?.color?.border?.primary,
            inputTextColor: tokens?.light?.color?.foreground?.primary,
            inputBorderRadius: tokens?.light?.radius?.md,

            booleanBg: tokens?.light?.color?.background?.primary,
            booleanSelectedBg: tokens?.light?.color?.background?.primary,

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
