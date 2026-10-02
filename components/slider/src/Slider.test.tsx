import { TamaguiProvider } from "@tamagui/core";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type { SliderProps } from "./Slider";
import { getSliderMarks, Slider, valueToPercent } from "./Slider";

import { config } from "../../../packages/themes/src/tamagui/config";

const renderSlider = (props: SliderProps = {}) =>
  renderToStaticMarkup(
    createElement(
      TamaguiProvider,
      { config, defaultTheme: "light" },
      createElement(Slider, props)
    )
  );

const count = (html: string, search: string) => html.split(search).length - 1;

describe("valueToPercent", () => {
  it.each([
    [0, 0, 100, 0],
    [25, 0, 100, 25],
    [20, 10, 110, 10],
    [150, 0, 100, 100],
    [-5, 0, 100, 0],
    [5, 5, 5, 0]
  ] as const)("converts %s in [%s, %s] to %s%%", (value, min, max, expected) => {
    expect(valueToPercent(value, min, max)).toBe(expected);
  });
});

describe("getSliderMarks", () => {
  it("creates a mark for every step", () => {
    expect(getSliderMarks(true, 0, 1, 0.25).map(mark => mark.value)).toEqual([
      0, 0.25, 0.5, 0.75, 1
    ]);
  });

  it("keeps the last step mark despite floating point error", () => {
    expect(getSliderMarks(true, 0, 1, 0.1)).toHaveLength(11);
    expect(getSliderMarks(true, 0, 1e-7, 1e-8).at(-1)?.value).toBe(1e-7);
  });

  it("drops custom marks outside the bounds", () => {
    expect(
      getSliderMarks([{ value: -1 }, { value: 5 }, { value: 11 }], 0, 10, 1)
    ).toEqual([{ value: 5 }]);
  });

  it("skips step marks when there would be too many", () => {
    expect(getSliderMarks(true, 0, 1000, 1)).toEqual([]);
    expect(getSliderMarks(false, 0, 10, 1)).toEqual([]);
  });
});

describe("Slider", () => {
  it("renders one thumb for a single value", () => {
    const html = renderSlider({ defaultValue: 40 });

    expect(count(html, 'role="slider"')).toBe(1);
    expect(html).toContain('aria-valuenow="40"');
    expect(html).toContain('aria-valuemax="100"');
  });

  it("renders one thumb per value for a range", () => {
    const html = renderSlider({ value: [20, 37] });

    expect(count(html, 'role="slider"')).toBe(2);
    expect(html).toContain('aria-valuenow="20"');
    expect(html).toContain('aria-valuenow="37"');
  });

  it("renders marks and their labels", () => {
    const html = renderSlider({
      defaultValue: 20,
      marks: [
        { value: 0, label: "0°C" },
        { value: 50 },
        { value: 100, label: "100°C" }
      ]
    });

    expect(count(html, 'data-testid="slider-mark"')).toBe(3);
    expect(html).toContain("0°C");
    expect(html).toContain("100°C");
  });

  it("formats an always visible value label", () => {
    const html = renderSlider({
      defaultValue: 20,
      valueLabelDisplay: "on",
      valueLabelFormat: value => `${value}°C`
    });

    expect(html).toContain("20°C");
  });

  it("uses custom accessible names and values", () => {
    const html = renderSlider({
      value: [10, 90],
      getAriaLabel: index => (index === 0 ? "Minimum" : "Maximum"),
      getAriaValueText: value => `${value} dollars`
    });

    expect(html).toContain('aria-label="Minimum"');
    expect(html).toContain('aria-label="Maximum"');
    expect(html).toContain('aria-valuetext="90 dollars"');
  });

  it("removes a disabled slider's thumbs from the tab order", () => {
    const html = renderSlider({ defaultValue: 20, disabled: true });

    expect(html).toContain('aria-disabled="true"');
    expect(html).not.toContain("tabindex");
  });
});
