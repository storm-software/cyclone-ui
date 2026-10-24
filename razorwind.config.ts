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
import eslint from "@razorwind/eslint";
import llms from "@razorwind/llms/generate";
import maplibre from "@razorwind/maplibre";
import shadcn from "@razorwind/shadcn/generate";
import type { ShikiTheme } from "@razorwind/shiki/generate";
import shiki from "@razorwind/shiki/generate";
import storybook from "@razorwind/storybook/generate";
import styleDictionary from "@razorwind/style-dictionary";
import stylelint from "@razorwind/stylelint";
import tailwindcss from "@razorwind/tailwindcss/generate";
import { tokenColors } from "./maps/styles/src/create-flavor";
import { createStyle } from "./maps/styles/src/create-style";
import generate from "./packages/theme-builder/src/generate";
import preprocessor from "./packages/theme-builder/src/preprocessor";

export default defineConfig({
  name: "cyclone-ui",
  title: "Cyclone UI",
  description:
    "A modern and minimal style over an intuitive, well-structured design system. Cyclone UI was built with a deep focus on color theory, cross-platform design, and user experience.",
  homepage: "https://cyclone-ui.com",
  logo: "https://public.storm-cdn.com/cyclone-ui/assets/dark-logo.svg",
  verbose: true,
  splitThemes: true,
  fontsPath: [
    "fonts/storm-sans/dist/otf",
    "fonts/storm-sans/dist/ttf",
    "fonts/storm-serif/dist/otf",
    "fonts/storm-serif/dist/ttf"
  ],
  fontAssetsUrl: "https://public.storm-cdn.com/fonts",
  tokensPath: "packages/tokens/src/tokens/**/*.json",
  componentsPath: ["components"],
  plugins: [
    preprocessor(),
    colorVariants(),
    shadcn({
      configFile: "registry.json",
      localDependencyScopes: ["@cyclone-ui"]
    }),
    generate({
      importConfig: "./default-config",
      outputPath: "packages/tokens/src/tamagui/config.ts"
    }),
    designMD(),
    eslint({
      eslintPath: "packages/eslint-plugin/src/index.ts",
      prefix: "cyclone-ui",
      cssVarPrefix: "storm",
      tamagui: true,
      runtimeImport: "./runtime"
    }),
    stylelint({
      stylelintPath: "packages/stylelint-plugin/src/index.ts",
      prefix: "cyclone-ui",
      cssVarPrefix: "storm",
      runtimeImport: "./runtime"
    }),
    shiki({
      outputPath: "packages/shiki/src",
      fileName: "theme.json",
      mapTheme: (spec: Schema) => {
        const tokenGroup = (token: unknown): Record<string, unknown> =>
          typeof token === "object" && token !== null
            ? (token as Record<string, unknown>)
            : {};

        const resolveTokenValue = (
          value: string,
          resolvedPaths = new Set<string>()
        ): string | undefined => {
          const reference = /^\{([^{}]+)\}$/u.exec(value)?.[1];

          if (!reference) {
            return value;
          }

          if (resolvedPaths.has(reference)) {
            return undefined;
          }

          let referencedToken: unknown = spec.tokens;

          for (const pathPart of reference.split(".")) {
            referencedToken = tokenGroup(referencedToken)[pathPart];
          }

          if (
            typeof referencedToken !== "object" ||
            referencedToken === null ||
            !("$value" in referencedToken) ||
            typeof referencedToken.$value !== "string"
          ) {
            return undefined;
          }

          return resolveTokenValue(
            referencedToken.$value,
            new Set([...resolvedPaths, reference])
          );
        };

        const tokenValue = (token: unknown, fallback: string) => {
          if (
            typeof token === "object" &&
            token !== null &&
            "$value" in token &&
            typeof token.$value === "string"
          ) {
            return resolveTokenValue(token.$value) ?? fallback;
          }

          return fallback;
        };

        const mapTheme = (theme: "dark" | "light"): ShikiTheme => {
          const color = tokenGroup(tokenGroup(spec.tokens).color);

          const base = tokenValue(
            color.emphasis,
            theme === "dark" ? "#222222" : "#fafafa"
          );
          const body = tokenValue(color.ink, base);
          const subtleInk = tokenValue(color.subtle, body);
          const info = tokenValue(tokenGroup(color.info).primary, body);
          const danger = tokenValue(tokenGroup(color.danger).primary, info);
          const warning = tokenValue(tokenGroup(color.warning).primary, info);
          const success = tokenValue(tokenGroup(color.success).primary, info);
          const discovery = tokenValue(
            tokenGroup(color.discovery).primary,
            info
          );
          const page = tokenValue(
            color.canvas,
            theme === "dark" ? "#222222" : "#fafafa"
          );
          const surface = tokenValue(color.surface, page);
          const selection = tokenValue(
            color.emphasis,
            color.elevated as string
          );
          const onSelection = page;
          const border = tokenValue(color.outline, subtleInk);

          return {
            name: `cyclone-${theme
              .replace(/([a-z0-9])([A-Z])/gu, "$1-$2")
              .toLowerCase()}`,
            displayName: `Cyclone ${theme === "dark" ? "Dark" : "Light"}`,
            type: theme,
            bg: page,
            fg: base,
            colors: {
              "editor.background": page,
              "editor.foreground": base,
              "editorCursor.foreground": info,
              "editor.selectionBackground": selection,
              "editor.selectionForeground": onSelection,
              "editor.inactiveSelectionBackground": surface,
              "editorLineNumber.foreground": subtleInk,
              "editorLineNumber.activeForeground": body,
              "editorIndentGuide.background1": border,
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
                settings: { foreground: info }
              },
              {
                scope: ["entity.name.function", "support.function"],
                settings: { foreground: info }
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
                settings: { foreground: info }
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
      outputPath: "docs/themes",
      cssVarPrefix: "storm"
    }),
    llms({
      outputPath: "docs/llms"
    }),
    maplibre({
      outputPath: "maps/styles/__generated__",
      mapTheme: (tokens: any) => {
        const style = (
          theme: "dark" | "light",
          color: ReturnType<typeof tokenColors>
        ) => ({
          ...createStyle({
            theme,
            archiveUrl:
              "pmtiles://https://public.storm-cdn.com/basemaps/tiles/data/monaco.pmtiles",
            color
          }),
          name: "Cyclone"
        });

        // Unsplit token sets keep primitives in `base`
        if (tokens.base) {
          return (["light", "dark"] as const).map(theme =>
            style(theme, tokenColors(tokens.base))
          );
        }

        // Split themes each get one token set; a dark canvas picks the dark flavor
        const color = tokenColors(tokens);
        const canvas = color(
          String(tokens.color.canvas.$value)
            .replace(/^\{color\.|\}$/g, "")
            .replaceAll(".", "-")
        );

        return style(
          Number.parseInt(canvas.slice(1, 3), 16) < 128 ? "dark" : "light",
          color
        );
      }
    }),
    css({
      outputPath: "packages/tokens/src/css/tokens.css",
      prefix: "storm"
    }),
    // Theme-only `@theme` blocks, so React Email's `<Tailwind theme>` can load them
    tailwindcss({
      cssPath: "packages/tokens/src/tailwindcss/tokens.css",
      includeImport: false
    }),
    styleDictionary({
      platforms: {
        ts: {
          transformGroup: "js",
          buildPath: "packages/tokens/src/js",
          files: [
            {
              format: "javascript/module",
              destination: "tokens.js"
            },
            {
              format: "typescript/module-declarations",
              destination: "tokens.d.ts"
            }
          ]
        }
      }
    }),
    storybook({
      outputPath: "apps/storybook/src",
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

          return {
            base: theme,
            colorPrimary: tokenValue(color.emphasis),
            colorSecondary: tokenValue(color.subtlest),

            textColor: tokenValue(color.emphasis),
            textInverseColor: tokenValue(color.canvas),

            appBg: tokenValue(color.canvas),
            appContentBg: tokenValue(color.canvas),
            appPreviewBg: tokenValue(color.canvas),
            appBorderColor: tokenValue(color.outline),
            appBorderRadius: tokenValue(tokens?.[theme]?.radius?.md),

            barTextColor: tokenValue(color.ink),
            barSelectedColor: tokenValue(color.emphasis),
            barBg: tokenValue(color.floating),
            barHoverColor: tokenValue(color.subtlest),

            buttonBg: tokenValue(color.elevated),
            buttonBorder: tokenValue(color.hairline),

            inputBg: tokenValue(color.elevated),
            inputBorder: tokenValue(color.outline),
            inputTextColor: tokenValue(color.ink),
            inputBorderRadius: tokenValue(tokens?.[theme]?.radius?.md),

            booleanBg: tokenValue(color.elevated),
            booleanSelectedBg: tokenValue(color.subtlest),

            brandImage
          } as Record<string, unknown>;
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
