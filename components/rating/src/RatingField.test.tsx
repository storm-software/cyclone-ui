import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { TamaguiProvider } from "@tamagui/core";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type { RatingProps } from "./Rating";
import { Rating } from "./Rating";

import { config } from "../../../packages/themes/src/tamagui/config";

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
