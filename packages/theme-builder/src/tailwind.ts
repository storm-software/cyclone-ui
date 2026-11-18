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

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

/**
 * The cascade layer order a Tailwind app needs: Tamagui's CSS (wrapped in
 * `@layer tamagui` by `TAMAGUI_CSS_LAYER`) above Tailwind's preflight
 * (`base`), and Tailwind utilities above Tamagui.
 */
export const TAILWIND_LAYER_ORDER =
  "@layer theme, base, tamagui, components, utilities;";

/** A Tamagui token or theme value, as `createTamagui` returns it. */
interface TamaguiVariable {
  name: string;
  val: unknown;
  /** `var(--name)`; only set when the config was evaluated for web. */
  variable?: string;
}

/** The parts of a created Tamagui config the Tailwind theme is built from. */
export interface TailwindThemeSource {
  tokens: Record<string, Record<string, TamaguiVariable>>;
  themes: Record<string, Record<string, TamaguiVariable>>;
  fonts?: Record<string, { family?: unknown }>;
  media?: Record<string, Record<string, unknown>>;
}

export interface TailwindThemeOptions {
  /**
   * Theme variables Tailwind already defines (`--container-lg`,
   * `--text-lg`, …). Cyclone names that would change the meaning of a
   * Tailwind class are left out.
   *
   * @defaultValue none
   */
  reserved?: Iterable<string>;
}

// Tailwind namespaces fed by each Tamagui token category, matching how
// `@tamagui/tailwind` reads the same classes: spacing utilities use `space`
// tokens, sizing utilities use `size` tokens. Using each utility's own
// namespace (not `--spacing-*`) keeps `max-w-lg` and `w-lg` on Tailwind's
// container scale.
const TOKEN_NAMESPACES: Record<string, string[]> = {
  space: [
    "padding",
    "margin",
    "gap",
    "inset",
    "translate",
    "space",
    "scroll-margin",
    "scroll-padding"
  ],
  size: ["width", "min-width", "max-width", "height", "size"],
  radius: ["radius"],
  fontSize: ["text"],
  fontWeight: ["font-weight"],
  blur: ["blur"],
  shadow: ["shadow"],
  insetShadow: ["inset-shadow"],
  dropShadow: ["drop-shadow"],
  textShadow: ["text-shadow"],
  zIndex: ["z-index"]
};

// Namespaces Tailwind falls back to for a utility (`w-lg` reads `--width-lg`,
// then `--spacing-lg`, then `--container-lg`).
const FALLBACK_NAMESPACES: Record<string, string[]> = {
  width: ["container"],
  "min-width": ["container"],
  "max-width": ["container"]
};

// Keywords Tailwind handles itself (`rounded-full`, `w-screen`, `bg-current`)
// rather than through the theme.
const TAILWIND_KEYWORDS = new Set([
  "auto",
  "current",
  "dvh",
  "dvw",
  "fit",
  "full",
  "inherit",
  "lvh",
  "lvw",
  "max",
  "min",
  "none",
  "px",
  "screen",
  "svh",
  "svw",
  "transparent"
]);

// Tailwind reads numeric keys as values (`z-10` is `z-index: 10`), so a
// numeric Cyclone key would change those classes. Other keys must be valid
// in a custom property name without escaping.
const isThemeKey = (key: string) =>
  /^[\w-]+$/u.test(key) && !/^\d+$/u.test(key) && !TAILWIND_KEYWORDS.has(key);

const cssVariable = ({ variable, name }: TamaguiVariable) =>
  variable || `var(--${process.env.TAMAGUI_CSS_VARIABLE_PREFIX ?? ""}${name})`;

/**
 * Build a Tailwind v4 stylesheet that maps Cyclone UI themes and tokens onto
 * Tailwind's theme, so app classes use the same names as `@tamagui/tailwind`.
 *
 * @remarks
 * The output contains:
 * - The cascade layer order ({@link TAILWIND_LAYER_ORDER}).
 * - An `@theme inline` block. Colors point at Tamagui theme variables
 *   (`--color-primary: var(--primary)`) and resolve where the class is used,
 *   so they follow light/dark and `<Theme>` sub-themes. Tokens point at
 *   Tamagui token variables. Breakpoints and font families are literal.
 * - A `dark` variant that follows Tamagui's `t_dark` theme class instead of
 *   the operating system preference.
 *
 * Names in `options.reserved` are skipped, so standard Tailwind classes keep
 * their meaning.
 *
 * @param config - A Tamagui config created with `createTamagui`, evaluated
 * with `TAMAGUI_TARGET=web`.
 * @param options - Tailwind's own theme variables to leave alone.
 * @returns The stylesheet to import before `tailwindcss`.
 */
