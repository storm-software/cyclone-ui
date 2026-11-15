import { describe, expect, it } from "vitest";
import { getSearchMatch, getTypeaheadMatch, matchesSearch } from "./options";

const options = [
  { value: "apple", label: "Apple" },
  { value: "blackberry", label: "Blackberry" },
  { value: "blueberry", label: "Blueberry" },
  { value: "banana", label: "Banana", disabled: true },
  { value: "cherry", label: "Cherry" }
];

describe("getTypeaheadMatch", () => {
  it("matches the start of a label, ignoring case", () => {
    expect(getTypeaheadMatch(options, "c")?.value).toBe("cherry");
    expect(getTypeaheadMatch(options, "BLU")?.value).toBe("blueberry");
  });

  it("cycles through the options a repeated key starts, skipping disabled ones", () => {
    expect(getTypeaheadMatch(options, "b", "apple")?.value).toBe("blackberry");
    expect(getTypeaheadMatch(options, "b", "blackberry")?.value).toBe(
      "blueberry"
    );
    expect(getTypeaheadMatch(options, "bb", "blueberry")?.value).toBe(
      "blackberry"
    );
  });

  it("keeps the current option while it still matches", () => {
    expect(getTypeaheadMatch(options, "bla", "blackberry")?.value).toBe(
      "blackberry"
    );
    expect(getTypeaheadMatch(options, "c", "cherry")?.value).toBe("cherry");
  });

  it("finds nothing when no enabled option matches", () => {
    expect(getTypeaheadMatch(options, "x")).toBeUndefined();
    expect(getTypeaheadMatch(options, "ban")).toBeUndefined();
  });
});

describe("getSearchMatch", () => {
  it("prefers an option the text starts, then one that contains it", () => {
    expect(getSearchMatch(options, "b")?.value).toBe("blackberry");
    expect(getSearchMatch(options, "BERRY ")?.value).toBe("blackberry");
    expect(getSearchMatch(options, "e")?.value).toBe("apple");
    expect(getSearchMatch(options, "ch")?.value).toBe("cherry");
  });

  it("skips disabled options and finds nothing when none match", () => {
    expect(getSearchMatch(options, "ban")).toBeUndefined();
    expect(getSearchMatch(options, "zz")).toBeUndefined();
  });
});

describe("matchesSearch", () => {
  it("matches anywhere in the label, ignoring case and outer spaces", () => {
    expect(matchesSearch("Blueberry", " BERRY ")).toBe(true);
    expect(matchesSearch("Apple", "pear")).toBe(false);
  });
});
