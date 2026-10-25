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
import type { WithTamaguiProps } from "@tamagui/next-plugin";
import type { NextConfig } from "next";
import { createRequire } from "node:module";
import { join, relative } from "node:path";

/**
 * The design tokens, plus options forwarded to `@tamagui/next-plugin` when
 * Next.js builds with Webpack.
 */
export type WithCycloneUIOptions = Partial<WithTamaguiProps> & {
  /**
   * Design tokens to build the app's Tamagui config from: a DTCG token
   * object, or token file path(s) or globs relative to the working directory.
   * Theme-named files (`light.tokens.json`, `dark.tokens.json`, …) become the
   * `light` / `dark` themes.
   *
   * @remarks
   * The config is generated into `.cyclone-ui/tamagui.config.ts` (add
   * `.cyclone-ui` to `.gitignore`) when Next.js loads its config, and replaces
   * `@cyclone-ui/tokens/tamagui` for the compiler and every import in the app,
   * including `CycloneUIProvider`.
   *
   * @defaultValue The Cyclone UI config from `@cyclone-ui/tokens/tamagui`
   */
  tokens?: BuildTamaguiConfigOptions["tokens"];
};

const extend = (
  nextConfig: NextConfig,
  options: Partial<WithTamaguiProps>,
  configPath?: string
): NextConfig => ({
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
      ...(configPath && {
        "@cyclone-ui/tokens/tamagui": `./${relative(process.cwd(), configPath)}`
      }),
      ...nextConfig.turbopack?.resolveAlias
    }
  },
  // Next.js only calls this for Webpack builds, so Turbopack apps don't need
  // `@tamagui/next-plugin` installed.
  webpack: (config, context) => {
    const { withTamagui } = createRequire(join(context.dir, "package.json"))(
      "@tamagui/next-plugin"
    ) as typeof import("@tamagui/next-plugin");

    const result = withTamagui({
      config: configPath ?? "@cyclone-ui/tokens/tamagui",
      components: ["@tamagui/core"],
      appDir: true,
      ...options
    })(nextConfig).webpack(config, context);
    if (configPath) {
      result.resolve.alias["@cyclone-ui/tokens/tamagui$"] = configPath;
    }

    return result;
  }
});

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
 * With `tokens`, the Tamagui config is built from them first, so this returns
 * a promise, which Next.js accepts as the config export.
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
 * @example
 * ```ts
 * // next.config.ts — build the Tamagui config from your own tokens
 * import { withCycloneUI } from "@cyclone-ui/nextjs";
 *
 * export default withCycloneUI({}, { tokens: "tokens/**\/*.json" });
 * ```
 *
 * @param nextConfig - The Next.js config to extend.
 * @param options - The design `tokens`, plus options forwarded to
 * `@tamagui/next-plugin` (Webpack only).
 * @returns The extended Next.js config.
 */
export function withCycloneUI(
  nextConfig?: NextConfig,
  options?: WithCycloneUIOptions & { tokens?: undefined }
): NextConfig;
export function withCycloneUI(
  nextConfig: NextConfig | undefined,
  options: WithCycloneUIOptions
): NextConfig | Promise<NextConfig>;
export function withCycloneUI(
  nextConfig: NextConfig = {},
  { tokens, ...options }: WithCycloneUIOptions = {}
): NextConfig | Promise<NextConfig> {
  return tokens
    ? import("@cyclone-ui/theme-builder")
        .then(async ({ buildTamaguiConfig }) => buildTamaguiConfig({ tokens }))
        .then(configPath => extend(nextConfig, options, configPath))
    : extend(nextConfig, options);
}
