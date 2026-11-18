import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const storySource = readFileSync(
  new URL("./Footer.stories.tsx", import.meta.url),
  "utf8"
);

describe("Footer stories", () => {
  it("uses the shared Link component for navigation links", () => {
    expect(storySource).not.toMatch(/<Footer\.(?:Rail\.)?Link\b/);
    expect(storySource).toMatch(/<Link\b[^>]*href=/);
    expect(
      storySource.match(/<Link\b(?=[^>]*group=\{false\})[^>]*>/g) ?? []
    ).toHaveLength(4);
  });
});
