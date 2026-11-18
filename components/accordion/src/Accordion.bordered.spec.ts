import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const readComponent = () =>
  readFileSync(new URL("./Accordion.tsx", import.meta.url), "utf8");

describe("Accordion bordered prop", () => {
  it("defaults to rendering borders and provides that state to compound children", () => {
    const source = readComponent();

    expect(source).toMatch(/bordered: true/);
    expect(source).toMatch(/bordered\?: boolean/);
    expect(source).toMatch(/bordered=\{bordered\}/);
    expect(source).toMatch(
      /<AccordionGroup\s+variant=\{variant\}\s+bordered=\{bordered\}/
    );
  });

  it("removes group, item, and header separators when bordered is false", () => {
    const source = readComponent();

    expect(source.match(/bordered:\s*\{\s*false:/g)).toHaveLength(3);
  });
});
