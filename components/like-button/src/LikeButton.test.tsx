import { TamaguiProvider } from "@tamagui/core";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type { LikeButtonProps } from "./LikeButton";
import { LikeButton } from "./LikeButton";

import { config } from "../../../packages/themes/src/tamagui/config";

const renderLikeButton = (props: LikeButtonProps = {}) =>
  renderToStaticMarkup(
    createElement(
      TamaguiProvider,
      { config, defaultTheme: "light" },
      createElement(LikeButton, props)
    )
  );

describe("LikeButton", () => {
  it("renders a labelled toggle button", () => {
    const html = renderLikeButton();

    expect(html).toMatch(/^<button/);
    expect(html).toContain('aria-label="Like"');
    expect(html).toContain('aria-pressed="false"');
  });

  it("reflects the liked state", () => {
    expect(renderLikeButton({ defaultLiked: true })).toContain(
      'aria-pressed="true"'
    );
    expect(renderLikeButton({ liked: true, defaultLiked: false })).toContain(
      'aria-pressed="true"'
    );
  });

  it("disables the button", () => {
    expect(renderLikeButton({ disabled: true })).toContain("disabled");
  });
});
