/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { TamaguiProvider } from "@tamagui/core";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type { ThemeTogglerProps } from "./ThemeToggler";
import { ThemeToggler } from "./ThemeToggler";

import { config } from "../../../packages/tokens/src/tamagui/config";

const renderThemeToggler = (props: ThemeTogglerProps = {}) =>
  renderToStaticMarkup(
    createElement(
      TamaguiProvider,
      { config, defaultTheme: "light" },
      createElement(ThemeToggler, props)
    )
  );

describe("ThemeToggler", () => {
  it("renders a labelled button", () => {
    const html = renderThemeToggler();

    expect(html).toContain("<button");
    expect(html).toContain('aria-label="Toggle theme"');
  });

  it("shows the icon of the mode it switches to", () => {
    const sun = "M12 7c2.76 0 5 2.24 5 5";
    const moon = "M12 3c-4.97 0 -9 4.03 -9 9";

    expect(renderThemeToggler({ mode: "dark" })).toContain(sun);
    expect(renderThemeToggler({ mode: "light" })).toContain(moon);
  });
});
