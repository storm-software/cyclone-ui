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

import type { TamaguiVitePluginOptions } from "@tamagui/vite-plugin";
import { tamaguiPlugin } from "@tamagui/vite-plugin";
import type { PluginOption } from "vite";

export type CycloneUIVitePluginOptions = TamaguiVitePluginOptions;

/**
 * Set up Tamagui and Cyclone UI components in a Vite application.
 *
 * @remarks
 * Adds the Tamagui Vite plugin (`react-native` → `react-native-web` aliases,
 * web extensions, dependency pre-bundling and the optimizing compiler) using
 * the Cyclone UI Tamagui config from `@cyclone-ui/tokens`. A `tamagui.build.ts`
 * file in the project root still takes precedence over these options.
 *
 * @example
 * ```ts
 * import { cycloneUI } from "@cyclone-ui/vite";
 * import react from "@vitejs/plugin-react";
 * import { defineConfig } from "vite";
 *
 * export default defineConfig({
 *   plugins: [react(), cycloneUI()]
 * });
 * ```
 *
 * @param options - Options forwarded to `@tamagui/vite-plugin`.
 * @returns The Vite plugins to add to the `plugins` array.
 */
export function cycloneUI(
  options: CycloneUIVitePluginOptions = {}
): PluginOption[] {
  return [
    tamaguiPlugin({
      config: "@cyclone-ui/tokens/tamagui",
      components: ["@tamagui/core"],
      ...options
    }),
    {
      name: "cyclone-ui",
      config: () => ({
        define: {
          // Cyclone components render web-only markup (placeholder styles,
          // animations) behind this check, and the Tamagui plugin only defines
          // it for its own config evaluation.
          "process.env.TAMAGUI_TARGET": JSON.stringify("web")
        }
      })
    }
  ];
}
