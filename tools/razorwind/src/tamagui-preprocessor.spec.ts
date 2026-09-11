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

  it("darkens only the base theme foreground disabled token", () => {
    const result = tamaguiPreprocessor({
      semantic: {
        foreground: {
          base: {
            $type: "color",
            $value: "#f5f5f5",
            theme: "base"
          },
          brand: {
            $type: "color",
            $value: "#f5f5f5",
            theme: "brand"
          }
        }
      }
    }) as unknown as {
      semantic: {
        foreground: Record<string, { $description: string; $value: string }>;
      };
    };

    expect(result.semantic.foreground["base-disabled"]).toMatchObject({
      $description: "disabled state at 15% darker, 60% opacity",
      $value: "#c5c5c599"
    });
    expect(result.semantic.foreground["brand-disabled"]!.$value).toBe(
      "#f5f5f599"
    );
  });

  it("uses half-strength hover and active colors only for backgrounds", () => {
    const result = tamaguiPreprocessor({
      semantic: {
        background: {
          base: { $type: "color", $value: "#333333", theme: "base" },
          brand: { $type: "color", $value: "#333333", theme: "brand" }
        },
        foreground: {
          base: { $type: "color", $value: "#333333", theme: "base" },
          brand: { $type: "color", $value: "#333333", theme: "brand" }
        },
        border: {
          base: { $type: "color", $value: "#333333", theme: "base" },
          brand: { $type: "color", $value: "#333333", theme: "brand" }
        }
      }
    }) as unknown as {
      semantic: {
        background: Record<string, { $value: string }>;
        foreground: Record<string, { $value: string }>;
        border: Record<string, { $value: string }>;
      };
    };

    expect({
      baseBackgroundHover: result.semantic.background["base-hover"]!.$value,
      baseBackgroundActive: result.semantic.background["base-active"]!.$value,
      themeBackgroundHover: result.semantic.background["brand-hover"]!.$value,
      themeBackgroundActive: result.semantic.background["brand-active"]!.$value,
      baseForegroundHover: result.semantic.foreground["base-hover"]!.$value,
      baseForegroundActive: result.semantic.foreground["base-active"]!.$value,
      themeForegroundHover: result.semantic.foreground["brand-hover"]!.$value,
      themeForegroundActive: result.semantic.foreground["brand-active"]!.$value,
      baseBorderHover: result.semantic.border["base-hover"]!.$value,
      baseBorderActive: result.semantic.border["base-active"]!.$value,
      themeBorderHover: result.semantic.border["brand-hover"]!.$value,
      themeBorderActive: result.semantic.border["brand-active"]!.$value
    }).toEqual({
      baseBackgroundHover: "#3b3b3b",
      baseBackgroundActive: "#4c4c4c",
      themeBackgroundHover: "#444444",
      themeBackgroundActive: "#3b3b3b",
      baseForegroundHover: "#444444",
      baseForegroundActive: "#676767",
      themeForegroundHover: "#555555",
      themeForegroundActive: "#444444",
      baseBorderHover: "#444444",
      baseBorderActive: "#676767",
      themeBorderHover: "#555555",
      themeBorderActive: "#444444"
    });
  });

  it("applies opacity by ring token theme and preserves offset masks", () => {
    const result = tamaguiPreprocessor({
      color: {
        foreground: {
          secondary: { $type: "color", $value: "#336699" }
        }
      },
      semantic: {
        ring: {
          base: {
            $type: "shadow",
            theme: "base",
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
            theme: "brand",
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
          base: { $value: { color: "#33669999" } },
          layered: {
            $value: [{ color: "#ff0000" }, { color: "#00ff00e6" }]
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
          $description: "hover state at 40% brighter",
          $value: "#6ea3d9"
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
