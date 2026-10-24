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

import type { TailwindConfig } from "react-email";
import { pixelBasedPreset } from "react-email";
import dark from "../../packages/tokens/src/tailwindcss/tokens-dark.css?raw";
import light from "../../packages/tokens/src/tailwindcss/tokens-light.css?raw";

/** The color mode, matching the `light` and `dark` Cyclone UI themes. */
export type EmailMode = "light" | "dark";

/** The Cyclone UI color theme a component is rendered in. */
export type EmailTheme =
  "base" | "brand" | "danger" | "warning" | "info" | "success" | "discovery";

// Tailwind reads font sizes from `--text-*` and radii from `--radius-*`, but
// Razorwind names those tokens by path. Each size takes its
// `line-height.<size>` token (`xxs` has none, so it borrows the `xs` leading).
const sizes = ["xxs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"];

const aliases = (css: string) =>
  [
    "@theme {",
    ...[...css.matchAll(/^\s*--border-radius-([\w-]+):/gm)].map(
      ([, radius]) => `  --radius-${radius}: var(--border-radius-${radius});`
    ),
    ...sizes.flatMap(size => [
      `  --text-${size}: var(--font-size-${size});`,
      `  --text-${size}--line-height: var(--line-height-${size === "xxs" ? "xs" : size});`
    ]),
    "}"
  ].join("\n");

const declaration = /^(\s*(--[\w-]+):\s*)(.+);$/gm;

/**
 * Email clients can't read CSS variables, and the `<Tailwind>` inliner only
 * replaces one level of `var()`, so token aliases are resolved here. `rem`
 * values become `px`, as in `pixelBasedPreset`.
 */
const flatten = (css: string) => {
  const values = new Map(
    [...css.matchAll(declaration)].map(([, , name, value]) => [name!, value!])
  );
  const resolve = (value: string): string =>
    value
      .replace(/var\((--[\w-]+)\)/g, (match, name: string) => {
        const aliased = values.get(name);
        return aliased === undefined ? match : resolve(aliased);
      })
      .replace(
        /(-?\d*\.?\d+)rem\b/g,
        (_, rem: string) => `${Number(rem) * 16}px`
      );

  return css.replace(
    declaration,
    (_, prefix: string, _name: string, value: string) =>
      `${prefix}${resolve(value)};`
  );
};

/**
 * The generated `packages/tokens` Tailwind theme for each color mode. Tailwind's
 * default colors are cleared so only color tokens can be used.
 */
export const themes: Record<EmailMode, string> = {
  light: flatten(`@theme { --color-*: initial; }\n${light}\n${aliases(light)}`),
  dark: flatten(`@theme { --color-*: initial; }\n${dark}\n${aliases(dark)}`)
};

const sans = ['"Storm Sans"', "Helvetica", "Arial", "sans-serif"];

/** Join the truthy class names. */
export const cx = (...classNames: (string | false | null | undefined)[]) =>
  classNames.filter(Boolean).join(" ");

/**
 * The `<Tailwind>` config used with {@link themes}. The font stacks stay here,
 * as the typography tokens carry no email-safe fallbacks.
 *
 * In class names, give a line height with the size (`text-5xl/[1.2375]`):
 * the inliner resolves a `text-*` line height before a separate `leading-*`.
 */
export const tailwindConfig: TailwindConfig = {
  presets: [pixelBasedPreset],
  theme: {
    extend: {
      fontFamily: {
        display: sans,
        body: sans,
        editorial: ['"Storm Serif"', "Georgia", "serif"],
        code: ['"Google Sans Code"', "ui-monospace", "Menlo", "monospace"]
      }
    }
  }
};
