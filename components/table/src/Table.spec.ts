import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const readComponent = () =>
  readFileSync(new URL("./Table.tsx", import.meta.url), "utf8");

describe("Table header rows", () => {
  it("clones header cells synchronously so React receives renderable children", () => {
    const source = readComponent();
    const rowImplementation = source.slice(
      source.indexOf("const TableRowImpl"),
      source.indexOf("const TableCell")
    );

    expect(rowImplementation).not.toContain(".map(async");
  });
});
