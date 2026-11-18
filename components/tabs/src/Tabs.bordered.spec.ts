import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const readComponent = () =>
  readFileSync(new URL("./Tabs.tsx", import.meta.url), "utf8");

describe("Tabs bordered prop", () => {
  it("defaults to borders and provides the choice to compound children", () => {
    const source = readComponent();

    expect(source).toMatch(/bordered: true/);
    expect(source).toMatch(/bordered = true/);
    expect(source).toMatch(/bordered=\{bordered\}/);
  });

  it("removes every variant-owned border when bordered is false", () => {
    const source = readComponent();

    expect(source.match(/bordered:\s*\{\s*false:/g)).toHaveLength(5);
    expect(source).toMatch(
      /const TabsHeaderList[\s\S]*?bordered:\s*\{\s*false:\s*\{[\s\S]*?borderBottomWidth:\s*0/
    );
  });
});
