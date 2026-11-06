import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(
  new URL("./Container.tsx", import.meta.url),
  "utf8"
);

describe("Container background layers", () => {
  it("renders noise above the surface background and below container content", () => {
    const surfaceIndex = source.indexOf("<ContainerFrame");
    const noiseIndex = source.indexOf("<BackgroundNoise");
    const childrenIndex = source.indexOf("{children}", noiseIndex);

    expect(surfaceIndex).toBeGreaterThanOrEqual(0);
    expect(noiseIndex).toBeGreaterThan(surfaceIndex);
    expect(childrenIndex).toBeGreaterThan(noiseIndex);
    expect(source).toMatch(
      /noise && \{ position: "relative", overflow: "hidden", zIndex: 0 \}/
    );
    expect(source).toMatch(
      /\{noise && \([\s\S]*?<View\s+position="absolute"\s+inset=\{0\}\s+zIndex=\{-1\}/
    );
    expect(source).toMatch(
      /zIndex=\{-1\}[\s\S]*mixBlendMode="hard-light"[\s\S]*<BackgroundNoise/
    );
  });
});
