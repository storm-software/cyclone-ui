import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const readComponent = () =>
  readFileSync(new URL("./InlineCodeText.tsx", import.meta.url), "utf8");

const readStory = () =>
  readFileSync(new URL("./InlineCodeText.stories.tsx", import.meta.url), "utf8");

describe("InlineCodeText", () => {
  it("renders as an inline code surface with the compact padding token", () => {
    const source = readComponent();

    expect(source).toMatch(/render:\s*"span"/);
    expect(source).toMatch(/display:\s*"inline-flex"/);
    expect(source).toMatch(/backgroundColor:\s*"surfaceOverlay"/);
    expect(source).toMatch(/paddingVertical:\s*"sm"/);
  });

  it("documents inline use between normal body text", () => {
    const source = readStory();

    expect(source).toMatch(
      /import \{ BodyText \} from "@cyclone-ui\/body-text"/
    );
    expect(source).toMatch(
      /<BodyText>\s*Lorem ipsum <InlineCodeText \{\.\.\.args\}>dolor sit<\/InlineCodeText> amet\s*<\/BodyText>/
    );
  });
});
