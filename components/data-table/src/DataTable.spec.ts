import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(
  new URL("./DataTable.tsx", import.meta.url),
  "utf8"
);

describe("DataTable header filter", () => {
  it("uses small token padding for its filter trigger", () => {
    const filterTrigger = source.slice(
      source.indexOf("{column.getCanFilter() && ("),
      source.indexOf(
        "</Popover.Trigger>",
        source.indexOf("{column.getCanFilter() && (")
      )
    );

    expect(filterTrigger).toContain('padding="$sm"');
  });
});
