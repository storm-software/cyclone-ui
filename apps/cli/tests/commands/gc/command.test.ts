import { describe, expect, it } from "vitest";
import { metadata } from "../../../src/commands/gc/command";

describe("garbage collection command metadata", () => {
  it("has a title", () => {
    expect(typeof metadata.title).toBe("string");
    expect(metadata.title.length).toBeGreaterThan(0);
  });

  it("has a description", () => {
    expect(typeof metadata.description).toBe("string");
    expect(metadata.description.length).toBeGreaterThan(0);
  });

  it("has an icon", () => {
    expect(typeof metadata.icon).toBe("string");
  });

  it("title is 'Garbage Collection'", () => {
    expect(metadata.title).toBe("Garbage Collection");
  });
});
