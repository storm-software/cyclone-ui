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

  it("uses reduced-strength hover, active, and inactive colors for backgrounds", () => {
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
      baseBackgroundInactive:
        result.semantic.background["base-inactive"]!.$value,
      themeBackgroundInactive:
        result.semantic.background["brand-inactive"]!.$value
    }).toEqual({
      baseBackgroundHover: "#373737",
      baseBackgroundActive: "#3a3a3a",
      themeBackgroundHover: "#3b3b3b",
      themeBackgroundActive: "#3a3a3a",
      baseBackgroundInactive: "#232323",
      themeBackgroundInactive: "#232323"
    });
  });

  it("adds a reduced-strength inactive background variant", () => {
    const result = tamaguiPreprocessor({
      semantic: {
        background: {
          base: { $type: "color", $value: "#333333", theme: "base" }
        }
      }
    }) as unknown as {
      semantic: {
        background: Record<string, { $description: string; $value: string }>;
      };
    };

    expect(result.semantic.background["base-inactive"]).toMatchObject({
      $description: "inactive state at 20% darker",
      $value: expect.any(String)
    });
  });

  it("darkens the dark theme base background when active", () => {
    const result = tamaguiPreprocessor({
      dark: {
        semantic: {
          background: {
            base: { $type: "color", $value: "#333333", theme: "dark" }
          }
        }
      }
    }) as any;

    expect(result.dark.semantic.background["base-active"].$value).toBe(
      "#2d2d2d"
    );
  });

  it("brightens active foreground colors in dark themes and darkens them in light themes", () => {
    const foreground = (theme: "dark" | "light") => ({
      base: {
        $type: "color",
        $value: "#333333",
        $description: `The primary foreground color for the ${theme} theme`,
        theme: "base"
      },
      brand: {
        $type: "color",
        $value: "#333333",
        $description: `The brand foreground color for the ${theme} theme`,
        theme: "brand"
      }
    });
    const dark = tamaguiPreprocessor({
      color: { foreground: foreground("dark") }
    }) as unknown as {
      color: {
        foreground: Record<string, { $description: string; $value: string }>;
      };
    };
    const light = tamaguiPreprocessor({
      color: { foreground: foreground("light") }
    }) as unknown as {
      color: {
        foreground: Record<string, { $description: string; $value: string }>;
      };
    };

    for (const name of ["base", "brand"]) {
      expect(dark.color.foreground[`${name}-active`]).toMatchObject({
        $description: expect.stringContaining("active, 75% brighter"),
        $value: "#757575"
      });
      expect(light.color.foreground[`${name}-active`]).toMatchObject({
        $description: expect.stringContaining("active, 75% darker")
      });
      expect(
        Number.parseInt(
          light.color.foreground[`${name}-active`]!.$value.slice(1, 3),
          16
        )
      ).toBeLessThan(0x33);
    }
  });

  it("keeps active foreground colors theme-directed at lightness extremes", () => {
    const result = tamaguiPreprocessor({
      dark: {
        color: {
          foreground: {
            base: {
              $type: "color",
              $value: "#fafafa",
              $description: "The primary foreground color for the dark theme",
              theme: "base"
            }
          }
        }
      },
      light: {
        color: {
          foreground: {
            base: {
              $type: "color",
              $value: "#f5f5f5",
              $description: "The primary foreground color for the light theme",
              theme: "base"
            }
          }
        }
      }
    }) as unknown as {
      dark: { color: { foreground: Record<string, { $value: string }> } };
      light: { color: { foreground: Record<string, { $value: string }> } };
    };

    expect(result.dark.color.foreground["base-active"]!.$value).toBe("#ffffff");
    expect(result.light.color.foreground["base-active"]!.$value).toBe(
      "#202020"
    );
  });

  it("adds inactive foreground variants that are 40% darker", () => {
    const result = tamaguiPreprocessor({
      semantic: {
        foreground: {
          light: { $type: "color", $value: "#f5f5f5", theme: "base" },
          dark: { $type: "color", $value: "#333333", theme: "brand" }
        }
      }
    }) as unknown as {
      semantic: {
        foreground: Record<string, { $description: string; $value: string }>;
      };
    };

    expect(result.semantic.foreground["light-inactive"]).toMatchObject({
      $description: "inactive state at 40% darker",
      $value: "#7b7b7b"
    });
    expect(result.semantic.foreground["dark-inactive"]).toMatchObject({
      $description: "inactive state at 40% darker",
      $value: "#141414"
    });
  });

  it("directs state brightness from the dark or light parent theme", () => {
    const themedColor = {
      $type: "color",
      $value: "#777777",
      theme: "base"
    };
    const result = tamaguiPreprocessor({
      dark: {
        semantic: {
          foreground: { base: themedColor }
        }
      },
      light: {
        semantic: {
          foreground: { base: themedColor }
        }
      }
    }) as unknown as {
      dark: {
        semantic: {
          foreground: Record<string, { $description: string; $value: string }>;
        };
      };
      light: {
        semantic: {
          foreground: Record<string, { $description: string; $value: string }>;
        };
      };
    };

    const dark = result.dark.semantic.foreground;
    const channel = (value: string) => Number.parseInt(value.slice(1, 3), 16);
    expect({
      hover: dark["base-hover"]!.$description,
      active: dark["base-active"]!.$description,
      inactive: dark["base-inactive"]!.$description,
      disabled: dark["base-disabled"]!.$description
    }).toEqual({
      hover: "hover state at 20% brighter",
      active: "active state at 75% brighter",
      inactive: "inactive state at 40% darker",
      disabled: "disabled state at 50% darker, 60% opacity"
    });
    expect(channel(dark["base-hover"]!.$value)).toBeGreaterThan(0x77);
    expect(channel(dark["base-active"]!.$value)).toBeGreaterThan(0x77);
    expect(channel(dark["base-inactive"]!.$value)).toBeLessThan(0x77);
    expect(channel(dark["base-disabled"]!.$value)).toBeLessThan(0x77);

    const light = result.light.semantic.foreground;
    expect({
      hover: light["base-hover"]!.$description,
      active: light["base-active"]!.$description,
      inactive: light["base-inactive"]!.$description,
      disabled: light["base-disabled"]!.$description
    }).toEqual({
      hover: "hover state at 20% darker",
      active: "active state at 75% darker",
      inactive: "inactive state at 40% brighter",
      disabled: "disabled state at 50% brighter, 60% opacity"
    });
    expect(channel(light["base-hover"]!.$value)).toBeLessThan(0x77);
    expect(channel(light["base-active"]!.$value)).toBeLessThan(0x77);
    expect(channel(light["base-inactive"]!.$value)).toBeGreaterThan(0x77);
    expect(channel(light["base-disabled"]!.$value)).toBeGreaterThan(0x77);
  });

  it("uses source-directed brightness near the parent theme extremes", () => {
    const result = tamaguiPreprocessor({
      dark: {
        semantic: {
          foreground: {
            base: { $type: "color", $value: "#eeeeee", theme: "base" }
          }
        }
      },
      light: {
        semantic: {
          foreground: {
            base: { $type: "color", $value: "#050505", theme: "base" }
          }
        }
      }
    }) as unknown as {
      dark: {
        semantic: { foreground: Record<string, { $value: string }> };
      };
      light: {
        semantic: { foreground: Record<string, { $value: string }> };
      };
    };

    const darkHover = result.dark.semantic.foreground["base-hover"]!.$value;
    const lightHover = result.light.semantic.foreground["base-hover"]!.$value;

    expect(Number.parseInt(darkHover.slice(1, 3), 16)).toBeLessThan(0xee);
    expect(Number.parseInt(lightHover.slice(1, 3), 16)).toBeGreaterThan(0x05);
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
