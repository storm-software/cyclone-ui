import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { compile } from "tailwindcss";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import type { TailwindThemeSource } from "../src/tailwind";
import {
  buildTailwindThemeCSS,
  createTailwindThemeCSS,
  readTailwindThemeNames
} from "../src/tailwind";

const require = createRequire(import.meta.url);

// Compile a Tailwind entry the way @tailwindcss/vite and /postcss do, and
// return the CSS generated for `candidates`.
async function tailwind(entry: string, candidates: string[]) {
  const compiler = await compile(entry, {
    base: import.meta.dirname,
    loadStylesheet: async (id: string, base: string) => {
      const path = id.startsWith(".")
        ? resolve(base, id)
        : require.resolve(id === "tailwindcss" ? "tailwindcss/index.css" : id);
      return {
        path,
        base: dirname(path),
        content: await readFile(path, "utf8")
      };
    }
  });
  return compiler.build(candidates);
}

// The CSS rule Tailwind generates for one class.
function rule(css: string, className: string) {
  const selector = `.${className.replace(/[:/]/gu, "\\$&")} {`;
  const start = css.indexOf(selector);
  if (start === -1) return undefined;

  let depth = 0;
  for (let index = start + selector.length - 1; index < css.length; index++) {
    if (css[index] === "{") depth++;
    if (css[index] === "}" && --depth === 0) {
      return css.slice(start, index + 1).replace(/\s+/gu, " ");
    }
  }
  return undefined;
}

