import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(
  new URL("./DataTable.tsx", import.meta.url),
  "utf8"
);

describe("DataTable header filter", () => {
  it("uses 3px padding for its filter trigger", () => {
    const filterTrigger = source.slice(
      source.indexOf("{column.getCanFilter() && ("),
      source.indexOf(
        "</Popover.Trigger>",
        source.indexOf("{column.getCanFilter() && (")
      )
    );

    expect(filterTrigger).toContain("padding={3}");
  });

  it("sizes the filter trigger to keep its hover background 3px from the icon", () => {
    const filterTrigger = source.slice(
      source.indexOf("{column.getCanFilter() && ("),
      source.indexOf(
        "</Popover.Trigger>",
        source.indexOf("{column.getCanFilter() && (")
      )
    );

    expect(filterTrigger).toContain('size="$5xl"');
  });
});

describe("DataTable pagination", () => {
  it("clamps the initial page size to the available row count", () => {
    const paginationInitialization = source.slice(
      source.indexOf("const [pagination"),
      source.indexOf("});", source.indexOf("const [pagination")) + 3
    );

    expect(paginationInitialization).toContain(
      "Math.min(pageSize, data.length)"
    );
  });
});
