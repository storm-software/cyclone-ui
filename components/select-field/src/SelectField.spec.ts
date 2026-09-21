import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(
  new URL("./SelectField.tsx", import.meta.url),
  "utf8"
);

describe("SelectField", () => {
  it("keeps a current value visible when its placeholder is also eligible", () => {
    expect(source).toMatch(
      /const valueContent =\s+displayValue \|\| \(shouldShowPlaceholder \? placeholder : undefined\);/
    );
  });
});
