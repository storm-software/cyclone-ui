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

import type { WithTamaguiProps } from "@tamagui/next-plugin";
import type { NextConfig } from "next";
import { createRequire } from "node:module";
import { join } from "node:path";

/**
 * Options forwarded to `@tamagui/next-plugin` when Next.js builds with Webpack.
 */
export type WithCycloneUIOptions = Partial<WithTamaguiProps>;

/**
 * Wrap a Next.js config with the setup Tamagui and Cyclone UI components need.
 *
 * @remarks
 * - Turbopack (the Next.js default): aliases `react-native` to
 *   `react-native-web` and `react-native-svg` to `@tamagui/react-native-svg`.
 * - Webpack (`next build --webpack`): applies `@tamagui/next-plugin`, which
 *   must be installed, with the Cyclone UI Tamagui config.
 * - Both: defines `process.env.TAMAGUI_TARGET`.
 *
 * Turbopack builds don't run the Tamagui compiler. To optimize them, use the
 * Tamagui CLI: `tamagui build --target web ./src -- next build`.
 *
 * @example
 * ```ts
 * // next.config.ts
 * import { withCycloneUI } from "@cyclone-ui/nextjs";
 *
 * export default withCycloneUI({ reactStrictMode: true });
 * ```
 *
 * @param nextConfig - The Next.js config to extend.
 * @param options - Options forwarded to `@tamagui/next-plugin` (Webpack only).
 * @returns The extended Next.js config.
 */
export function withCycloneUI(
  nextConfig: NextConfig = {},
  options: WithCycloneUIOptions = {}
): NextConfig {
  return {
    ...nextConfig,
    env: {
      TAMAGUI_TARGET: "web",
      ...nextConfig.env
    },
    turbopack: {
      ...nextConfig.turbopack,
      resolveAlias: {
        "react-native": "react-native-web",
        "react-native-svg": "@tamagui/react-native-svg",
        ...nextConfig.turbopack?.resolveAlias
      }
    },
    // Next.js only calls this for Webpack builds, so Turbopack apps don't need
    // `@tamagui/next-plugin` installed.
    webpack: (config, context) => {
      const { withTamagui } = createRequire(join(context.dir, "package.json"))(
        "@tamagui/next-plugin"
      ) as typeof import("@tamagui/next-plugin");

      return withTamagui({
        config: "@cyclone-ui/tokens/tamagui",
        components: ["@tamagui/core"],
        appDir: true,
        ...options
      })(nextConfig).webpack(config, context);
    }
  };
}
