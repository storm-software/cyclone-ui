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
import type { Schema } from "@razorwind/core/schema";
import css from "@razorwind/css/generate";
import designMD from "@razorwind/design-md/generate";
import docgen from "@razorwind/docgen/generate";
import llms from "@razorwind/llms/generate";
import shadcn from "@razorwind/shadcn/generate";
import type { ShikiTheme } from "@razorwind/shiki/generate";
import shiki from "@razorwind/shiki/generate";
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
    shiki({
      outputPath: "packages/themes/src/shiki",
      mapTheme: (spec: Schema) => {
        const tokenValue = (token: unknown, fallback: string) => {
          if (
            typeof token === "object" &&
            token !== null &&
            "$value" in token &&
            typeof token.$value === "string"
          ) {
            return token.$value;
          }

          return fallback;
        };

        const tokenGroup = (token: unknown): Record<string, unknown> =>
          typeof token === "object" && token !== null
            ? (token as Record<string, unknown>)
            : {};

        const mapTheme = (theme: "dark" | "light"): ShikiTheme => {
          const color = tokenGroup(tokenGroup(spec.tokens).color);
          const ink = tokenGroup(color.ink);
          const surface = tokenGroup(color.surface);
          const accent = tokenGroup(color.accent);
          const muted = tokenGroup(color.muted);

          const base = tokenValue(
            ink.emphasis,
            theme === "dark" ? "#222222" : "#fafafa"
          );
          const body = tokenValue(ink.body, base);
          const subtleInk = tokenValue(ink.subtle, body);
          const link = tokenValue(color.link, body);
          const brand = tokenValue(accent.brand, link);
          const danger = tokenValue(accent.danger, brand);
          const warning = tokenValue(accent.warning, brand);
          const success = tokenValue(accent.success, brand);
          const info = tokenValue(accent.info, brand);
          const discovery = tokenValue(accent.discovery, brand);
          const page = tokenValue(
            surface.canvas,
            theme === "dark" ? "#222222" : "#fafafa"
          );
          const sunken = tokenValue(surface.sunken, page);
          const selection = tokenValue(muted.brand, sunken);
          const hairline = tokenValue(color.hairline, subtleInk);

          return {
            name: `cyclone-${theme}`,
            displayName: `Cyclone ${theme === "dark" ? "Dark" : "Light"}`,
            type: theme,
            bg: page,
            fg: base,
            colors: {
              "editor.background": page,
              "editor.foreground": base,
              "editorCursor.foreground": link,
              "editor.selectionBackground": selection,
              "editor.inactiveSelectionBackground": sunken,
              "editorLineNumber.foreground": subtleInk,
              "editorLineNumber.activeForeground": body,
              "editorIndentGuide.background1": hairline,
              "editorIndentGuide.activeBackground1": subtleInk,
              "editorWhitespace.foreground": subtleInk
            },
            settings: [
              {
                scope: ["comment", "punctuation.definition.comment"],
                settings: { foreground: subtleInk, fontStyle: "italic" }
              },
              {
                scope: ["string", "constant.other.symbol"],
                settings: { foreground: success }
              },
              {
                scope: ["constant", "constant.numeric", "constant.language"],
                settings: { foreground: warning }
              },
              {
                scope: ["keyword", "storage", "storage.type"],
                settings: { foreground: brand }
              },
              {
                scope: ["entity.name.function", "support.function"],
                settings: { foreground: brand }
              },
              {
                scope: [
                  "entity.name.type",
                  "entity.other.inherited-class",
                  "support.type"
                ],
                settings: { foreground: discovery }
              },
              {
                scope: ["entity.name.tag", "meta.tag"],
                settings: { foreground: brand }
              },
              {
                scope: ["entity.other.attribute-name", "support.constant"],
                settings: { foreground: info }
              },
              {
                scope: ["variable", "identifier"],
                settings: { foreground: body }
              },
              {
                scope: ["punctuation", "meta.brace"],
                settings: { foreground: subtleInk }
              },
              {
                scope: ["invalid", "invalid.illegal"],
                settings: { foreground: danger }
              }
            ]
          };
        };

        return spec.theme
          ? mapTheme(spec.theme as "dark" | "light")
          : [mapTheme("dark"), mapTheme("light")];
      }
    }),
    docgen({
      outputPath: "docs/themes"
    }),
    llms({
      outputPath: "docs/llms"
    }),
    css({
      outputPath: "packages/themes/src/css/tokens.css"
    }),
    storybook({
      outputPath: "packages/themes/src/storybook",
      mapTheme: (tokens: any) => {
        const tokenValue = (token: unknown) => {
          if (
            typeof token === "object" &&
            token !== null &&
            "$value" in token
          ) {
            return token.$value;
          }

          return undefined;
        };

        const mapTheme = (theme: "dark" | "light", brandImage: string) => {
          const color = tokens?.[theme]?.color ?? {};
          const ink = color.ink ?? {};
          const surface = color.surface ?? {};
          const accent = color.accent ?? {};
          const muted = color.muted ?? {};
          const onAccent = color["on-accent"] ?? {};

          return {
            base: theme,
            colorPrimary: tokenValue(accent.brand),
            colorSecondary: tokenValue(muted.base),

            textColor: tokenValue(ink.emphasis),
            textInverseColor: tokenValue(onAccent.base),

            appBg: tokenValue(surface.canvas),
            appContentBg: tokenValue(surface.elevated),
            appPreviewBg: tokenValue(surface.canvas),
            appBorderColor: tokenValue(color.hairline),
            appBorderRadius: tokenValue(tokens?.[theme]?.radius?.md),

            barTextColor: tokenValue(ink.body),
            barSelectedColor: tokenValue(accent.brand),
            barBg: tokenValue(surface.floating),
            barHoverColor: tokenValue(muted.base),

            buttonBg: tokenValue(surface.elevated),
            buttonBorder: tokenValue(color.hairline),

            inputBg: tokenValue(surface.elevated),
            inputBorder: tokenValue(color.hairline),
            inputTextColor: tokenValue(ink.body),
            inputBorderRadius: tokenValue(tokens?.[theme]?.radius?.md),

            booleanBg: tokenValue(surface.elevated),
            booleanSelectedBg: tokenValue(muted.base),

            brandImage
          };
        };

        return {
          dark: mapTheme(
            "dark",
            "https://public.storm-cdn.com/cyclone-ui/assets/dark-logo.svg"
          ),
          light: mapTheme(
            "light",
            "https://public.storm-cdn.com/cyclone-ui/assets/light-logo.svg"
          )
        };
      }
    })
  ]
});
