import { describe, expect, it } from "vitest";

import { tamaguiPreprocessor } from "./tamagui-preprocessor";

const colorToken = (value: string) => ({
  $type: "color",
  $value: value
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
  it("generates missing on-* text colors for status colors", () => {
    const result = tamaguiPreprocessor({
      color: {
        danger: colorToken("#336699"),
        warning: colorToken("#ffee99")
      }
    }) as any;

    expect(result.color["on-danger-accent"]).toMatchObject({
      $value: "#FAFAFA",
      $description: "Generated text and icon color on danger backgrounds"
    });
    expect(result.color["on-warning-accent"].$value).toBe("#151518");
    expect(result.color).not.toHaveProperty("on-danger");
  });

  it("generates missing *-muted backgrounds from the parent theme", () => {
    const lightDanger = "#336699";
    const darkDanger = "#99ccff";
    const result = tamaguiPreprocessor({
      light: {
        color: {
          $description: "The light theme colors",
          danger: colorToken(lightDanger)
        }
      },
      dark: {
        color: {
          $description: "The dark theme colors",
          danger: colorToken(darkDanger)
        }
      }
    }) as any;
    const light = result.light.color["danger-muted"];
    const dark = result.dark.color["danger-muted"];

    expect(light.$description).toBe(
      "Generated low-emphasis danger background for the light theme"
    );
    expect(dark.$description).toBe(
      "Generated low-emphasis danger background for the dark theme"
    );
    expect(relativeLuminance(light.$value)).toBeGreaterThan(
      relativeLuminance(lightDanger)
    );
    expect(relativeLuminance(dark.$value)).toBeLessThan(
      relativeLuminance(darkDanger)
    );
    expect(
      contrastRatio(light.$value, result.light.color["on-danger-muted"].$value)
    ).toBeGreaterThanOrEqual(6.6);
  });

  it("preserves explicit on-* and *-muted colors and skips primary companions", () => {
    const result = tamaguiPreprocessor({
      color: {
        $description: "The light theme colors",
        primary: colorToken("#336699"),
        info: colorToken("#336699"),
        "on-info": colorToken("#f0f0f0"),
        "info-muted": colorToken("#abcdef")
      }
    }) as any;

    expect(result.color["on-info-accent"]).toMatchObject({
      $value: "#f0f0f0",
      theme: "info"
    });
    expect(result.color).not.toHaveProperty("on-info");
    expect(result.color["info-muted"].$value).toBe("#abcdef");
    expect(result.color).not.toHaveProperty("on-primary");
    expect(result.color).not.toHaveProperty("primary-muted");
  });

  it("preserves the status hue when generated colors require gamut mapping", () => {
    const danger = "#ff0000";
    const result = tamaguiPreprocessor({
      light: {
        color: {
          $description: "The light theme colors",
          danger: colorToken(danger)
        }
      },
      dark: {
        color: {
          $description: "The dark theme colors",
          danger: colorToken(danger)
        }
      }
    }) as any;

    for (const color of [
      result.light.color["danger-muted"].$value,
      result.dark.color["danger-muted"].$value
    ]) {
      expect(
        hueDistance(oklchHue(color), oklchHue(danger))
      ).toBeLessThanOrEqual(1);
    }
  });

  it("resolves status references before generating companions", () => {
    const result = tamaguiPreprocessor({
      palette: { red: colorToken("#336699") },
      light: {
        color: {
          $description: "The light theme colors",
          danger: colorToken("{palette.red}")
        }
      }
    }) as any;

    expect(result.light.color["on-danger-accent"].$value).toBe("#FAFAFA");
    expect(result.light.color["danger-muted"].$value).toMatch(/^#[0-9a-f]{6}$/);
  });

  it("derives low-saturation states from the contrast primitive and scales saturated colors", () => {
    const color = {
      primary: colorToken("#777777"),
      danger: colorToken("#336699")
    };
    const result = tamaguiPreprocessor({
      dark: { color: { $description: "The dark theme colors", ...color } },
      light: { color: { $description: "The light theme colors", ...color } }
    }) as any;
    const dark = result.dark.color;
    const light = result.light.color;

    expect({
      darkActive: dark["base-active"].$value,
      lightActive: light["base-active"].$value,
      darkActiveDescription: dark["base-active"].$description,
      darkInactive: dark["base-inactive"].$description,
      darkDanger: dark["danger-active"].$description,
      lightDanger: light["danger-active"].$description,
      dangerInactive: dark["danger-inactive"].$description
    }).toEqual({
      darkActive: "#ffffff",
      lightActive: "#0c0c0d",
      darkActiveDescription: "active state at dark contrast primitive",
      darkInactive: "inactive state at 40% darker",
      darkDanger: "active state at 19% brighter",
      lightDanger: "active state at 19% darker",
      dangerInactive: "inactive state at 20% darker"
    });
  });

  it("shifts active colors already near the contrast primitive toward the middle", () => {
    const result = tamaguiPreprocessor({
      dark: {
        color: {
          $description: "The dark theme colors",
          primary: colorToken("#f1f1f1")
        }
      },
      light: {
        color: {
          $description: "The light theme colors",
          primary: colorToken("#1f1f21")
        }
      }
    }) as any;

    expect({
      dark: result.dark.color["base-active"].$description,
      light: result.light.color["base-active"].$description
    }).toEqual({
      dark: "active state at 10% darker",
      light: "active state at 10% lighter"
    });
    expect(
      relativeLuminance(result.dark.color["base-active"].$value)
    ).toBeLessThan(relativeLuminance("#f1f1f1"));
    expect(
      relativeLuminance(result.light.color["base-active"].$value)
    ).toBeGreaterThan(relativeLuminance("#1f1f21"));
  });

  it("keeps low-saturation surface states subtler than other neutral colors", () => {
    const result = tamaguiPreprocessor({
      color: {
        $description: "The dark theme colors",
        primary: colorToken("#333333"),
        surface: { canvas: colorToken("#333333") }
      }
    }) as any;

    expect({
      primaryActive: result.color["base-active"].$value,
      canvasActive: result.color.surface["canvas-active"].$description,
      canvasInactive: result.color.surface["canvas-inactive"].$description
    }).toEqual({
      primaryActive: "#ffffff",
      canvasActive: "active state at 10% brighter",
      canvasInactive: "inactive state at 20% darker"
    });
  });

  it("increases outline active strength", () => {
    const result = tamaguiPreprocessor({
      color: {
        outline: colorToken("#333333")
      }
    }) as any;
    const saturated = tamaguiPreprocessor({
      color: { outline: colorToken("#336699") }
    }) as any;

    expect({
      outline: result.color["outline-active"].$description,
      outlineSaturated: saturated.color["outline-active"].$description
    }).toEqual({
      outline: "active state at 80% brighter",
      outlineSaturated: "active state at 40% brighter"
    });
  });

  it("generates active, inactive, and disabled states only for target colors", () => {
    const result = tamaguiPreprocessor({
      color: {
        surface: {
          sunken: colorToken("#111111"),
          canvas: colorToken("#222222")
        },
        primary: colorToken("#f5f5f5"),
        "on-primary": colorToken("#111111"),
        secondary: colorToken("#777777"),
        tertiary: colorToken("#777777"),
        outline: colorToken("#777777"),
        danger: colorToken("#ff0000"),
        "on-danger": colorToken("#ffffff"),
        "danger-muted": colorToken("#330000"),
        backdrop: colorToken("#00000066"),
        data: { red: { emphasis: colorToken("#555555") } }
      }
    }) as any;

    expect(Object.keys(result.color.surface).sort()).toEqual([
      "canvas",
      "canvas-active",
      "canvas-disabled",
      "canvas-inactive",
      "sunken",
      "sunken-active",
      "sunken-disabled",
      "sunken-inactive"
    ]);
    for (const key of [
      "base",
      "base-muted",
      "outline",
      "danger",
      "danger-muted"
    ]) {
      for (const state of ["active", "inactive", "disabled"]) {
        expect(result.color).toHaveProperty(`${key}-${state}`);
      }
      expect(result.color).not.toHaveProperty(`${key}-hover`);
    }

    for (const key of ["primary", "secondary", "tertiary", "on-primary"]) {
      expect(result.color).toHaveProperty(key);
      expect(result.color).not.toHaveProperty(`${key}-active`);
    }
    expect(result.color).not.toHaveProperty("base-accent-active");
    expect(result.color).not.toHaveProperty("on-base-accent-active");
    expect(result.color).not.toHaveProperty("on-danger-active");
    expect(result.color).not.toHaveProperty("backdrop-active");
    expect(result.color.data.red).not.toHaveProperty("emphasis-active");
  });

  it("does not overwrite explicit state colors", () => {
    const result = tamaguiPreprocessor({
      color: {
        surface: {
          canvas: colorToken("#222222"),
          "canvas-active": colorToken("#abcdef")
        },
        outline: colorToken("#336699"),
        "outline-active": colorToken("#fedcba")
      }
    }) as any;

    expect(result.color.surface["canvas-active"].$value).toBe("#abcdef");
    expect(result.color["outline-active"].$value).toBe("#fedcba");
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

    expect(result.color.surface).not.toHaveProperty("shadow-active");
    expect(result.color.surface.shadow.$value.color).toBe("#336699");
  });

  it("desaturates colored disabled variants and fades them over the disabled base", () => {
    const result = tamaguiPreprocessor({
      color: { danger: colorToken("#ff000080") }
    }) as any;

    expect(result.color["danger-disabled"]).toMatchObject({
      $description:
        "disabled state at 85% saturation, 13% over oklch(0.3839 0.0045 286.26)",
      $value: expect.stringMatching(/^#[0-9a-f]{6}$/)
    });
  });

  it("fades greyscale surface disabled variants over the disabled base", () => {
    const result = tamaguiPreprocessor({
      color: { surface: { canvas: colorToken("#ffffff") } }
    }) as any;

    expect(result.color.surface["canvas-disabled"]).toMatchObject({
      $description: "disabled state at 13% over oklch(0.3839 0.0045 286.26)",
      $value: "#5b5b5d"
    });
  });

  it("assigns themes to base aliases and status colors", () => {
    const result = tamaguiPreprocessor({
      color: {
        $description: "The dark theme colors",
        primary: colorToken("#eeeeee"),
        "on-primary": colorToken("#111111"),
        tertiary: { ...colorToken("#444444"), theme: "custom" },
        outline: colorToken("#777777"),
        warning: colorToken("#ffee99")
      }
    }) as any;

    expect(result.color.primary.theme).toBeUndefined();
    expect(result.color["on-primary"].theme).toBeUndefined();
    expect(result.color.base).toMatchObject({
      $value: "#eeeeee",
      theme: "base",
      group: "base"
    });
    expect(result.color["base-accent"]).toMatchObject({
      $value: "{color.base}",
      theme: "base"
    });
    expect(result.color["base-active"].theme).toBe("base");
    expect(result.color).not.toHaveProperty("on-base");
    expect(result.color["on-base-accent"]).toMatchObject({
      $value: "#111111",
      theme: "base"
    });
    expect(result.color.tertiary.theme).toBe("custom");
    expect(result.color).not.toHaveProperty("tertiary-disabled");
    expect(result.color.outline.theme).toBeUndefined();
    expect(result.color.warning.theme).toBe("warning");
    expect(result.color["warning-accent"]).toMatchObject({
      $value: "{color.warning}",
      theme: "warning",
      group: "warning"
    });
    expect(result.color["on-warning-accent"]).toMatchObject({
      theme: "warning",
      group: "warning"
    });
    expect(result.color["on-warning-muted"].theme).toBe("warning");
    expect(result.color["warning-muted"].theme).toBe("warning");
    expect(result.color["warning-muted-active"].theme).toBe("warning");
    expect(result.color["warning-inactive"].theme).toBe("warning");
  });

  it("generates focus rings for base aliases and status colors", () => {
    const result = tamaguiPreprocessor({
      color: {
        surface: { elevated: colorToken("#222222") },
        primary: colorToken("#eeeeee"),
        outline: colorToken("#777777"),
        danger: colorToken("#336699")
      }
    }) as any;

    expect(Object.keys(result.ring).sort()).toEqual([
      "base",
      "base-offset",
      "base-subtle",
      "base-subtle-offset",
      "danger",
      "danger-offset",
      "danger-subtle",
      "danger-subtle-offset"
    ]);
    expect(result.ring["base-offset"]).toMatchObject({ theme: "base" });
    expect(result.ring.base).toMatchObject({
      theme: "base",
      $value: [{ color: "#eeeeee14", spread: { value: 3, unit: "px" } }]
    });
    expect(result.ring["danger-offset"]).toMatchObject({
      theme: "danger",
      $value: [
        { color: "{color.surface-elevated}" },
        { color: "#33669926", spread: { value: 6, unit: "px" } }
      ]
    });
  });

  it("applies ring opacity by saturation and preserves offset masks", () => {
    const result = tamaguiPreprocessor({
      color: { ink: { secondary: colorToken("#336699") } },
      semantic: {
        ring: {
          neutral: {
            $type: "shadow",
            $value: { color: "#777777", offsetX: 0 }
          },
          saturated: {
            $type: "shadow",
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
          neutral: { $value: { color: "#77777714" } },
          saturated: { $value: { color: "#33669926" } },
          layered: {
            $value: [{ color: "#ff0000" }, { color: "#00ff0026" }]
          }
        },
        shadow: {
          regular: { $value: { color: "#336699" } }
        }
      }
    });
  });
});
