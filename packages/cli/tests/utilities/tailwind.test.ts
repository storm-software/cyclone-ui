import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  enableTailwindOption,
  setupTailwind
} from "../../src/utilities/tailwind";

const directories: string[] = [];
async function project(files: Record<string, string>) {
  const root = await mkdtemp(join(tmpdir(), "cyclone-tailwind-"));
  directories.push(root);
  for (const [file, content] of Object.entries(files)) {
    await mkdir(dirname(join(root, file)), { recursive: true });
    await writeFile(join(root, file), content);
  }
  return root;
}
afterEach(async () => {
  await Promise.all(
    directories.splice(0).map(root => rm(root, { recursive: true }))
  );
});

describe("enableTailwindOption", () => {
  it.each([
    ["cycloneUI()", 0, "cycloneUI({ tailwind: true })"],
    ["cycloneUI({})", 0, "cycloneUI({ tailwind: true })"],
    [
      'cycloneUI({ tokens: "tokens/*.json" })',
      0,
      'cycloneUI({ tailwind: true, tokens: "tokens/*.json" })'
    ],
    ["withCycloneUI()", 1, "withCycloneUI({}, { tailwind: true })"],
    [
      "withCycloneUI(nextConfig)",
      1,
      "withCycloneUI(nextConfig, { tailwind: true })"
    ],
    [
      'withCycloneUI(\n  { images: { domains: ["a,b"] } },\n)',
      1,
      'withCycloneUI(\n  { images: { domains: ["a,b"] } }, { tailwind: true },\n)'
    ],
    [
      "withCycloneUI(config, { tokens: x })",
      1,
      "withCycloneUI(config, { tailwind: true, tokens: x })"
    ]
  ])("%s", (source, position, expected) => {
    expect(enableTailwindOption(source, source.split("(")[0]!, position)).toBe(
      expected
    );
  });

  it("leaves an existing setting alone", () => {
    const source = "cycloneUI({ tailwind: false })";
    expect(enableTailwindOption(source, "cycloneUI", 0)).toBe(source);
  });

  it("gives up on options it can't edit", () => {
    expect(
      enableTailwindOption("withCycloneUI(config, options)", "withCycloneUI", 1)
    ).toBeUndefined();
    expect(enableTailwindOption("tamaguiPlugin()", "cycloneUI", 0)).toBe(
      undefined
    );
  });
});

describe("setupTailwind", () => {
  it("turns on the Vite option and imports the theme before Tailwind", async () => {
    const root = await project({
      "vite.config.ts":
        "export default defineConfig({ plugins: [react(), tailwindcss(), cycloneUI()] });\n",
      "src/index.css": '@import "tailwindcss";\n\nbody { margin: 0; }\n'
    });

    expect(await setupTailwind(root)).toEqual({
      updated: ["vite.config.ts", "src/index.css"],
      todo: []
    });
    expect(await readFile(join(root, "vite.config.ts"), "utf8")).toContain(
      "cycloneUI({ tailwind: true })"
    );
    expect(await readFile(join(root, "src/index.css"), "utf8")).toBe(
      '@import "@cyclone-ui/tokens/tailwind.css";\n@import "tailwindcss";\n\nbody { margin: 0; }\n'
    );

    // Running it again changes nothing.
    expect(await setupTailwind(root)).toEqual({ updated: [], todo: [] });
  });

  it("imports the generated theme when Next.js builds custom tokens", async () => {
    const root = await project({
      "next.config.mjs":
        'export default withCycloneUI({}, { tokens: "tokens/**/*.json" });\n',
      "app/styles/main.css": "@import 'tailwindcss' source(\"../\");\n"
    });

    expect(await setupTailwind(root, "app/styles/main.css")).toEqual({
      updated: ["next.config.mjs", "app/styles/main.css"],
      todo: []
    });
    expect(await readFile(join(root, "next.config.mjs"), "utf8")).toContain(
      'withCycloneUI({}, { tailwind: true, tokens: "tokens/**/*.json" })'
    );
    expect(await readFile(join(root, "app/styles/main.css"), "utf8")).toMatch(
      /^@import "\.\.\/\.\.\/\.cyclone-ui\/tailwind\.css";\n@import 'tailwindcss'/u
    );
  });

  it("lists what it can't do by hand", async () => {
    const root = await project({
      "next.config.ts": "export default withCycloneUI(config, options);\n",
      "app/globals.css": "body { margin: 0; }\n"
    });

    expect(await setupTailwind(root)).toEqual({
      updated: [],
      todo: [
        "Turn on Tailwind support in next.config.ts: withCycloneUI(nextConfig, { tailwind: true }).",
        expect.stringMatching(
          /^app\/globals\.css doesn't import Tailwind CSS v4\..*@import "@cyclone-ui\/tokens\/tailwind\.css"; before @import "tailwindcss";$/u
        )
      ]
    });
    expect(await setupTailwind(await project({}))).toEqual({
      updated: [],
      todo: [
        'Add @import "@cyclone-ui/tokens/tailwind.css"; before @import "tailwindcss"; to the app stylesheet.'
      ]
    });
  });
});
