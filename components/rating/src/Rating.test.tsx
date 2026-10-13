import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { TamaguiProvider } from "@tamagui/core";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type { RatingProps } from "./Rating";
import { Rating, roundRatingValue } from "./Rating";

import { config } from "../../../packages/tokens/src/tamagui/config";

const renderRating = (props: RatingProps = {}) =>
  renderToStaticMarkup(
    createElement(
      TamaguiProvider,
      { config, defaultTheme: "light" },
      createElement(Rating, props)
    )
  );

const renderRatingField = (
  initialValue: number | null | undefined,
  fieldProps: Record<string, unknown> = {},
  controlProps: RatingProps = {}
) =>
  renderToStaticMarkup(
    createElement(
      TamaguiProvider,
      { config, defaultTheme: "light" },
      createElement(
        Form,
        { name: "ratingForm", initialValues: { rating: initialValue } },
        createElement(
          Field,
          { name: "rating", ...fieldProps },
          createElement(Field.Label, null, "Rating"),
          createElement(Rating, controlProps)
        )
      )
    )
  );

const countIcons = (html: string) => html.match(/<svg/g)?.length ?? 0;

describe("roundRatingValue", () => {
  it.each([
    [2.4, 1, 2],
    [2.6, 1, 3],
    [2.3, 0.5, 2.5],
    [2.74, 0.1, 2.7],
    [null, 0.5, null],
    [undefined, 1, null]
  ] as const)("rounds %s to precision %s as %s", (value, precision, expected) => {
    expect(roundRatingValue(value, precision)).toBe(expected);
  });
});

describe("Rating", () => {
  it("renders one icon per step up to max", () => {
    expect(countIcons(renderRating({ value: 3 }))).toBe(5);
    expect(countIcons(renderRating({ value: 3, max: 10 }))).toBe(10);
  });

  it("layers an empty and a filled icon for a partially filled step", () => {
    // Steps 1-2 are full, 3 is half (two icons), 4-5 are empty.
    expect(countIcons(renderRating({ value: 2.5, precision: 0.5 }))).toBe(6);
  });

  it("rounds the value to the precision", () => {
    expect(renderRating({ value: 2.4 })).toContain('aria-valuenow="2"');
    expect(renderRating({ value: 2.4, precision: 0.5 })).toContain(
      'aria-valuenow="2.5"'
    );
  });

  it("places burst anchors on the highest two selectable steps", () => {
    const html = renderRating({ max: 7, precision: 0.5 });

    expect(html).toContain('data-testid="rating-penultimate-confetti"');
    expect(html).toContain('data-testid="rating-highest-confetti"');
    expect(
      renderRating({ max: 7, precision: 0.5, readOnly: true })
    ).not.toContain('data-testid="rating-highest-confetti"');
  });

  it("exposes an interactive rating as a focusable slider", () => {
    const html = renderRating({ defaultValue: 4 });

    expect(html).toContain('role="slider"');
    expect(html).toContain('tabindex="0"');
    expect(html).toContain('aria-valuemax="5"');
    expect(html).toContain('aria-valuetext="4 Stars"');
  });

  it("exposes a read-only rating as a labelled image", () => {
    const html = renderRating({ value: 1, readOnly: true });

    expect(html).toContain('role="img"');
    expect(html).toContain('aria-label="1 Star"');
    expect(html).not.toContain("tabindex");
  });

  it("removes a disabled rating from the tab order", () => {
    const html = renderRating({ value: 2, disabled: true });

    expect(html).toContain('aria-disabled="true"');
    expect(html).not.toContain("tabindex");
  });

  it("uses a custom label", () => {
    expect(
      renderRating({ value: 2, getLabelText: value => `${value} of 5` })
    ).toContain('aria-valuetext="2 of 5"');
  });
});

describe("Rating in a Field", () => {
  it("displays the form value", () => {
    expect(renderRatingField(3)).toContain('aria-valuenow="3"');
  });

  it("displays no rating when the form has no value", () => {
    expect(renderRatingField(undefined)).toContain('aria-valuenow="0"');
  });

  it("prefers a value passed to the control", () => {
    expect(renderRatingField(3, {}, { value: 1 })).toContain(
      'aria-valuenow="1"'
    );
    expect(renderRatingField(3, {}, { value: null })).toContain(
      'aria-valuenow="0"'
    );
  });

  it("targets the rating with the field label", () => {
    const html = renderRatingField(3);

    expect(html).toContain('id="rating"');
    expect(html).toContain('for="rating"');
  });

  it("disables the rating with the field", () => {
    const html = renderRatingField(3, { disabled: true });

    expect(html).toContain('aria-disabled="true"');
    expect(html).not.toContain('tabindex="0"');
  });
});
