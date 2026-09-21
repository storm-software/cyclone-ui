import { describe, expect, it } from "vitest";

import { tamaguiPreprocessor } from "./tamagui-preprocessor";

const colorToken = (value: string, theme?: string) => ({
  $type: "color",
  $value: value,
  ...(theme ? { theme } : {})
});

const relativeLuminance = (hex: string): number => {
  const channel = (offset: number) => {
    const value = Number.parseInt(hex.slice(offset, offset + 2), 16) / 255;

    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  };

  return 0.2126 * channel(1) + 0.7152 * channel(3) + 0.0722 * channel(5);
};

const contrastRatio = (first: string, second: string): number => {
  const lighter = Math.max(relativeLuminance(first), relativeLuminance(second));
  const darker = Math.min(relativeLuminance(first), relativeLuminance(second));

  return (lighter + 0.05) / (darker + 0.05);
};

const oklchHue = (hex: string): number => {
  const linearChannel = (offset: number) => {
    const value = Number.parseInt(hex.slice(offset, offset + 2), 16) / 255;

    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  };
  const red = linearChannel(1);
  const green = linearChannel(3);
  const blue = linearChannel(5);
  const l = Math.cbrt(
    0.412_221_470_8 * red + 0.536_332_536_3 * green + 0.051_445_992_9 * blue
  );
  const m = Math.cbrt(
    0.211_903_498_2 * red + 0.680_699_545_1 * green + 0.107_396_956_6 * blue
  );
  const s = Math.cbrt(
    0.088_302_461_9 * red + 0.281_718_837_6 * green + 0.629_978_700_5 * blue
  );
  const a = 1.977_998_495_1 * l - 2.428_592_205 * m + 0.450_593_709_9 * s;
  const b = 0.025_904_037_1 * l + 0.782_771_766_2 * m - 0.808_675_766 * s;
  const hue = (Math.atan2(b, a) * 180) / Math.PI;

  return hue < 0 ? hue + 360 : hue;
};

const hueDistance = (first: number, second: number): number => {
  const difference = Math.abs(first - second) % 360;

  return Math.min(difference, 360 - difference);
};

