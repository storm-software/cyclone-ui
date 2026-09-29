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

    expect(source).toMatch(/rotate=\{open \? "180deg" : "0deg"\}/);
    expect(source).toMatch(
      /useState<string\[\]>\(\(\) =>\s*getOpenValues\(value \?\? defaultValue\)\s*\)/
    );
    expect(source).toMatch(
      /const isOpen = open\.includes\(value\);[\s\S]*<AccordionItemContext\.Provider open=\{isOpen\}/
    );
  });

  it("pads content to match the header so items are vertically symmetrical", () => {
    const source = readComponent();

    expect(source).toMatch(/paddingVertical: "2xl"/);
    expect(source).toMatch(
      /direction: \{\s*up: \{\s*paddingTop: "2xl",\s*paddingBottom: 0\s*\},\s*down: \{\s*paddingTop: 0,\s*paddingBottom: "2xl"/
    );
    // Items must not add their own direction padding on top of the content's.
    expect(source).not.toMatch(
      /const AccordionItem = styled\([\s\S]*?direction: \{[\s\S]*?\n\}\);\n\nconst AccordionItemImpl/
    );
  });
});
