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
import type { TamaguiVitePluginOptions } from "@tamagui/vite-plugin";
import { tamaguiPlugin } from "@tamagui/vite-plugin";
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
};

const GENERATED_CONFIG = ".cyclone-ui/tamagui.config.ts";

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
 * import react from "@vitejs/plugin-react";
 * import { defineConfig } from "vite";
 *
 * export default defineConfig({
 *   plugins: [react(), cycloneUI({ tokens: "tokens/**\/*.json" })]
 * });
 * ```
 *
 * @param options - The design `tokens`, plus options forwarded to
 * `@tamagui/vite-plugin`.
 * @returns The Vite plugins to add to the `plugins` array.
 */
export function cycloneUI({
  tokens,
  ...options
}: CycloneUIVitePluginOptions = {}): PluginOption[] {
  return [
    {
      name: "cyclone-ui",
      // Ahead of the Tamagui plugin, which loads the config after `config`.
      enforce: "pre",
      async config({ root }) {
        const configPath =
          tokens &&
          (await (
            await import("@cyclone-ui/theme-builder")
          ).buildTamaguiConfig({
            tokens,
            cwd: root,
            outputPath: GENERATED_CONFIG
          }));

        return {
          define: {
            // Cyclone components render web-only markup (placeholder styles,
            // animations) behind this check, and the Tamagui plugin only
            // defines it for its own config evaluation.
            "process.env.TAMAGUI_TARGET": JSON.stringify("web")
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
      }
    },
    tamaguiPlugin({
      config: tokens ? GENERATED_CONFIG : "@cyclone-ui/tokens/tamagui",
      components: ["@tamagui/core"],
      ...options
    })
  ];
}
