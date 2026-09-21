import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const readComponent = () =>
  readFileSync(new URL("./Accordion.tsx", import.meta.url), "utf8");

describe("Accordion backgrounds", () => {
  it("passes a caller-provided background color to the visible group", () => {
    const source = readComponent();

    expect(source).toMatch(
      /<AccordionGroup\s+variant=\{variant\}\s+bordered=\{bordered\}\s+backgroundColor=\{backgroundColor\}>/
    );
  });

  it("keeps chevron state independent of upward content direction", () => {
    const source = readComponent();

    expect(source).toMatch(
      /rotate=\{open \? "180deg" : "0deg"\}/
    );
    expect(source).toMatch(
      /useState<string\[\]>\(\(\) =>\s*getOpenValues\(value \?\? defaultValue\)\s*\)/
    );
    expect(source).toMatch(
      /const isOpen = open\.includes\(value\);[\s\S]*<AccordionItem[\s\S]*open=\{isOpen\}/
    );
    expect(source).toMatch(
      /direction: \{\s*up: \{\s*paddingTop: "\$3xl",\s*paddingBottom: 0/
    );
  });
});
