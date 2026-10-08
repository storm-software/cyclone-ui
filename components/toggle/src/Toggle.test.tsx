import { TamaguiProvider } from "@tamagui/core";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type { ToggleProps } from "./Toggle";
import { Toggle } from "./Toggle";

import { config } from "../../../packages/themes/src/tamagui/config";

const renderToggle = (props: ToggleProps = { children: "Toggle" }) =>
  renderToStaticMarkup(
    createElement(
      TamaguiProvider,
      { config, defaultTheme: "light" },
      createElement(Toggle, props)
    )
  );

describe("Toggle", () => {
  it("renders a toggle button with its label", () => {
    const html = renderToggle();

    expect(html).toContain("<button");
    expect(html).toContain('aria-pressed="false"');
    expect(html).toContain(">Toggle<");
  });

  it("reflects the pressed state", () => {
    expect(renderToggle({ defaultPressed: true })).toContain(
      'aria-pressed="true"'
    );
    expect(renderToggle({ pressed: true, defaultPressed: false })).toContain(
      'aria-pressed="true"'
    );
  });

  it("passes the pressed state to render-prop children", () => {
    expect(
      renderToggle({
        defaultPressed: true,
        children: pressed => (pressed ? "On" : "Off")
      })
    ).toContain(">On<");
  });

  it("marks the toggle invalid and disabled", () => {
    const html = renderToggle({ invalid: true, disabled: true });

    expect(html).toContain('aria-invalid="true"');
    expect(html).toContain("disabled");
  });
});
