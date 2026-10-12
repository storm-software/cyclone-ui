import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(
  new URL("./SelectValue.tsx", import.meta.url),
  "utf8"
);

describe("Select in a Field", () => {
  it("keeps a current value visible when its placeholder is also eligible", () => {
    expect(source).toMatch(
      /const placeholder =\s+!formControl \|\| \(!value && shouldShowPlaceholder\)\s+\? placeholderProp\s+: undefined;/
    );
    expect(source).toMatch(
      /const content = children \?\? \(value \|\| placeholder\);/
    );
  });
});
