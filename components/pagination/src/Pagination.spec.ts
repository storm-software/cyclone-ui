import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(
  new URL("./Pagination.tsx", import.meta.url),
  "utf8"
);

describe("Pagination controls", () => {
  it("applies the requested width to compact page controls", () => {
    expect(source.match(/width=\{buttonWidth\}/g)).toHaveLength(7);
  });
});
