import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(new URL("./storybook.ts", import.meta.url), "utf8");

describe("Storybook prepare target", () => {
  it("runs its prerequisite Nx targets through the workspace executable", () => {
    expect(source).toContain(
      'command: "pnpm exec nx run monorepo:generate-tokens"'
    );
    expect(source).toContain('command: "pnpm exec nx run themes:build"');
  });

  it("uses the project context workspace root for the prepare target", () => {
    expect(source).toContain(
      "targets.prepare = prepareTarget(context.workspaceRoot);"
    );
  });
});
