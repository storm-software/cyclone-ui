import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const inputValueSource = () =>
  readFileSync(new URL("./InputValue.tsx", import.meta.url), "utf8");

describe("InputValue placeholder animation", () => {
  it("emits a fade-in animation for input and textarea placeholders", () => {
    const source = inputValueSource();

    expect(source).toContain("@keyframes cyclone-placeholder-fade-in");
    expect(source).toMatch(
      /input::placeholder, textarea::placeholder\s*\{[^}]*animation: cyclone-placeholder-fade-in/
    );
  });
});
