import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const readComponent = () =>
  readFileSync(new URL("./Collapsible.tsx", import.meta.url), "utf8");

describe("Collapsible bordered prop", () => {
  it("exposes and forwards bordered to its Accordion implementation", () => {
    const source = readComponent();

    expect(source).toMatch(/bordered\?: boolean/);
    expect(source).toMatch(/bordered=\{bordered\}/);
  });
});
