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
import tamaguiPreprocessor from "./tools/razorwind/src/tamagui-preprocessor";

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
    tamaguiPreprocessor(),
    colorVariants(),
    shadcn({
      configFile: "registry.json"
    }),
    tamagui({
      animations: "motion",
      defaultFont: "Space Grotesk",
      importConfig: "./default-config",
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
            colorPrimary: tokens?.dark?.color?.foreground?.primary?.$value,
            colorSecondary: tokens?.dark?.color?.foreground?.secondary?.$value,

            textColor: tokens?.dark?.color?.foreground?.primary?.$value,
            textInverseColor: tokens?.dark?.color?.foreground?.inverse?.$value,

            appBg: tokens?.dark?.color?.background?.page?.$value,
            appContentBg: tokens?.dark?.color?.background?.page?.$value,
            appPreviewBg: tokens?.dark?.color?.background?.page?.$value,
            appBorderColor: tokens?.dark?.color?.border?.primary?.$value,
            appBorderRadius: tokens?.dark?.radius?.md?.$value,

            barTextColor: tokens?.dark?.color?.foreground?.primary?.$value,
            barSelectedColor: tokens?.dark?.color?.foreground?.accent?.$value,
            barBg: tokens?.dark?.color?.background?.floating?.$value,
            barHoverColor: tokens?.dark?.color?.background?.primary?.$value,

            buttonBg: tokens?.dark?.color?.background?.elevated?.$value,
            buttonBorder: tokens?.dark?.color?.border?.primary?.$value,

            inputBg: tokens?.dark?.color?.background?.elevated?.$value,
            inputBorder: tokens?.dark?.color?.border?.primary?.$value,
            inputTextColor: tokens?.dark?.color?.foreground?.primary?.$value,
            inputBorderRadius: tokens?.dark?.radius?.md?.$value,

            booleanBg: tokens?.dark?.color?.background?.elevated?.$value,
            booleanSelectedBg: tokens?.dark?.color?.background?.primary?.$value,

            brandImage:
              "https://public.storm-cdn.com/cyclone-ui/assets/dark-logo.svg"
          },
          light: {
            base: "light",
            colorPrimary: tokens?.light?.color?.foreground?.primary?.$value,
            colorSecondary: tokens?.light?.color?.foreground?.accent?.$value,

            textColor: tokens?.light?.color?.foreground?.primary?.$value,
            textInverseColor: tokens?.light?.color?.foreground?.inverse?.$value,

            appBg: tokens?.light?.color?.background?.page?.$value,
            appContentBg: tokens?.light?.color?.background?.page?.$value,
            appPreviewBg: tokens?.light?.color?.background?.page?.$value,
            appBorderColor: tokens?.light?.color?.border?.primary?.$value,
            appBorderRadius: tokens?.light?.radius?.md?.$value,

            barTextColor: tokens?.light?.color?.foreground?.primary?.$value,
            barSelectedColor: tokens?.light?.color?.foreground?.accent?.$value,
            barBg: tokens?.light?.color?.background?.floating?.$value,
            barHoverColor: tokens?.light?.color?.background?.primary?.$value,

            buttonBg: tokens?.light?.color?.background?.elevated?.$value,
            buttonBorder: tokens?.light?.color?.border?.primary?.$value,

            inputBg: tokens?.light?.color?.background?.elevated?.$value,
            inputBorder: tokens?.light?.color?.border?.primary?.$value,
            inputTextColor: tokens?.light?.color?.foreground?.primary?.$value,
            inputBorderRadius: tokens?.light?.radius?.md?.$value,

            booleanBg: tokens?.light?.color?.background?.elevated?.$value,
            booleanSelectedBg:
              tokens?.light?.color?.background?.primary?.$value,

            brandImage:
              "https://public.storm-cdn.com/cyclone-ui/assets/light-logo.svg"
          }
        };
      }
    })
  ]
});
