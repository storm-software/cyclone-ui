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

/**
 * Resolve the divider's atomic classes to their CSS declarations. Tamagui v3
 * hashes class names, so tests assert on the rendered CSS instead.
 */
const getDividerStyles = (props: DividerProps = {}) => {
  const html = renderDivider(props);
  const rules = Array.from(html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g))
    .map(match => match[1])
    .join("\n");

  return Array.from(html.matchAll(/<div[^>]*class="([^"]*)"/g))
    .flatMap(match => match[1]!.split(/\s+/))
    .map(className => {
      const escaped = className.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");

      return new RegExp(`\\.${escaped}\\{([^}]*)\\}`).exec(rules)?.[1];
    })
    .filter(Boolean)
    .join(";");
};

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
      backgroundColor: "hairline",
      height: 1,
      width: "100%"
    });
  });

  it.each([
    ["horizontal", "sm", ["height:1px", "width:100%"]],
    ["horizontal", "md", ["height:2px", "width:100%"]],
    ["horizontal", "lg", ["height:3px", "width:100%"]],
    ["vertical", "sm", ["align-self:stretch", "height:100%", "width:1px"]],
    ["vertical", "md", ["align-self:stretch", "height:100%", "width:2px"]],
    ["vertical", "lg", ["align-self:stretch", "height:100%", "width:3px"]]
  ] as const)(
    "renders a %s %s divider on its intended axis",
    (direction, size, expectedStyles) => {
      const styles = getDividerStyles({ direction, size });

      for (const expectedStyle of expectedStyles) {
        expect(styles).toContain(expectedStyle);
      }
    }
  );

  it("uses a caller-provided color", () => {
    expect(getDividerProps({ color: "accent" })).toMatchObject({
      backgroundColor: "accent"
    });
  });
});
