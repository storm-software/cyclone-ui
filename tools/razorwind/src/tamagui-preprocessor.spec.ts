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

  it("creates brighter ghost hovers for themed colored foregrounds", () => {
    const result = tamaguiPreprocessor({
      semantic: {
        foreground: {
          brand: {
            $type: "color",
            $value: "#444444",
            theme: "brand"
          },
          "brand-inverse": {
            $type: "color",
            $value: "#336699",
            theme: "brand"
          },
          body: {
            $type: "color",
            $value: "#444444"
          },
          "neutral-inverse": {
            $type: "color",
            $value: "#444444",
            theme: "neutral"
          }
        }
      }
    }) as unknown as {
      semantic: {
        foreground: Record<
          string,
          { $description: string; $value: string; theme?: string }
        >;
      };
    };

    expect(result.semantic.foreground["brand-hover"]!.$value).toBe("#595959");
    expect(result.semantic.foreground["brand-ghost-hover"]).toMatchObject({
      $description: "ghost hover state at 20% brighter than hover",
      $value: "#737373",
      theme: "brand"
    });
    expect({
      ghostHover:
        result.semantic.foreground["brand-inverse-ghost-hover"]!.$value,
      hover: result.semantic.foreground["brand-inverse-hover"]!.$value
    }).toEqual({
      ghostHover: "#74a9e0",
      hover: "#5084b9"
    });
    expect(result.semantic.foreground).not.toHaveProperty("body-ghost-hover");
    expect(result.semantic.foreground).not.toHaveProperty(
      "neutral-inverse-ghost-hover"
    );
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
          },
          dusk: {
            $type: "color",
            $value: "#333333"
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
          },
          dusk: {
            $type: "color",
            $value: "#333333"
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
    expect({
      brand: result.semantic.foreground["brand-disabled"]!.$value,
      brandInverse:
        result.semantic.foreground["brand-inverse-disabled"]!.$value,
      dusk: result.semantic.foreground["dusk-disabled"]!.$value,
      night: result.semantic.foreground["night-disabled"]!.$value,
      nightInverse: result.semantic.foreground["night-inverse-disabled"]!.$value
    }).toEqual({
      brand: "#262626",
      brandInverse: "#262626",
      dusk: "#999999",
      night: "#aeaeae",
      nightInverse: "#aeaeae"
    });
  });
});
