import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("BodyText font loading", () => {
  it("requests the font family assigned to the body typography token", () => {
    const root = resolve(import.meta.dirname, "../../..");
    const tokens = JSON.parse(
      readFileSync(
        resolve(root, "packages/themes/src/tokens/semantic/tokens.json"),
        "utf8"
      )
    );
    const previewHead = readFileSync(
      resolve(root, "apps/storybook/.storybook/preview-head.html"),
      "utf8"
    );
    const bodyFontFamily = tokens.typography.body.$value.fontFamily;

    expect(previewHead).toContain(`family=${bodyFontFamily}`);
  });
});
