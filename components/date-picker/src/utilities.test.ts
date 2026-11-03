import { describe, expect, it } from "vitest";
import {
  format,
  formatRange,
  getDateRangeFormat,
  parse,
  parseRange
} from "./utilities";

describe("server date utilities", () => {
  it("formats dates and ranges without importing the picker UI", () => {
    expect(format(new Date(2024, 1, 29), ".")).toBe("02.29.2024");
    expect(formatRange([new Date(2024, 1, 29), new Date(2024, 2, 1)])).toBe(
      "02/29/2024 – 03/01/2024"
    );
    expect(getDateRangeFormat(".")).toBe("MM.DD.YYYY – MM.DD.YYYY");
  });

  it("rejects impossible dates and reversed ranges", () => {
    expect(parse("02/30/2024")).toBeNull();
    expect(parse("02/29/2024")).toEqual(new Date(2024, 1, 29));
    expect(parseRange("03/01/2024 – 02/29/2024")).toBeNull();
    expect(parseRange("02/29/2024")).toEqual([new Date(2024, 1, 29)]);
  });
});
