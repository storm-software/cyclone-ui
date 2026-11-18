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

  /**
   * Set the app up for Tailwind CSS v4 class names next to Cyclone UI
   * components.
   *
   * @remarks
   * - Puts all Tamagui CSS in `@layer tamagui`, and `CycloneUIProvider`
   *   declares the layer order `theme, base, tamagui, components, utilities`
   *   ahead of it. Tailwind utilities passed as `className` then override
   *   component styles, and Tailwind's preflight doesn't.
   * - Webpack builds default to `disableExtraction: true`, because
   *   `@tamagui/next-plugin` writes the extracted CSS outside the layer.
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

type NextConfigFunction<
  Result extends NextConfig | Promise<NextConfig> =
    NextConfig | Promise<NextConfig>
> = (phase: string, context: { defaultConfig: NextConfig }) => Result;

// The layer `CycloneUIProvider` places between preflight and utilities.
const TAMAGUI_LAYER = "tamagui";

const extend = (
  nextConfig: NextConfig,
  { tailwind, ...options }: Omit<WithCycloneUIOptions, "tokens">,
  configPath?: string
): NextConfig => ({
  ...nextConfig,
  env: {
    TAMAGUI_TARGET: "web",
    // Tamagui wraps the CSS it injects or server-renders in this layer.
    ...(tailwind && { TAMAGUI_CSS_LAYER: TAMAGUI_LAYER }),
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
      ...(tailwind && { disableExtraction: true }),
      ...options
    })(nextConfig).webpack(config, context);
    if (configPath) {
      result.resolve.alias["@cyclone-ui/tokens/tamagui$"] = configPath;
    }

    return result;
  }
});

const resolveConfig = (
  nextConfig: NextConfig | Promise<NextConfig>,
  { tokens, ...options }: WithCycloneUIOptions
): NextConfig | Promise<NextConfig> => {
  if (nextConfig instanceof Promise) {
    return nextConfig.then((config): NextConfig | Promise<NextConfig> =>
      resolveConfig(config, { tokens, ...options })
    );
  }

  return tokens
    ? import("@cyclone-ui/theme-builder").then(
        async ({ buildTailwindThemeCSS, buildTamaguiConfig }) => {
          const configPath = await buildTamaguiConfig({ tokens });
          if (options.tailwind) {
            await buildTailwindThemeCSS({ configPath });
          }

          return extend(nextConfig, options, configPath);
        }
      )
    : extend(nextConfig, options);
};

/**
 * Wrap a Next.js config with the setup Tamagui and Cyclone UI components need.
 *
 * @remarks
 * - Turbopack (the Next.js default): aliases `react-native` to
 *   `react-native-web` and `react-native-svg` to `@tamagui/react-native-svg`.
 * - Webpack (`next build --webpack`): applies `@tamagui/next-plugin`, which
 *   must be installed, with the Cyclone UI Tamagui config.
 * - Both: defines `process.env.TAMAGUI_TARGET`, and with `tailwind`,
 *   `process.env.TAMAGUI_CSS_LAYER`.
 *
 * With `tokens`, the Tamagui config is built from them first, so this returns
 * a promise, which Next.js accepts as the config export.
 * Phase functions receive Next.js's original phase and default config and
 * remain lazy; async functions and promised configs are resolved before setup.
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
 * @example
 * ```ts
 * // next.config.ts — Tailwind CSS classes next to Cyclone UI components
 * import { withCycloneUI } from "@cyclone-ui/nextjs";
 *
 * export default withCycloneUI({}, { tailwind: true });
 * ```
 *
 * @param nextConfig - The Next.js config, promise, or phase function to extend.
 * @param options - The design `tokens`, the `tailwind` switch, plus options
 * forwarded to `@tamagui/next-plugin` (Webpack only).
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
  nextConfig: Promise<NextConfig>,
  options?: WithCycloneUIOptions
): Promise<NextConfig>;
export function withCycloneUI<Result extends NextConfig | Promise<NextConfig>>(
  nextConfig: NextConfigFunction<Result>,
  options?: WithCycloneUIOptions & { tokens?: undefined }
): NextConfigFunction<
  Result extends Promise<NextConfig> ? Promise<NextConfig> : NextConfig
>;
export function withCycloneUI(
  nextConfig: NextConfigFunction,
  options: WithCycloneUIOptions
): NextConfigFunction;
export function withCycloneUI(
  nextConfig: NextConfig | Promise<NextConfig> | NextConfigFunction = {},
  options: WithCycloneUIOptions = {}
): NextConfig | Promise<NextConfig> | NextConfigFunction {
  return typeof nextConfig === "function"
    ? (phase, context): NextConfig | Promise<NextConfig> =>
        resolveConfig(nextConfig(phase, context), options)
    : resolveConfig(nextConfig, options);
}
