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

  it("reduces opacity for every ring shadow layer", () => {
    const result = tamaguiPreprocessor({
      color: {
        foreground: {
          secondary: { $type: "color", $value: "#336699" }
        }
      },
      semantic: {
        ring: {
          primary: {
            $type: "shadow",
            $value: {
              color: "{color.foreground.secondary}",
              offsetX: { value: 0, unit: "px" },
              offsetY: { value: 0, unit: "px" },
              blur: { value: 0, unit: "px" },
              spread: { value: 2, unit: "px" }
            }
          },
          layered: {
            $type: "shadow",
            $value: [
              { color: "#ff0000", offsetX: 0 },
              { color: "#00ff00", offsetX: 0 }
            ]
          }
        },
        shadow: {
          regular: {
            $type: "shadow",
            $value: { color: "#336699", offsetX: 0 }
          }
        }
      }
    });

    expect(result).toMatchObject({
      semantic: {
        ring: {
          primary: { $value: { color: "#33669980" } },
          layered: {
            $value: [{ color: "#ff000080" }, { color: "#00ff0080" }]
          }
        },
        shadow: {
          regular: { $value: { color: "#336699" } }
        }
      }
    });
  });

  it("creates a hover variant for a lone foreground-link token", () => {
    const result = tamaguiPreprocessor({
      semantic: {
        "foreground-link": {
          $type: "color",
          $value: "#336699"
        }
      }
    });

    expect(result).toMatchObject({
      semantic: {
        "foreground-link-hover": {
          $description: "hover state at 20% brighter",
          $value: "#5084b9"
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

  it("creates themed foreground link and body variants from colored and greyscale sources", () => {
    const result = tamaguiPreprocessor({
      semantic: {
        foreground: {
          link: {
            $type: "color",
            $value: "#336699"
          },
          body: {
            $type: "color",
            $value: "#666666"
          },
          brand: {
            $type: "color",
            $value: "#993366",
            theme: "brand"
          },
          neutral: {
            $type: "color",
            $value: "#808080",
            theme: "neutral"
          }
        }
      }
    }) as unknown as {
      semantic: {
        foreground: Record<string, { $value: string; theme?: string }>;
      };
    };

    const foreground = result.semantic.foreground;
    for (const role of ["link", "body"]) {
      for (const state of ["", "hover", "focused", "pressed", "disabled"]) {
        const suffix = state ? `-${state}` : "";
        expect(foreground[`brand-${role}${suffix}`]!.$value).toBe(
          foreground[`brand${suffix}`]!.$value
        );
        expect(foreground[`neutral-${role}${suffix}`]!.$value).toBe(
          foreground[`${role}${suffix}`]!.$value
        );
      }
    }

    expect(foreground["brand-link"]!.theme).toBe("brand");
    expect(foreground["brand-body"]!.theme).toBe("brand");
    expect(foreground["neutral-link"]!.theme).toBe("neutral");
    expect(foreground["neutral-body"]!.theme).toBe("neutral");
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
