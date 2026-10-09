import { Form } from "@cyclone-ui/form";
import { TamaguiProvider } from "@tamagui/core";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { RatingField } from "./RatingField";
import { config } from "../../../packages/themes/src/tamagui/config";

it("probe", () => {
  const html = renderToStaticMarkup(
    createElement(
      TamaguiProvider,
      { config, defaultTheme: "light" },
      createElement(
        Form,
        { name: "ratingForm", initialValues: { rating: 3 } },
        createElement(
          RatingField,
          { name: "rating" },
          createElement(RatingField.Label, null, "Rating"),
          createElement(RatingField.Control, {})
        )
      )
    )
  );
  console.log(
    "ATTRS",
    html
      .replace(/<style[\s\S]*?<\/style>/g, "")
      .match(/(id|for|aria-valuenow|aria-disabled)="[^"]*"/g)
  );
});
