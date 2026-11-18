import { describe, expect, it } from "vitest";
import { format, getTimeFormat, parse } from "./utilities";

describe("server time utilities", () => {
  it("formats both hour cycles without importing the picker UI", () => {
    expect(format("00:05")).toBe("12:05\u00A0AM");
    expect(format("13:30", 24)).toBe("13:30");
    expect(getTimeFormat(24)).toBe("HH:MM");
  });

  it("normalizes noon and midnight and rejects invalid times", () => {
    expect(parse("12:00 AM")).toBe("00:00");
    expect(parse("12:00 PM")).toBe("12:00");
    expect(parse("01:30\u00A0PM")).toBe("13:30");
    expect(parse("24:00")).toBeNull();
    expect(parse("00:30 AM")).toBeNull();
  });
});
