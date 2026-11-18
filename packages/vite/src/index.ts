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

import type { BuildTamaguiConfigOptions } from "@cyclone-ui/theme-builder";
import { TAILWIND_LAYER_ORDER } from "@cyclone-ui/theme-builder/tailwind";
import type { TamaguiVitePluginOptions } from "@tamagui/vite-plugin";
import { createTamaguiPlugins } from "@tamagui/vite-plugin";
import { createRequire } from "node:module";
import { join } from "node:path";
import type { PluginOption } from "vite";

export type CycloneUIVitePluginOptions = TamaguiVitePluginOptions & {
  /**
   * Design tokens to build the app's Tamagui config from: a DTCG token
   * object, or token file path(s) or globs relative to the Vite root.
   * Theme-named files (`light.tokens.json`, `dark.tokens.json`, …) become the
   * `light` / `dark` themes.
   *
   * @remarks
   * The config is generated into `.cyclone-ui/tamagui.config.ts` (add
   * `.cyclone-ui` to `.gitignore`) when Vite starts, and replaces
   * `@cyclone-ui/tokens/tamagui` for the compiler and every import in the app.
   *
   * @defaultValue The Cyclone UI config from `@cyclone-ui/tokens/tamagui`
   */
  tokens?: BuildTamaguiConfigOptions["tokens"];

  /**
   * Set the app up for Tailwind CSS v4 class names next to Cyclone UI
   * components.
   *
   * @remarks
   * - Puts all Tamagui CSS in `@layer tamagui` and declares the layer order
   *   `theme, base, tamagui, components, utilities` at the top of
   *   `index.html`. Tailwind utilities passed as `className` then override
   *   component styles, and Tailwind's preflight doesn't.
   * - Compiles `@tamagui/tailwind` components when the app depends on it.
   * - With `tokens`, also writes `.cyclone-ui/tailwind.css`; import it in
   *   place of `@cyclone-ui/tokens/tailwind.css`. This needs Node.js 22.18 or
   *   later.
   *
   * Plain CSS outside a layer beats every layer, so global app rules (such as
   * `button { padding: 0 }`) also override components once this is on.
   *
   * @defaultValue false
   */
  tailwind?: boolean;
};

const GENERATED_CONFIG = ".cyclone-ui/tamagui.config.ts";

// The layer `TAILWIND_LAYER_ORDER` places between preflight and utilities.
const TAMAGUI_LAYER = "tamagui";

const wrapInLayer = (css: string) =>
  css && `@layer ${TAMAGUI_LAYER} {\n${css}\n}`;

const isTamaguiResetCSS = (id: string) =>
  id.split("?", 1)[0]!.replace(/\\/g, "/").endsWith("/@tamagui/core/reset.css");

const dependsOn = (name: string, root = process.cwd()) => {
  try {
    createRequire(join(root, "package.json")).resolve(`${name}/package.json`);
    return true;
  } catch {
    return false;
  }
};

/**
 * Set up Tamagui and Cyclone UI components in a Vite application.
 *
 * @remarks
 * Adds the Tamagui Vite plugin (`react-native` → `react-native-web` aliases,
 * web extensions, dependency pre-bundling and the optimizing compiler) using
 * the Cyclone UI Tamagui config from `@cyclone-ui/tokens`, or one built from
 * the `tokens` option. A `tamagui.build.ts` file in the project root still
 * takes precedence over these options.
 *
 * @example
 * ```ts
 * import { cycloneUI } from "@cyclone-ui/vite";
 * import tailwindcss from "@tailwindcss/vite";
 * import react from "@vitejs/plugin-react";
 * import { defineConfig } from "vite";
 *
 * export default defineConfig({
 *   plugins: [react(), tailwindcss(), cycloneUI({ tailwind: true })]
 * });
 * ```
 *
 * @param options - The design `tokens`, the `tailwind` switch, plus options
 * forwarded to `@tamagui/vite-plugin`.
 * @returns The Vite plugins to add to the `plugins` array.
 */
export function cycloneUI({
  tokens,
  tailwind = false,
  ...options
}: CycloneUIVitePluginOptions = {}): PluginOption[] {
  const { plugins } = createTamaguiPlugins({
    config: tokens ? GENERATED_CONFIG : "@cyclone-ui/tokens/tamagui",
    components: [
      "@tamagui/core",
      ...(tailwind && dependsOn("@tamagui/tailwind")
        ? ["@tamagui/tailwind"]
        : [])
    ],
    ...(tailwind && { wrapExtractedCSS: wrapInLayer }),
    ...options
  });

  return [
    {
      name: "cyclone-ui",
      // Ahead of the Tamagui plugin, which loads the config after `config`.
      enforce: "pre",
      async config({ root }) {
        const themeBuilder =
          tokens && (await import("@cyclone-ui/theme-builder"));
        const configPath =
          themeBuilder &&
          (await themeBuilder.buildTamaguiConfig({
            tokens,
            cwd: root,
            outputPath: GENERATED_CONFIG
          }));
        if (themeBuilder && configPath && tailwind) {
          await themeBuilder.buildTailwindThemeCSS({ configPath, cwd: root });
        }

        return {
          define: {
            // Cyclone components render web-only markup (placeholder styles,
            // animations) behind this check, and the Tamagui plugin only
            // defines it for its own config evaluation.
            "process.env.TAMAGUI_TARGET": JSON.stringify("web"),
            // Tamagui wraps the CSS it injects or server-renders in this layer.
            ...(tailwind && {
              "process.env.TAMAGUI_CSS_LAYER": JSON.stringify(TAMAGUI_LAYER)
            })
          },
          ...(configPath && {
            resolve: {
              alias: [
                {
                  find: /^@cyclone-ui\/tokens\/tamagui$/,
                  replacement: configPath
                }
              ]
            }
          })
        };
      },
      ...(tailwind && {
        // Whichever stylesheet comes first fixes the layer order. React puts
        // its first `precedence` stylesheet (Tamagui's `TamaguiProvider` CSS)
        // at the top of <head> unless a `data-precedence` style is already
        // there, so this one carries the attribute to stay ahead of it.
        transformIndexHtml: () => [
          {
            tag: "style",
            attrs: { "data-precedence": "default" },
            children: TAILWIND_LAYER_ORDER,
            injectTo: "head-prepend" as const
          }
        ],
        transform(code: string, id: string) {
          return isTamaguiResetCSS(id)
            ? { code: wrapInLayer(code), map: null }
            : undefined;
        }
      })
    },
    plugins
  ];
}
