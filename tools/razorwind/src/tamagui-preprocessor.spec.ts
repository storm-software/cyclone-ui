import { describe, expect, it } from "vitest";

import { tamaguiPreprocessor } from "./tamagui-preprocessor";

describe("tamaguiPreprocessor", () => {
  it("desaturates colored disabled variants while preserving alpha", () => {
    const result = tamaguiPreprocessor({
      semantic: {
        background: {
          brand: {
            $type: "color",
            $value: "#ff000080"
          }
        }
      }
    });

    expect(result).toMatchObject({
      semantic: {
        background: {
          "brand-disabled": {
            $description: "disabled state at 60% saturation",
            $value: expect.stringMatching(/^#(?!ff000080)[0-9a-f]{6}80$/)
          }
        }
      }
    });
  });

  it("reduces opacity for greyscale disabled variants", () => {
    const result = tamaguiPreprocessor({
      semantic: {
        foreground: {
          muted: {
            $type: "color",
            $value: "#808080"
          }
        }
      }
    });

    expect(result).toMatchObject({
      semantic: {
        foreground: {
          "muted-disabled": {
            $description: "disabled state at 60% opacity",
            $value: "#80808099"
          }
        }
      }
    });
  });

  it("separates too-close paired disabled tokens", () => {
    const result = tamaguiPreprocessor({
      semantic: {
        background: {
          brand: {
            $type: "color",
            $value: "#777777"
          },
          night: {
            $type: "color",
            $value: "#202020"
          }
        },
        foreground: {
          brand: {
            $type: "color",
            $value: "#777777"
          },
          "brand-inverse": {
            $type: "color",
            $value: "#777777"
          },
          night: {
            $type: "color",
            $value: "#202020"
          },
          "night-inverse": {
            $type: "color",
            $value: "#202020"
          }
        }
      }
    }) as unknown as {
      semantic: {
        background: Record<string, { $value: string }>;
        foreground: Record<string, { $value: string }>;
      };
    };

    expect(result.semantic.background["brand-disabled"]!.$value).toBe(
      "#77777799"
    );
    expect(result.semantic.foreground["brand-disabled"]!.$value).toBe(
      "#000000"
    );
    expect(result.semantic.foreground["brand-inverse-disabled"]!.$value).toBe(
      "#000000"
    );
    expect(result.semantic.foreground["night-disabled"]!.$value).toBe(
      "#ffffff"
    );
    expect(result.semantic.foreground["night-inverse-disabled"]!.$value).toBe(
      "#ffffff"
    );
  });
});
