import { describe, expect, it } from "vitest";
import { appendTag, normalizeTag, removeTag } from "./utilities";

describe("normalizeTag", () => {
  it("trims surrounding whitespace", () => {
    expect(normalizeTag("  design system ")).toBe("design system");
  });
});

describe("appendTag", () => {
  it("adds the trimmed draft to the end", () => {
    expect(appendTag(["react"], " tamagui ")).toEqual(["react", "tamagui"]);
  });

  it("returns the same list for a blank draft", () => {
    const tags = ["react"];

    expect(appendTag(tags, "")).toBe(tags);
    expect(appendTag(tags, "   ")).toBe(tags);
  });

  it("returns the same list when the tag is already there", () => {
    const tags = ["react", "tamagui"];

    expect(appendTag(tags, "tamagui ")).toBe(tags);
  });

  it("treats tags that differ by case as different tags", () => {
    expect(appendTag(["react"], "React")).toEqual(["react", "React"]);
  });
});

describe("removeTag", () => {
  it("removes the tag", () => {
    expect(removeTag(["react", "tamagui", "vite"], "tamagui")).toEqual([
      "react",
      "vite"
    ]);
  });

  it("returns the same list when the tag is not there", () => {
    const tags = ["react"];

    expect(removeTag(tags, "vite")).toBe(tags);
  });
});