export function createTailwindThemeCSS(
  config: TailwindThemeSource,
  { reserved = [] }: TailwindThemeOptions = {}
): string {
  const taken = new Set(reserved);
  const sections: string[] = [];
  const section = (title: string, entries: [string, string][]) => {
    const lines = entries
      .filter(([name]) => !taken.has(name))
      .map(([name, value]) => {
        taken.add(name);
        return `  ${name}: ${value};`;
      });
    if (lines.length > 0) {
      sections.push(`  /* ${title} */\n${lines.join("\n")}`);
    }
  };

  const themeColors = new Map<string, TamaguiVariable>();
  for (const theme of Object.values(config.themes)) {
    for (const [key, value] of Object.entries(theme)) {
      if (!themeColors.has(key) && isThemeKey(key)) themeColors.set(key, value);
    }
  }
  for (const [key, value] of Object.entries(config.tokens.color ?? {})) {
    if (!themeColors.has(key) && isThemeKey(key)) themeColors.set(key, value);
  }
  section(
    "Colors: theme values, resolved where the class is used",
    [...themeColors].map(([key, value]) => [
      `--color-${key}`,
      cssVariable(value)
    ])
  );

  for (const [category, namespaces] of Object.entries(TOKEN_NAMESPACES)) {
    const tokens = Object.entries(config.tokens[category] ?? {}).filter(
      ([key]) => isThemeKey(key)
    );
    for (const namespace of namespaces) {
      section(
        `${namespace}: ${category} tokens`,
        tokens
          .filter(
            ([key]) =>
              !FALLBACK_NAMESPACES[namespace]?.some(fallback =>
                taken.has(`--${fallback}-${key}`)
              )
          )
          .map(([key, value]) => [`--${namespace}-${key}`, cssVariable(value)])
      );
    }
  }

  section(
    "Font families",
    Object.entries(config.fonts ?? {})
      .filter(
        (entry): entry is [string, { family: string }] =>
          isThemeKey(entry[0]) && typeof entry[1].family === "string"
      )
      .map(([key, font]) => [`--font-${key}`, font.family])
  );

  section(
    "Breakpoints: min-width media queries",
    Object.entries(config.media ?? {})
      .filter(
        (entry): entry is [string, { minWidth: number }] =>
          isThemeKey(entry[0]) &&
          Object.keys(entry[1]).length === 1 &&
          typeof entry[1].minWidth === "number"
      )
      .map(([key, query]) => [
        `--breakpoint-${key}`,
        `${query.minWidth / 16}rem`
      ])
  );

  return `/* Generated by @cyclone-ui/theme-builder from the Tamagui config. Do not edit by hand.
 *
 * Import it before Tailwind so the layer order comes first:
 *
 *   @import "@cyclone-ui/tokens/tailwind.css";
 *   @import "tailwindcss";
 */

${TAILWIND_LAYER_ORDER}

@theme inline {
${sections.join("\n\n")}
}

/* Tamagui puts \`t_dark\` on <html> (and on dark <Theme> regions). */
@custom-variant dark (&:where(.t_dark, .t_dark *));
`;
}

/**
 * Read the theme variable names Tailwind defines by default, from the
 * `tailwindcss` package installed in `cwd`.
 *
 * @param cwd - The project root that depends on `tailwindcss`.
 * @returns Names such as `--container-lg` and `--color-black`.
 */
export async function readTailwindThemeNames(
  cwd: string = process.cwd()
): Promise<Set<string>> {
  let themePath: string;
  try {
    themePath = createRequire(join(resolve(cwd), "package.json")).resolve(
      "tailwindcss/theme.css"
    );
  } catch {
    throw new Error(
      `Cyclone UI's Tailwind theme needs tailwindcss v4, which isn't installed in ${resolve(cwd)}.`
    );
  }

  const css = await readFile(themePath, "utf8");

  return new Set(
    Array.from(css.matchAll(/(--[\w-]+)\s*:/gu), match => match[1]!)
  );
}

export interface BuildTailwindThemeOptions {
  /** The Tamagui config file, such as the one `buildTamaguiConfig` writes. */
  configPath: string;

  /**
   * The project root, which must depend on `tailwindcss`.
   *
   * @defaultValue `process.cwd()`
   */
  cwd?: string;

  /**
   * The generated stylesheet, relative to `cwd`.
   *
   * @defaultValue `".cyclone-ui/tailwind.css"`
   */
  outputPath?: string;
}

/**
 * Write the Tailwind theme stylesheet ({@link createTailwindThemeCSS}) for a
 * Tamagui config file.
 *
 * @remarks
 * Node.js loads the config directly, so a TypeScript config needs Node.js
 * 22.18 or later (type stripping).
 *
 * @returns The absolute path of the generated stylesheet.
 */
export async function buildTailwindThemeCSS({
  configPath,
  cwd = process.cwd(),
  outputPath = ".cyclone-ui/tailwind.css"
}: BuildTailwindThemeOptions): Promise<string> {
  const root = resolve(cwd);
  const previousTarget = process.env.TAMAGUI_TARGET;
  // Tamagui only creates CSS variable names for web.
  process.env.TAMAGUI_TARGET = "web";
  let module: { config?: TailwindThemeSource; default?: TailwindThemeSource };
  try {
    // The query re-evaluates a config regenerated in the same process.
    module = (await import(
      `${pathToFileURL(resolve(root, configPath)).href}?t=${Date.now()}`
    )) as typeof module;
  } catch (error) {
    if ((error as { code?: string }).code === "ERR_UNKNOWN_FILE_EXTENSION") {
      throw new Error(
        `Loading ${configPath} needs Node.js 22.18 or later, which runs TypeScript directly.`,
        { cause: error }
      );
    }
    throw error;
  } finally {
    if (previousTarget === undefined) delete process.env.TAMAGUI_TARGET;
    else process.env.TAMAGUI_TARGET = previousTarget;
  }

  const config = module.config ?? module.default;
  if (!config?.themes || !config.tokens) {
    throw new Error(`${configPath} doesn't export a Tamagui config.`);
  }

  const outputFile = resolve(root, outputPath);
  await mkdir(dirname(outputFile), { recursive: true });
  await writeFile(
    outputFile,
    createTailwindThemeCSS(config, {
      reserved: await readTailwindThemeNames(root)
    }),
    "utf8"
  );

  return outputFile;
}
