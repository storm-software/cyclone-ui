import { TamaguiProvider } from "@tamagui/core";
import type { ComponentType } from "react";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { config } from "../../../packages/themes/src/tamagui/config";

const renderDetails = async (item: Record<string, unknown>) => {
  const { TypeTableItemDetails } = await import("./TypeTableItemDetails");

  return renderToStaticMarkup(
    createElement(
      TamaguiProvider,
      { config, defaultTheme: "light", disableInjectCSS: true },
      createElement(
        TypeTableItemDetails as ComponentType<Record<string, unknown>>,
        { item }
      )
    )
  );
};

describe("TypeTable", () => {
  it("provides the row-details renderer used by expanded items", async () => {
    const typeTableModule = await import("./TypeTableItemDetails");

    expect(typeTableModule).toHaveProperty("TypeTableItemDetails");
    expect(typeof typeTableModule.TypeTableItemDetails).toBe("function");
  });

  it("renders descriptions, complete types, defaults, parameters, and returns", async () => {
    const markup = await renderDetails({
      default: false,
      description: "Called when the open state changes.",
      parameters: [
        {
          name: "open",
          description: "The next open state."
        }
      ],
      returns: "void",
      type: "function",
      typeDescription: "(open: boolean) => void"
    });

    expect(markup).toContain("Called when the open state changes.");
    expect(markup).toContain(">Type<");
    expect(markup).toContain("(open: boolean) =&gt; void");
    expect(markup).toContain(">Default<");
    expect(markup).toContain(">false<");
    expect(markup).toContain(">Parameters<");
    expect(markup).toContain(">open<");
    expect(markup).toContain("The next open state.");
    expect(markup).toContain(">Returns<");
    expect(markup).toContain(">void<");
  });

  it("renders false and zero values in every detail position", async () => {
    const markup = await renderDetails({
      default: 0,
      description: false,
      parameters: [
        {
          name: "value",
          description: false
        }
      ],
      returns: false,
      type: "boolean",
      typeDescription: false
    });

    expect(markup.match(/>false</g)).toHaveLength(4);
    expect(markup).toContain(">0<");
  });
});
