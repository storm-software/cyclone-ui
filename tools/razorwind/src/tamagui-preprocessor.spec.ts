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

  it("applies the shared state direction to the base foreground disabled token", () => {
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
      $description: "disabled state at 75% brighter, 60% opacity",
      $value: "#ffffff99"
    });
    expect(result.semantic.foreground["brand-disabled"]!.$value).toBe(
      "#f5f5f599"
    );
  });

  it("reduces non-base hover and active brightness increases to 75%", () => {
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
        background: Record<string, { $description: string; $value: string }>;
        foreground: Record<string, { $value: string }>;
        border: Record<string, { $value: string }>;
      };
    };

    expect({
      baseBackgroundHover: result.semantic.background["base-hover"]!.$value,
      baseBackgroundActive: result.semantic.background["base-active"]!.$value,
      themeBackgroundHover:
        result.semantic.background["brand-hover"]!.$description,
      themeBackgroundActive:
        result.semantic.background["brand-active"]!.$description,
      baseBackgroundInactive:
        result.semantic.background["base-inactive"]!.$value,
      themeBackgroundInactive:
        result.semantic.background["brand-inactive"]!.$value
    }).toEqual({
      baseBackgroundHover: "#4c4c4c",
      baseBackgroundActive: "#3f3f3f",
      themeBackgroundHover: "hover state at 23% brighter",
      themeBackgroundActive: "active state at 11% brighter",
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

  it("brightens a dark theme base background when active", () => {
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
      "#3f3f3f"
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
        $description: expect.stringContaining("active, 15% brighter"),
        $value: "#3f3f3f"
      });
      expect(light.color.foreground[`${name}-active`]).toMatchObject({
        $description: expect.stringContaining("active, 15% darker")
      });
      expect(
        Number.parseInt(
          light.color.foreground[`${name}-active`]!.$value.slice(1, 3),
          16
        )
      ).toBeLessThan(0x33);
    }
  });

  it("uses white and black extremes for active foreground direction", () => {
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

    expect(result.dark.color.foreground["base-active"]!.$value).toBe("#c9c9c9");
    expect(result.light.color.foreground["base-active"]!.$value).toBe(
      "#c5c5c5"
    );
  });

  it("adds inactive foreground variants with a 20% inverse shift", () => {
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
      $description: "inactive state at 20% brighter",
      $value: "#ffffff"
    });
    expect(result.semantic.foreground["dark-inactive"]).toMatchObject({
      $description: "inactive state at 20% darker"
    });
    expect(
      Number.parseInt(
        result.semantic.foreground["dark-inactive"]!.$value.slice(1, 3),
        16
      )
    ).toBeLessThan(0x33);
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
      hover: "hover state at 30% brighter",
      active: "active state at 15% brighter",
      inactive: "inactive state at 20% darker",
      disabled: "disabled state at 75% darker, 60% opacity"
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
      hover: "hover state at 30% darker",
      active: "active state at 15% darker",
      inactive: "inactive state at 20% brighter",
      disabled: "disabled state at 75% brighter, 60% opacity"
    });
    expect(channel(light["base-hover"]!.$value)).toBeLessThan(0x77);
    expect(channel(light["base-active"]!.$value)).toBeLessThan(0x77);
    expect(channel(light["base-inactive"]!.$value)).toBeGreaterThan(0x77);
    expect(channel(light["base-disabled"]!.$value)).toBeGreaterThan(0x77);
  });

  it("applies requested state deltas with dark and light-mode extreme classification", () => {
    const token = (value: string) => ({
      $type: "color",
      $value: value,
      theme: "base"
    });
    const result = tamaguiPreprocessor({
      dark: {
        semantic: {
          foreground: {
            dark: token("#333333"),
            white: token("#f5f5f5")
          }
        }
      },
      light: {
        semantic: {
          foreground: {
            black: token("#050505"),
            light: token("#777777")
          }
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
    const channel = (value: string) => Number.parseInt(value.slice(1, 3), 16);

    expect({
      darkHover: result.dark.semantic.foreground["dark-hover"]!.$description,
      darkActive: result.dark.semantic.foreground["dark-active"]!.$description,
      darkInactive:
        result.dark.semantic.foreground["dark-inactive"]!.$description,
      whiteHover: result.dark.semantic.foreground["white-hover"]!.$description,
      whiteActive:
        result.dark.semantic.foreground["white-active"]!.$description,
      whiteInactive:
        result.dark.semantic.foreground["white-inactive"]!.$description,
      blackHover: result.light.semantic.foreground["black-hover"]!.$description,
      blackActive:
        result.light.semantic.foreground["black-active"]!.$description,
      blackInactive:
        result.light.semantic.foreground["black-inactive"]!.$description,
      lightHover: result.light.semantic.foreground["light-hover"]!.$description,
      lightActive:
        result.light.semantic.foreground["light-active"]!.$description,
      lightInactive:
        result.light.semantic.foreground["light-inactive"]!.$description
    }).toEqual({
      darkHover: "hover state at 30% brighter",
      darkActive: "active state at 15% brighter",
      darkInactive: "inactive state at 20% darker",
      whiteHover: "hover state at 30% darker",
      whiteActive: "active state at 15% darker",
      whiteInactive: "inactive state at 20% brighter",
      blackHover: "hover state at 30% brighter",
      blackActive: "active state at 15% brighter",
      blackInactive: "inactive state at 20% darker",
      lightHover: "hover state at 30% darker",
      lightActive: "active state at 15% darker",
      lightInactive: "inactive state at 20% brighter"
    });

    expect(
      channel(result.dark.semantic.foreground["dark-hover"]!.$value)
    ).toBeGreaterThan(channel("#333333"));
    expect(
      channel(result.dark.semantic.foreground["white-hover"]!.$value)
    ).toBeLessThan(channel("#f5f5f5"));
    expect(
      channel(result.light.semantic.foreground["black-hover"]!.$value)
    ).toBeGreaterThan(channel("#050505"));
    expect(
      channel(result.light.semantic.foreground["light-hover"]!.$value)
    ).toBeLessThan(channel("#777777"));
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
          $description: "hover state at 30% brighter",
          $value: "#5f93c9"
        }
      }
    });
  });

  it("uses a 60% brighter hover for inverse foreground tokens", () => {
    const result = tamaguiPreprocessor({
      semantic: {
        foreground: {
          "brand-inverse": {
            $type: "color",
            $value: "#336699",
            theme: "brand"
          }
        }
      }
    }) as unknown as {
      semantic: {
        foreground: Record<string, { $description: string; $value: string }>;
      };
    };

    expect(result.semantic.foreground["brand-inverse-hover"]).toMatchObject({
      $description: "hover state at 60% brighter",
      $value: "#8dc2fb"
    });
    expect(
      result.semantic.foreground["brand-inverse-ghost-hover"]
    ).toMatchObject({
      $description: "ghost hover state at 60% brighter than hover",
      $value: "#cdffff"
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

    expect(result.semantic.foreground["brand-hover"]!.$value).toBe("#646464");
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
      ghostHover: "#cdffff",
      hover: "#8dc2fb"
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
