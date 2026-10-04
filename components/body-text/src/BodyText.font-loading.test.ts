import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("BodyText font loading", () => {
  it("loads the normal self-hosted face assigned to the body typography token", () => {
    const root = resolve(import.meta.dirname, "../../..");
    const tokens = JSON.parse(
      readFileSync(
        resolve(root, "packages/themes/src/tokens/semantic/tokens.json"),
        "utf8"
      )
    );
    const preview = readFileSync(
      resolve(root, "apps/storybook/.storybook/preview.tsx"),
      "utf8"
    );
    const fontCss = readFileSync(resolve(root, "fonts/fonts.css"), "utf8");
    const bodyFontFamily = tokens.typography["body-md"].$value.fontFamily;

    expect(preview).toContain('import "@fonts/fonts.css"');
    expect(fontCss).toContain(`font-family: "${bodyFontFamily}"`);
    expect(fontCss).toContain('url("./storm-sans/dist/StormSans-VF.ttf")');
    expect(fontCss).toContain("font-style: normal");
  });
});
