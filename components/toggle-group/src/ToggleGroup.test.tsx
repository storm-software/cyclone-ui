import { TamaguiProvider } from "@tamagui/core";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type { ToggleGroupProps } from "./ToggleGroup";
import { getNextSelection, ToggleGroup } from "./ToggleGroup";

import { config } from "../../../packages/themes/src/tamagui/config";

const renderGroup = (props: ToggleGroupProps = {}) =>
  renderToStaticMarkup(
    createElement(
      TamaguiProvider,
      { config, defaultTheme: "light" },
      createElement(
        ToggleGroup,
        props,
        createElement(ToggleGroup.Item, { value: "left" }, "Left"),
        createElement(ToggleGroup.Item, { value: "right" }, "Right")
      )
    )
  );

const pressedCount = (html: string) =>
  html.match(/aria-pressed="true"/g)?.length ?? 0;

describe("ToggleGroup", () => {
  it("renders a group of toggle buttons", () => {
    const html = renderGroup();

    expect(html).toContain('role="group"');
    expect(html.match(/<button/g)).toHaveLength(2);
    expect(pressedCount(html)).toBe(0);
  });

  it("presses the selected items", () => {
    expect(pressedCount(renderGroup({ defaultValue: "left" }))).toBe(1);
    expect(
      pressedCount(renderGroup({ multiple: true, value: ["left", "right"] }))
    ).toBe(2);
  });

  it("disables every item", () => {
    expect(renderGroup({ disabled: true }).match(/disabled=""/g)).toHaveLength(
      2
    );
  });

  it("computes the next selection", () => {
    expect(getNextSelection([], "a", false, true)).toEqual(["a"]);
    expect(getNextSelection(["a"], "b", false, true)).toEqual(["b"]);
    expect(getNextSelection(["a"], "a", false, true)).toEqual([]);
    expect(getNextSelection(["a"], "a", false, false)).toBeUndefined();
    expect(getNextSelection(["a"], "b", true, false)).toEqual(["a", "b"]);
    expect(getNextSelection(["a", "b"], "a", true, false)).toEqual(["b"]);
    expect(getNextSelection(["a"], "a", true, false)).toBeUndefined();
  });
});
