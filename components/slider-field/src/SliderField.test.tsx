import { Form } from "@cyclone-ui/form";
import type { SliderProps, SliderValue } from "@cyclone-ui/slider";
import { TamaguiProvider } from "@tamagui/core";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { SliderField } from "./SliderField";

import { config } from "../../../packages/themes/src/tamagui/config";

const renderSliderField = (
  initialValue: SliderValue | undefined,
  fieldProps: Record<string, unknown> = {},
  controlProps: SliderProps = {}
) =>
  renderToStaticMarkup(
    createElement(
      TamaguiProvider,
      { config, defaultTheme: "light" },
      createElement(
        Form,
        { name: "sliderForm", initialValues: { price: initialValue } },
        createElement(
          SliderField,
          { name: "price", ...fieldProps },
          createElement(SliderField.Label, null, "Price"),
          createElement(SliderField.Control, controlProps)
        )
      )
    )
  );

const count = (html: string, search: string) => html.split(search).length - 1;

describe("SliderField", () => {
  it("displays the form value", () => {
    expect(renderSliderField(40)).toContain('aria-valuenow="40"');
  });

  it("displays a range form value with one thumb per value", () => {
    const html = renderSliderField([20, 37]);

    expect(count(html, 'role="slider"')).toBe(2);
    expect(html).toContain('aria-valuenow="20"');
    expect(html).toContain('aria-valuenow="37"');
  });

  it("falls back to the control's default value, then the minimum", () => {
    expect(renderSliderField(undefined, {}, { defaultValue: 25 })).toContain(
      'aria-valuenow="25"'
    );
    expect(renderSliderField(undefined, {}, { min: 10 })).toContain(
      'aria-valuenow="10"'
    );
  });

  it("labels every thumb with the field label", () => {
    const html = renderSliderField([20, 37]);

    expect(html).toContain('id="price-label"');
    expect(count(html, 'aria-labelledby="price-label"')).toBe(2);
  });

  it("disables the slider with the field", () => {
    const html = renderSliderField(40, { disabled: true });

    expect(html).toContain('aria-disabled="true"');
    expect(html).not.toContain("tabindex");
  });
});
