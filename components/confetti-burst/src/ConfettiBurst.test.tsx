import { TamaguiProvider } from "@tamagui/core";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ConfettiBurst } from "./ConfettiBurst";

import { config } from "../../../packages/themes/src/tamagui/config";

describe("ConfettiBurst", () => {
  it("renders an empty, hidden anchor", () => {
    const html = renderToStaticMarkup(
      createElement(
        TamaguiProvider,
        { config, defaultTheme: "light" },
        createElement(ConfettiBurst)
      )
    );

    // The provider's theme wrappers close after the anchor.
    expect(html).toMatch(/<div aria-hidden="true"[^>]*><\/div>/);
  });
});
