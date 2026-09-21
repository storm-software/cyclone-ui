import { describe, expect, it } from "vitest";
import {
  formSizeVariants,
  getFormSizeScale,
  getFormSizeToken
} from "../src/form-size";

describe("form control sizes", () => {
  it("preserves the standard and compact medium control tokens", () => {
    expect(getFormSizeToken()).toBe("$10xl");
    expect(getFormSizeToken("md", "compact")).toBe("$6xl");
  });

  it("scales every visual metric around the unchanged medium baseline", () => {
    expect(getFormSizeScale("sm")).toBeLessThan(1);
    expect(getFormSizeScale("md")).toBe(1);
    expect(getFormSizeScale("lg")).toBeGreaterThan(1);
    expect(getFormSizeToken("sm")).toBe("$8xl");
    expect(getFormSizeToken("lg")).toBe("$12xl");
  });

  it("dispatches only the three public variants while preserving variant extras", () => {
    const variants = formSizeVariants((size, extras) => ({
      size,
      circular: extras.props.circular
    }));
    const extras = { props: { circular: true } } as any;
    expect(Object.keys(variants)).toEqual(["sm", "md", "lg"]);
    expect(variants.lg("lg", extras)).toEqual({ size: "lg", circular: true });
  });
});
