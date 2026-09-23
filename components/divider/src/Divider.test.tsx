import { TamaguiProvider } from "@tamagui/core";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as dividerModule from "./Divider";

import { config } from "../../../packages/themes/src/tamagui/config";

type DividerProps = {
  color?: string;
  direction?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
};

const renderDivider = (props: DividerProps = {}) => {
  const Divider = (dividerModule as { Divider?: unknown }).Divider;

  return renderToStaticMarkup(
    createElement(
      TamaguiProvider,
      { config, defaultTheme: "light" },
      createElement(Divider as never, props)
    )
  );
};

const getDividerClasses = (props: DividerProps = {}) =>
  Array.from(renderDivider(props).matchAll(/<div[^>]*class="([^"]*)"/g))
    .map(match => match[1])
    .join(" | ");

const getDividerProps = (props: DividerProps = {}) =>
  (
    dividerModule as {
      Divider?: {
        render?: (
          props: DividerProps,
          ref: null
        ) => {
          props: Record<string, unknown>;
        };
      };
    }
  ).Divider?.render?.(props, null).props;

describe("Divider", () => {
  it("defaults to a one-pixel horizontal hairline", () => {
    expect(getDividerProps()).toMatchObject({
      backgroundColor: "$hairline",
      height: 1,
      width: "100%"
    });
  });

  it.each([
    ["horizontal", "sm", ["_h-1px", "_w-10037"]],
    ["horizontal", "md", ["_h-2px", "_w-10037"]],
    ["horizontal", "lg", ["_h-3px", "_w-10037"]],
    ["vertical", "sm", ["_als-stretch", "_h-10037", "_w-1px"]],
    ["vertical", "md", ["_als-stretch", "_h-10037", "_w-2px"]],
    ["vertical", "lg", ["_als-stretch", "_h-10037", "_w-3px"]]
  ] as const)(
    "renders a %s %s divider on its intended axis",
    (direction, size, expectedClasses) => {
      const classes = getDividerClasses({ direction, size });

      for (const expectedClass of expectedClasses) {
        expect(classes).toContain(expectedClass);
      }
    }
  );

  it("uses a caller-provided color", () => {
    expect(getDividerProps({ color: "$accent" })).toMatchObject({
      backgroundColor: "$accent"
    });
  });
});
