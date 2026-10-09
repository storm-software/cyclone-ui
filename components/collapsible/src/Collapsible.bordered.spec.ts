import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const readComponent = () =>
  readFileSync(new URL("./Collapsible.tsx", import.meta.url), "utf8");

describe("Collapsible bordered prop", () => {
  it("exposes and forwards bordered to its Accordion implementation", () => {
    const source = readComponent();

    // `bordered` comes from `AccordionProps` (not omitted) and is spread
    // through to `Accordion`, which defaults it to `true`.
    expect(source).toMatch(/Omit<\s*AccordionProps,[^>]*>/);
    expect(source).not.toMatch(/Omit<\s*AccordionProps,[^>]*"bordered"/);
    expect(source).toMatch(/\{\.\.\.\(props as any\)\}/);
  });
});