describe("tamaguiPreprocessor", () => {
  it("adds a white on-accent token for an accent theme with greater white contrast", () => {
    const result = tamaguiPreprocessor({
      color: {
        accent: { brand: colorToken("#336699", "brand") }
      }
    }) as any;

    expect(result.color["on-accent"].brand).toMatchObject({
      $type: "color",
      $value: "#ffffff",
      theme: "brand"
    });
  });

  it("falls back to black when white does not meet the accessibility contrast threshold", () => {
    const result = tamaguiPreprocessor({
      color: {
        accent: { brand: colorToken("#999999", "brand") }
      }
    }) as any;

    expect(result.color["on-accent"].brand).toMatchObject({
      $type: "color",
      $value: "#000000",
      theme: "brand"
    });
  });

  it("preserves an explicit on-accent token", () => {
    const result = tamaguiPreprocessor({
      color: {
        accent: {
          brand: colorToken("#336699", "brand")
        },
        "on-accent": { brand: colorToken("#123456", "brand") }
      }
    }) as any;

    expect(result.color["on-accent"].brand).toMatchObject({
      $value: "#123456",
      theme: "brand"
    });
  });

  it("generates the closest accessible muted background for light and dark accent themes", () => {
    const lightAccent = "#336699";
    const darkAccent = "#99ccff";
    const result = tamaguiPreprocessor({
      light: {
        color: {
          $description: "The light theme colors",
          accent: { brand: colorToken(lightAccent, "brand") }
        }
      },
      dark: {
        color: {
          $description: "The dark theme colors",
          accent: { brand: colorToken(darkAccent, "brand") }
        }
      }
    }) as any;
    const lightMuted = result.light.color.muted.brand;
    const darkMuted = result.dark.color.muted.brand;
    const lightOnMuted = result.light.color["on-muted"].brand;
    const darkOnMuted = result.dark.color["on-muted"].brand;
    const lightContrast = contrastRatio(lightOnMuted.$value, lightMuted.$value);
    const darkContrast = contrastRatio(darkOnMuted.$value, darkMuted.$value);

    expect(lightMuted).toMatchObject({
      $description: "Generated brand muted background for the light theme",
      theme: "brand"
    });
    expect(darkMuted).toMatchObject({
      $description: "Generated brand muted background for the dark theme",
      theme: "brand"
    });
    expect(relativeLuminance(lightMuted.$value)).toBeGreaterThan(
      relativeLuminance(lightAccent)
    );
    expect(relativeLuminance(darkMuted.$value)).toBeLessThan(
      relativeLuminance(darkAccent)
    );
    expect(relativeLuminance(lightOnMuted.$value)).toBeLessThan(
      relativeLuminance(lightAccent)
    );
    expect(relativeLuminance(darkOnMuted.$value)).toBeGreaterThan(
      relativeLuminance(darkAccent)
    );
    expect(lightContrast).toBeGreaterThanOrEqual(4.5);
    expect(lightContrast).toBeLessThan(5);
    expect(darkContrast).toBeGreaterThanOrEqual(4.5);
    expect(darkContrast).toBeLessThan(5);
    expect(lightOnMuted).toMatchObject({
      $description: "Generated brand foreground on muted backgrounds",
      theme: "brand"
    });
    expect(darkOnMuted).toMatchObject({
      $description: "Generated brand foreground on muted backgrounds",
      theme: "brand"
    });
    expect(result.light.color.muted).toHaveProperty("brand-hover");
    expect(result.dark.color.muted).toHaveProperty("brand-hover");
  });

  it("generates accent companions for hyphenated theme descriptions", () => {
    const result = tamaguiPreprocessor({
      color: {
        $description:
          "Semantic colors used throughout the dark-theme interface.",
        accent: { brand: colorToken("#336699", "brand") }
      }
    }) as any;

    expect(result.color.muted.brand).toMatchObject({
      $description: "Generated brand muted background for the dark theme",
      theme: "brand"
    });
    expect(result.color["on-muted"].brand).toMatchObject({
      $description: "Generated brand foreground on muted backgrounds",
      theme: "brand"
    });
    expect(result.color.muted).toHaveProperty("brand-hover");
    expect(result.color["on-muted"]).toHaveProperty("brand-hover");
  });

  it("alternates muted and on-muted adjustments without exhausting either endpoint", () => {
    const lightAccent = "#777777";
    const darkAccent = "#336699";
    const result = tamaguiPreprocessor({
      light: {
        color: {
          $description: "The light theme colors",
          accent: { brand: colorToken(lightAccent, "brand") }
        }
      },
      dark: {
        color: {
          $description: "The dark theme colors",
          accent: { brand: colorToken(darkAccent, "brand") }
        }
      }
    }) as any;
    const lightMuted = result.light.color.muted.brand.$value;
    const darkMuted = result.dark.color.muted.brand.$value;
    const lightOnMuted = result.light.color["on-muted"].brand.$value;
    const darkOnMuted = result.dark.color["on-muted"].brand.$value;
    const lightContrast = contrastRatio(lightOnMuted, lightMuted);
    const darkContrast = contrastRatio(darkOnMuted, darkMuted);

    expect(relativeLuminance(lightOnMuted)).toBeLessThan(
      relativeLuminance(lightAccent)
    );
    expect(relativeLuminance(darkOnMuted)).toBeGreaterThan(
      relativeLuminance(darkAccent)
    );
    expect(relativeLuminance(lightMuted)).toBeLessThan(1);
    expect(relativeLuminance(darkMuted)).toBeGreaterThan(0.005);
    expect(lightContrast).toBeGreaterThanOrEqual(4.5);
    expect(lightContrast).toBeLessThan(5);
    expect(darkContrast).toBeGreaterThanOrEqual(4.5);
    expect(darkContrast).toBeLessThan(5);
  });

  it("preserves the accent hue when generated colors require gamut mapping", () => {
    const accent = "#ff0000";
    const result = tamaguiPreprocessor({
      light: {
        color: {
          $description: "The light theme colors",
          accent: { danger: colorToken(accent, "danger") }
        }
      },
      dark: {
        color: {
          $description: "The dark theme colors",
          accent: { danger: colorToken(accent, "danger") }
        }
      }
    }) as any;
    const accentHue = oklchHue(accent);
    const generated = [
      result.light.color.muted.danger.$value,
      result.light.color["on-muted"].danger.$value,
      result.dark.color.muted.danger.$value,
      result.dark.color["on-muted"].danger.$value
    ];

    for (const color of generated) {
      expect(hueDistance(oklchHue(color), accentHue)).toBeLessThanOrEqual(1);
    }
  });

  it("resolves accent references before adjusting the generated pair", () => {
    const result = tamaguiPreprocessor({
      palette: { brand: colorToken("#336699") },
      light: {
        color: {
          $description: "The light theme colors",
          accent: { brand: colorToken("{palette.brand}", "brand") }
        }
      }
    }) as any;

    const muted = result.light.color.muted.brand.$value;
    const onMuted = result.light.color["on-muted"].brand.$value;

    expect(onMuted).toMatch(/^#[0-9a-f]{6}$/);
    expect(onMuted).not.toBe("{palette.brand}");
    expect(contrastRatio(onMuted, muted)).toBeGreaterThanOrEqual(4.5);
  });

  it("preserves explicit accent companion tokens", () => {
    const result = tamaguiPreprocessor({
      color: {
        $description: "The light theme colors",
        accent: {
          brand: colorToken("#336699", "brand")
        },
        muted: {
          brand: {
            ...colorToken("#f0f0f0", "brand"),
            $description: "Custom muted brand"
          }
        },
        "on-muted": {
          brand: {
            ...colorToken("#123456", "brand"),
            $description: "Custom foreground on muted brand"
          }
        },
        "on-accent": {
          brand: colorToken("#ffffff", "brand")
        }
      }
    }) as any;

    expect(result.color.muted.brand).toMatchObject({
      $description: "Custom muted brand",
      $value: "#f0f0f0"
    });
    expect(result.color["on-muted"].brand).toMatchObject({
      $description: "Custom foreground on muted brand",
      $value: "#123456"
    });
    expect(result.color["on-accent"].brand).toMatchObject({
      $value: "#ffffff"
    });
  });

  it("keeps accent companion roles in sibling groups and generates their states", () => {
    const result = tamaguiPreprocessor({
      dark: {
        color: {
          $description: "The dark theme colors",
          accent: {
            base: colorToken("#333333", "base"),
            brand: colorToken("#336699", "brand")
          },
          "on-accent": {
            base: colorToken("#222222", "base")
          },
          muted: {
            base: colorToken("#444444", "base")
          },
          "on-muted": {
            base: colorToken("#555555", "base")
          }
        }
      }
    }) as any;
    const color = result.dark.color;

    expect(color.accent).not.toHaveProperty("brand-on-accent");
    expect(color.accent).not.toHaveProperty("brand-muted");
    expect(color.accent).not.toHaveProperty("brand-on-muted");
    expect(color["on-accent"]).toMatchObject({
      base: { $value: "#222222" },
      brand: { $value: "#ffffff", theme: "brand" }
    });
    expect(color.muted).toMatchObject({
      base: { $value: "#444444" },
      brand: {
        $description: "Generated brand muted background for the dark theme",
        theme: "brand"
      }
    });
    expect(color["on-muted"]).toMatchObject({
      base: { $value: "#555555" },
      brand: {
        $description: "Generated brand foreground on muted backgrounds",
        theme: "brand"
      }
    });

    for (const groupKey of ["on-accent", "muted", "on-muted"]) {
      expect(color[groupKey]).toHaveProperty("base-hover");
      expect(color[groupKey]).toHaveProperty("brand-hover");
    }
  });

  it("desaturates colored accent disabled variants while preserving alpha", () => {
    const result = tamaguiPreprocessor({
      color: { accent: { brand: colorToken("#ff000080", "brand") } }
    });

    expect(result).toMatchObject({
      color: {
        accent: {
          "brand-disabled": {
            $description: "disabled state at 80% saturation",
            $value: expect.stringMatching(/^#(?!ff000080)[0-9a-f]{6}80$/)
          }
        }
      }
    });
  });

  it("reduces opacity for greyscale surface disabled variants", () => {
    const result = tamaguiPreprocessor({
      color: { surface: { canvas: colorToken("#808080") } }
    });

    expect(result).toMatchObject({
      color: {
        surface: {
          "canvas-disabled": {
            $description: "disabled state at 40% opacity",
            $value: "#80808066"
          }
        }
      }
    });
  });

  it("uses base strength for the base accent and theme strength elsewhere", () => {
    const result = tamaguiPreprocessor({
      color: {
        accent: {
          base: colorToken("#333333", "base"),
          brand: colorToken("#333333", "brand")
        },
        surface: { canvas: colorToken("#333333") }
      }
    }) as any;

    expect({
      baseHover: result.color.accent["base-hover"].$value,
      baseActive: result.color.accent["base-active"].$value,
      brandHover: result.color.accent["brand-hover"].$description,
      brandActive: result.color.accent["brand-active"].$description,
      canvasHover: result.color.surface["canvas-hover"].$description,
      baseInactive: result.color.accent["base-inactive"].$value,
      brandInactive: result.color.accent["brand-inactive"].$value
    }).toEqual({
      baseHover: "#4c4c4c",
      baseActive: "#3f3f3f",
      brandHover: "hover state at 23% brighter",
      brandActive: "active state at 11% brighter",
      canvasHover: "hover state at 23% brighter",
      baseInactive: "#232323",
      brandInactive: "#232323"
    });
  });

  it("reduces hairline and base muted active brightness by 30 percent", () => {
    const baseResult = tamaguiPreprocessor({
      color: {
        hairline: colorToken("#333333", "base"),
        muted: {
          base: colorToken("#333333", "base")
        }
      }
    }) as any;
    const themeResult = tamaguiPreprocessor({
      color: {
        hairline: colorToken("#333333", "brand"),
        muted: { brand: colorToken("#333333", "brand") }
      }
    }) as any;

    expect({
      hairlineBase: baseResult.color["hairline-active"].$description,
      hairlineTheme: themeResult.color["hairline-active"].$description,
      mutedBase: baseResult.color.muted["base-active"].$description,
      mutedTheme: themeResult.color.muted["brand-active"].$description
    }).toEqual({
      hairlineBase: "active state at 10% brighter",
      hairlineTheme: "active state at 8% brighter",
      mutedBase: "active state at 10% brighter",
      mutedTheme: "active state at 11% brighter"
    });
  });

  it("directs state brightness from the dark or light parent theme", () => {
    const themedColor = colorToken("#777777", "base");
    const result = tamaguiPreprocessor({
      dark: {
        color: {
          $description: "The dark theme colors",
          accent: {
            base: themedColor,
            "base-muted": colorToken("#000000", "base")
          }
        }
      },
      light: {
        color: {
          $description: "The light theme colors",
          accent: {
            base: themedColor,
            "base-muted": colorToken("#ffffff", "base")
          }
        }
      }
    }) as any;
    const channel = (value: string) => Number.parseInt(value.slice(1, 3), 16);
    const dark = result.dark.color.accent;
    const light = result.light.color.accent;

    expect({
      darkHover: dark["base-hover"].$description,
      darkActive: dark["base-active"].$description,
      darkInactive: dark["base-inactive"].$description,
      lightHover: light["base-hover"].$description,
      lightActive: light["base-active"].$description,
      lightInactive: light["base-inactive"].$description
    }).toEqual({
      darkHover: "hover state at 30% brighter",
      darkActive: "active state at dark base primitive",
      darkInactive: "inactive state at 20% darker",
      lightHover: "hover state at 30% darker",
      lightActive: "active state at light base primitive",
      lightInactive: "inactive state at 20% darker"
    });
    expect(channel(dark["base-hover"].$value)).toBeGreaterThan(0x77);
    expect(dark["base-active"].$value).toBe("#ffffff");
    expect(relativeLuminance(dark["base-inactive"].$value)).toBeLessThan(
      relativeLuminance(dark["base-active"].$value)
    );
    expect(channel(light["base-hover"].$value)).toBeLessThan(0x77);
    expect(light["base-active"].$value).toBe("#0c0c0d");
    expect(relativeLuminance(light["base-inactive"].$value)).toBeLessThan(
      relativeLuminance(light["base-active"].$value)
    );
  });

  it("uses resolved primitives for base active states and dims their inactive states", () => {
    const result = tamaguiPreprocessor({
      dark: {
        color: {
          $description: "The dark theme colors",
          accent: { base: colorToken("#777777", "base") }
        }
      },
      light: {
        color: {
          $description: "The light theme colors",
          accent: { base: colorToken("#777777", "base") }
        }
      }
    }) as any;
    const dark = result.dark.color.accent;
    const light = result.light.color.accent;

    expect(dark["base-active"].$value).toBe("#ffffff");
    expect(light["base-active"].$value).toBe("#0c0c0d");
    expect(relativeLuminance(dark["base-inactive"].$value)).toBeLessThan(
      relativeLuminance(dark["base-active"].$value)
    );
    expect(relativeLuminance(light["base-inactive"].$value)).toBeLessThan(
      relativeLuminance(light["base-active"].$value)
    );
  });

  it("reserves base primitives for colors explicitly themed as base", () => {
    const result = tamaguiPreprocessor({
      dark: {
        color: {
          $description: "The dark theme colors",
          accent: { base: colorToken("#777777") }
        }
      }
    }) as any;

    expect(result.dark.color.accent["base-active"].$value).not.toBe("#ffffff");
  });

  it("generates states only for surface, link, hairline, and accent colors", () => {
    const result = tamaguiPreprocessor({
      color: {
        ink: { emphasis: colorToken("#f5f5f5") },
        surface: {
          sunken: colorToken("#111111"),
          canvas: colorToken("#222222")
        },
        required: colorToken("#ff0000"),
        link: colorToken("#336699"),
        hairline: colorToken("#777777"),
        accent: {
          base: colorToken("#f5f5f5", "base"),
          brand: colorToken("#336699", "brand")
        },
        background: { base: colorToken("#333333", "base") },
        overlay: { background: colorToken("#444444") },
        data: { brand: { emphasis: colorToken("#555555") } }
      }
    }) as any;

    expect(Object.keys(result.color.surface).sort()).toEqual([
      "canvas",
      "canvas-active",
      "canvas-disabled",
      "canvas-hover",
      "canvas-inactive",
      "sunken",
      "sunken-active",
      "sunken-disabled",
      "sunken-hover",
      "sunken-inactive"
    ]);
    expect(Object.keys(result.color.accent).sort()).toEqual([
      "base",
      "base-active",
      "base-disabled",
      "base-hover",
      "base-inactive",
      "brand",
      "brand-active",
      "brand-disabled",
      "brand-hover",
      "brand-inactive"
    ]);
    expect(result.color).toHaveProperty("link-hover");
    expect(result.color).toHaveProperty("link-active");
    expect(result.color).toHaveProperty("link-inactive");
    expect(result.color).not.toHaveProperty("link-disabled");
    expect(result.color).toHaveProperty("hairline-hover");
    expect(result.color).toHaveProperty("hairline-active");
    expect(result.color).toHaveProperty("hairline-inactive");
    expect(result.color).not.toHaveProperty("hairline-disabled");

    expect(result.color.ink).not.toHaveProperty("emphasis-hover");
    expect(result.color).not.toHaveProperty("required-hover");
    expect(result.color.background).not.toHaveProperty("base-hover");
    expect(result.color.overlay).not.toHaveProperty("background-hover");
    expect(result.color.data.brand).not.toHaveProperty("emphasis-hover");
  });

  it("does not overwrite explicit state colors", () => {
    const result = tamaguiPreprocessor({
      color: {
        surface: {
          canvas: colorToken("#222222"),
          "canvas-hover": colorToken("#abcdef")
        },
        link: colorToken("#336699"),
        "link-hover": colorToken("#fedcba")
      }
    }) as any;

    expect(result.color.surface["canvas-hover"].$value).toBe("#abcdef");
    expect(result.color["link-hover"].$value).toBe("#fedcba");
  });

  it("does not generate states for non-color tokens in target groups", () => {
    const result = tamaguiPreprocessor({
      color: {
        surface: {
          shadow: {
            $type: "shadow",
            $value: { color: "#336699", offsetX: 0 }
          }
        }
      }
    }) as any;

    expect(result.color.surface).not.toHaveProperty("shadow-hover");
    expect(result.color.surface.shadow.$value.color).toBe("#336699");
  });

  it("applies opacity by ring token theme and preserves offset masks", () => {
    const result = tamaguiPreprocessor({
      color: { ink: { secondary: colorToken("#336699") } },
      semantic: {
        ring: {
          base: {
            $type: "shadow",
            theme: "base",
            $value: {
              color: "{color.ink.secondary}",
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
});
