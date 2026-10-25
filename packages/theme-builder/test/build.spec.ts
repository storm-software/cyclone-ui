import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { afterAll, describe, expect, it } from "vitest";

import { buildTamaguiConfig } from "../src/build";

const cwd = await mkdtemp(join(tmpdir(), "cyclone-ui-build-"));
afterAll(async () => rm(cwd, { recursive: true, force: true }));

describe("buildTamaguiConfig", () => {
  it("builds split light and dark themes from token files", async () => {
    const file = await buildTamaguiConfig({
      cwd,
      tokens: resolve(import.meta.dirname, "../../tokens/src/tokens/**/*.json")
    });
    const source = await readFile(file, "utf8");
    const canvas = (scheme: string) =>
      new RegExp(`\\n  ${scheme}: \\{\\n    canvas: ([^,]+),`, "u").exec(
        source
      )?.[1];

    expect(file).toBe(join(cwd, ".cyclone-ui/tamagui.config.ts"));
    expect(source).toContain(
      'import userConfig from "@cyclone-ui/tokens/tamagui-defaults";'
    );
    expect(source).not.toContain("@tamagui/config");
    expect(canvas("light")).toBeDefined();
    expect(canvas("dark")).toBeDefined();
    expect(canvas("light")).not.toBe(canvas("dark"));
    expect(source).toContain("root[key] = base[key];");
  });
});
