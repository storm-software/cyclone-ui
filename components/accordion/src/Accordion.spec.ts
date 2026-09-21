import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const readComponent = () =>
  readFileSync(new URL("./Accordion.tsx", import.meta.url), "utf8");

describe("Accordion backgrounds", () => {
  it("passes a caller-provided background color to the visible group", () => {
    const source = readComponent();

    expect(source).toMatch(
      /<AccordionGroup\s+variant=\{variant\}\s+backgroundColor=\{backgroundColor\}>/
    );
  });
});
