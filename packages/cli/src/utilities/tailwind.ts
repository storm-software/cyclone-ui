/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { pathExists, resolveInside } from "./config";

/** The Cyclone UI Tailwind theme, imported ahead of `tailwindcss`. */
export const TAILWIND_THEME_IMPORT = "@cyclone-ui/tokens/tailwind.css";

/** Common app stylesheet locations for Vite and Next.js projects. */
const CSS_ENTRIES = [
  "src/index.css",
  "src/main.css",
  "src/app.css",
  "src/styles.css",
  "src/globals.css",
  "src/app/globals.css",
  "app/globals.css",
  "styles/globals.css"
];

const configFiles = (name: string) =>
  ["ts", "mts", "js", "mjs"].map(extension => `${name}.config.${extension}`);

const TAILWIND_IMPORT = /^[ \t]*@import\s+["']tailwindcss["'][^;\n]*;?/mu;

export interface TailwindSetup {
  /** Files that were changed, relative to the project root. */
  updated: string[];
  /** Steps left to do by hand. */
  todo: string[];
}

async function firstExisting(root: string, candidates: string[]) {
  for (const candidate of candidates) {
    if (await pathExists(resolve(root, candidate))) return candidate;
  }
  return undefined;
}

/**
 * The top-level arguments of the first `callee(…)` call in `source`, with
 * their offsets. Skips string contents; enough for config files.
 */
function callArguments(source: string, callee: string) {
  const match = new RegExp(`\\b${callee}\\s*\\(`, "u").exec(source);
  if (!match) return undefined;

  const args: { start: number; end: number }[] = [];
  let start = match.index + match[0].length;
  let depth = 0;
  for (let index = start; index < source.length; index++) {
    const char = source[index]!;
    if (char === '"' || char === "'" || char === "`") {
      while (++index < source.length && source[index] !== char) {
        if (source[index] === "\\") index++;
      }
    } else if ("([{".includes(char)) {
      depth++;
    } else if (depth > 0 && ")]}".includes(char)) {
      depth--;
    } else if (depth === 0 && (char === "," || char === ")")) {
      if (source.slice(start, index).trim()) args.push({ start, end: index });
      if (char === ")") return { args, close: index };
      start = index + 1;
    }
  }
  return undefined;
}

/**
 * Set `tailwind: true` in the options object at `position` of a `callee(…)`
 * call, adding the argument when it's missing.
 *
 * @returns The new source, `source` if already set, or `undefined` when the
 * call isn't there or its options aren't an object literal.
 */
export function enableTailwindOption(
  source: string,
  callee: string,
  position: number
): string | undefined {
  const call = callArguments(source, callee);
  if (!call) return undefined;
  if (/\btailwind\s*:/u.test(source)) return source;

  const options = call.args[position];
  if (options) {
    const text = source.slice(options.start, options.end);
    const brace = text.indexOf("{");
    if (brace === -1 || text.slice(0, brace).trim()) return undefined;

    const at = options.start + brace + 1;
    const empty = !source.slice(at, options.end).replace(/[\s}]/gu, "");
    return `${source.slice(0, at)}${empty ? " tailwind: true " : " tailwind: true,"}${source.slice(empty ? source.indexOf("}", at) : at)}`;
  }

  // Fill skipped arguments (`withCycloneUI()` → `withCycloneUI({}, …)`).
  const missing = [
    ...Array.from({ length: position - call.args.length }, () => "{}"),
    "{ tailwind: true }"
  ].join(", ");
  const last = call.args.at(-1);
  return last
    ? `${source.slice(0, last.end)}, ${missing}${source.slice(last.end)}`
    : `${source.slice(0, call.close)}${missing}${source.slice(call.close)}`;
}

/**
 * Set a project up for Tailwind CSS class names next to Cyclone UI
 * components: turn on the `tailwind` option of `cycloneUI()` /
 * `withCycloneUI()` and import the Cyclone UI theme ahead of Tailwind.
 *
 * @param root - The project root.
 * @param css - The app stylesheet that imports `tailwindcss`, relative to
 * `root`. Common locations are tried when omitted.
 */
export async function setupTailwind(
  root: string,
  css?: string
): Promise<TailwindSetup> {
  const updated: string[] = [];
  const todo: string[] = [];
  let tokens = false;

  for (const [files, callee, position, example] of [
    [configFiles("vite"), "cycloneUI", 0, "cycloneUI({ tailwind: true })"],
    [
      configFiles("next"),
      "withCycloneUI",
      1,
      "withCycloneUI(nextConfig, { tailwind: true })"
    ]
  ] as const) {
    const file = await firstExisting(root, [...files]);
    if (!file) continue;

    const path = resolve(root, file);
    const source = await readFile(path, "utf8");
    const result = enableTailwindOption(source, callee, position);
    if (result === undefined) {
      todo.push(`Turn on Tailwind support in ${file}: ${example}.`);
      continue;
    }
    tokens ||= /\btokens\s*:/u.test(source);
    if (result !== source) {
      await writeFile(path, result, "utf8");
      updated.push(file);
    }
  }

  const stylesheet = css ?? (await firstExisting(root, CSS_ENTRIES));
  const cssPath = stylesheet && resolveInside(root, stylesheet);
  // With custom `tokens`, the plugin writes the theme next to the config.
  const themeImport = tokens
    ? relative(dirname(cssPath ?? root), join(root, ".cyclone-ui/tailwind.css"))
        .split(sep)
        .join("/")
        .replace(/^(?!\.)/u, "./")
    : TAILWIND_THEME_IMPORT;
  const instruction = `@import "${themeImport}"; before @import "tailwindcss";`;

  const source =
    cssPath && (await pathExists(cssPath))
      ? await readFile(cssPath, "utf8")
      : undefined;
  if (source === undefined) {
    todo.push(`Add ${instruction} to the app stylesheet.`);
  } else if (!source.includes(themeImport)) {
    const tailwindImport = TAILWIND_IMPORT.exec(source);
    if (tailwindImport) {
      await writeFile(
        cssPath!,
        `${source.slice(0, tailwindImport.index)}@import "${themeImport}";\n${source.slice(tailwindImport.index)}`,
        "utf8"
      );
      updated.push(stylesheet!);
    } else {
      todo.push(
        `${stylesheet} doesn't import Tailwind CSS v4. Set up Tailwind (https://tailwindcss.com/docs/installation), then add ${instruction}`
      );
    }
  }

  return { updated, todo };
}