describe("createTailwindThemeCSS", () => {
  let config: TailwindThemeSource;
  let reserved: Set<string>;
  let css: string;

  beforeAll(async () => {
    // Tamagui only names CSS variables when it's configured for web.
    process.env.TAMAGUI_TARGET = "web";
    ({ config } = (await import("../../tokens/src/tamagui/index")) as {
      config: TailwindThemeSource;
    });
    reserved = await readTailwindThemeNames(import.meta.dirname);
    css = createTailwindThemeCSS(config, { reserved });
  });

  it("matches the stylesheet @cyclone-ui/tokens ships", async () => {
    // `vitest -u` regenerates packages/tokens/tailwind.css after a token change.
    await expect(css).toMatchFileSnapshot("../../tokens/tailwind.css");
  });

  it("orders the Tamagui layer between preflight and utilities", () => {
    expect(css).toContain(
      "@layer theme, base, tamagui, components, utilities;"
    );
    expect(css.indexOf("@layer theme")).toBeLessThan(css.indexOf("@theme"));
  });

  it("gives Cyclone class names the values @tamagui/tailwind uses", async () => {
    const output = await tailwind(`${css}\n@import "tailwindcss";`, [
      "bg-primary",
      "bg-primary/50",
      "text-on-primary",
      "border-hairline",
      "bg-blue5",
      "p-lg",
      "-mt-xl",
      "gap-5xl",
      "top-lg",
      "translate-x-lg",
      "h-lg",
      "min-h-7xl",
      "size-lg",
      "w-8xl",
      "rounded-container",
      "text-xxs",
      "font-body",
      "xs:p-lg",
      "dark:bg-canvas"
    ]);

    expect(rule(output, "bg-primary")).toContain(
      "background-color: var(--primary);"
    );
    expect(rule(output, "bg-primary/50")).toContain(
      "color-mix(in oklab, var(--primary) 50%, transparent)"
    );
    expect(rule(output, "text-on-primary")).toContain(
      "color: var(--on-primary);"
    );
    expect(rule(output, "border-hairline")).toContain(
      "border-color: var(--hairline);"
    );
    expect(rule(output, "bg-blue5")).toContain(
      "background-color: var(--blue5);"
    );
    expect(rule(output, "p-lg")).toContain("padding: var(--t-space-lg);");
    expect(rule(output, "-mt-xl")).toContain(
      "margin-top: calc(var(--t-space-xl) * -1);"
    );
    expect(rule(output, "gap-5xl")).toContain("gap: var(--t-space-5xl);");
    expect(rule(output, "top-lg")).toContain("top: var(--t-space-lg);");
    expect(rule(output, "translate-x-lg")).toContain(
      "--tw-translate-x: var(--t-space-lg);"
    );
    expect(rule(output, "h-lg")).toContain("height: var(--t-size-lg);");
    expect(rule(output, "min-h-7xl")).toContain(
      "min-height: var(--t-size-7xl);"
    );
    expect(rule(output, "size-lg")).toContain("width: var(--t-size-lg);");
    expect(rule(output, "w-8xl")).toContain("width: var(--t-size-8xl);");
    expect(rule(output, "rounded-container")).toContain(
      "border-radius: var(--t-radius-container);"
    );
    expect(rule(output, "text-xxs")).toContain(
      "font-size: var(--t-fontSize-xxs);"
    );
    expect(rule(output, "font-body")).toContain('font-family: "Storm Sans";');
    expect(rule(output, "xs:p-lg")).toContain("@media (width >= 28.75rem)");
    expect(rule(output, "dark:bg-canvas")).toContain(
      "&:where(.t_dark, .t_dark *) { background-color: var(--canvas); }"
    );
  });

  it("leaves classes Tailwind already defines alone", async () => {
    const candidates = [
      "max-w-lg",
      "w-lg",
      "text-lg",
      "rounded-lg",
      "rounded-full",
      "z-10",
      "p-4",
      "bg-black",
      "shadow-lg",
      "font-sans",
      "sm:p-4",
      "dark:p-4"
    ];
    const stock = await tailwind('@import "tailwindcss";', candidates);
    const bridged = await tailwind(
      `${css}\n@import "tailwindcss";`,
      candidates
    );

    // `dark:` deliberately follows Tamagui's theme class instead.
    for (const candidate of candidates.filter(name => name !== "dark:p-4")) {
      expect(rule(bridged, candidate), candidate).toBe(rule(stock, candidate));
    }
    expect(css).not.toMatch(/--(?:z-index|container|radius-lg|color-black)\b/u);
  });

  it("skips keys Tailwind reads as values or keywords", () => {
    const variable = (name: string) => ({
      name,
      val: 0,
      variable: `var(--${name})`
    });
    const output = createTailwindThemeCSS({
      tokens: {
        zIndex: { "10": variable("t-zIndex-10") },
        radius: { full: variable("t-radius-full"), pill: variable("t-pill") },
        color: { "brand.500": variable("c-brand") }
      },
      themes: { light: { transparent: variable("transparent") } }
    });

    expect(output).toContain("--radius-pill: var(--t-pill);");
    expect(output).not.toMatch(/--z-index-10|--radius-full|brand|transparent/u);
  });
});

describe("buildTailwindThemeCSS", () => {
  let cwd: string;
  beforeAll(async () => {
    cwd = await mkdtemp(join(tmpdir(), "cyclone-ui-tailwind-"));
  });
  afterAll(async () => rm(cwd, { recursive: true, force: true }));

  it("writes the stylesheet for a config file", async () => {
    const configPath = join(cwd, "tamagui.config.mjs");
    await writeFile(
      configPath,
      `export const config = {
        tokens: { space: { lg: { name: "t-space-lg", val: 4, variable: process.env.TAMAGUI_TARGET === "web" ? "var(--t-space-lg)" : "" } } },
        themes: { light: { canvas: { name: "canvas", val: "white" } } }
      };`
    );
    delete process.env.TAMAGUI_TARGET;

    const file = await buildTailwindThemeCSS({
      configPath,
      // Resolves tailwindcss from this package.
      cwd: import.meta.dirname,
      outputPath: join(cwd, ".cyclone-ui/tailwind.css")
    });
    const output = await readFile(file, "utf8");

    expect(file).toBe(join(cwd, ".cyclone-ui/tailwind.css"));
    expect(output).toContain("--padding-lg: var(--t-space-lg);");
    expect(output).toContain("--color-canvas: var(--canvas);");
    expect(process.env.TAMAGUI_TARGET).toBeUndefined();
  });
});
