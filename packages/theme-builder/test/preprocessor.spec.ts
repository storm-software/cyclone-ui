import { describe, expect, it } from "vitest";

import { tamaguiPreprocessor } from "../src/preprocessor";

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
  it("treats any color group with a primary token as a theme unless excluded", () => {
    const result = tamaguiPreprocessor({
      color: {
        custom: { primary: colorToken("#336699") },
        shadows: { primary: colorToken("#336699") },
        unthemed: { secondary: colorToken("#336699") }
      }
    }) as any;

    expect(result.color.custom.primary.theme).toBe("custom");
    expect(result.color.custom["on-primary"].$value).toBe("#FAFAFA");
    expect(result.color.custom["primary-active"]).toBeDefined();
    expect(result.ring.custom.theme).toBe("custom");
    expect(result.color.shadows).not.toHaveProperty("on-primary");
    expect(result.color.shadows).not.toHaveProperty("primary-active");
    expect(result.ring).not.toHaveProperty("shadows");
    expect(result.color.unthemed).not.toHaveProperty("on-primary");
    expect(result.ring).not.toHaveProperty("unthemed");
  });

  it("generates missing on-primary text colors for theme color groups", () => {
    const result = tamaguiPreprocessor({
      color: {
        danger: { primary: colorToken("#336699") },
        warning: { primary: colorToken("#ffee99") }
      }
    }) as any;

    expect(result.color.danger["on-primary"]).toMatchObject({
      $value: "#FAFAFA",
      $description:
        "Generated text and icon color on danger primary backgrounds"
    });
    expect(result.color.warning["on-primary"].$value).toBe("#151518");
  });

  it("generates missing secondary backgrounds from the parent theme", () => {
    const lightDanger = "#336699";
    const darkDanger = "#99ccff";
    const result = tamaguiPreprocessor({
      light: {
        color: {
          $description: "The light theme colors",
          danger: { primary: colorToken(lightDanger) }
        }
      },
      dark: {
        color: {
          $description: "The dark theme colors",
          danger: { primary: colorToken(darkDanger) }
        }
      }
    }) as any;
    const light = result.light.color.danger.secondary;
    const dark = result.dark.color.danger.secondary;

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
      contrastRatio(
        light.$value,
        result.light.color.danger["on-secondary"].$value
      )
    ).toBeGreaterThanOrEqual(7.25);
  });

  it("preserves explicit companions and skips root colors", () => {
    const result = tamaguiPreprocessor({
      color: {
        $description: "The light theme colors",
        emphasis: colorToken("#336699"),
        info: {
          primary: colorToken("#336699"),
          "on-primary": colorToken("#f0f0f0"),
          secondary: colorToken("#abcdef")
        }
      }
    }) as any;

    expect(result.color.info["on-primary"]).toMatchObject({
      $value: "#f0f0f0",
      theme: "info"
    });
    expect(result.color.info.secondary.$value).toBe("#abcdef");
    expect(result.color.info["on-secondary"].$value).toBe("#151518");
    expect(result.color).not.toHaveProperty("on-emphasis");
    expect(result.color).not.toHaveProperty("emphasis-active");
  });

  it("preserves the status hue when generated colors require gamut mapping", () => {
    const danger = "#ff0000";
    const result = tamaguiPreprocessor({
      light: {
        color: {
          $description: "The light theme colors",
          danger: { primary: colorToken(danger) }
        }
      },
      dark: {
        color: {
          $description: "The dark theme colors",
          danger: { primary: colorToken(danger) }
        }
      }
    }) as any;

    for (const color of [
      result.light.color.danger.secondary.$value,
      result.dark.color.danger.secondary.$value
    ]) {
      expect(
        hueDistance(oklchHue(color), oklchHue(danger))
      ).toBeLessThanOrEqual(1.5);
    }
  });

  it("resolves primary references before generating companions", () => {
    const result = tamaguiPreprocessor({
      palette: { red: colorToken("#336699") },
      light: {
        color: {
          $description: "The light theme colors",
          danger: { primary: colorToken("{palette.red}") }
        }
      }
    }) as any;

    expect(result.light.color.danger["on-primary"].$value).toBe("#FAFAFA");
    expect(result.light.color.danger.secondary.$value).toMatch(
      /^#[0-9a-f]{6}$/
    );
  });

  it("derives low-saturation states from the contrast primitive and scales saturated colors", () => {
    const color = {
      base: { primary: colorToken("#777777") },
      danger: { primary: colorToken("#336699") }
    };
    const result = tamaguiPreprocessor({
      dark: { color: { $description: "The dark theme colors", ...color } },
      light: { color: { $description: "The light theme colors", ...color } }
    }) as any;
    const dark = result.dark.color;
    const light = result.light.color;

    expect({
      darkActive: dark.base["primary-active"].$value,
      lightActive: light.base["primary-active"].$value,
      darkActiveDescription: dark.base["primary-active"].$description,
      darkInactive: dark.base["primary-inactive"].$description,
      darkDanger: dark.danger["primary-active"].$description,
      lightDanger: light.danger["primary-active"].$description,
      dangerInactive: dark.danger["primary-inactive"].$description
    }).toEqual({
      darkActive: "#ffffff",
      lightActive: "#0c0c0d",
      darkActiveDescription: "active state at dark contrast primitive",
      darkInactive: "inactive state at 40% darker",
      darkDanger: "active state at 25% brighter",
      lightDanger: "active state at 25% darker",
      dangerInactive: "inactive state at 20% darker"
    });
  });

  it("shifts hovered colors near the contrast primitive toward the middle", () => {
    const result = tamaguiPreprocessor({
      dark: {
        color: {
          $description: "The dark theme colors",
          base: { primary: colorToken("#f1f1f1") }
        }
      },
      light: {
        color: {
          $description: "The light theme colors",
          base: { primary: colorToken("#1f1f21") }
        }
      }
    }) as any;
    const dark = result.dark.color.base;
    const light = result.light.color.base;

    expect({
      darkHovered: dark["primary-hovered"].$description,
      lightHovered: light["primary-hovered"].$description,
      darkActive: dark["primary-active"].$value,
      lightActive: light["primary-active"].$value
    }).toEqual({
      darkHovered: "hovered state at 25% darker",
      lightHovered: "hovered state at 25% lighter",
      darkActive: "#ffffff",
      lightActive: "#000000"
    });
    expect(relativeLuminance(dark["primary-hovered"].$value)).toBeLessThan(
      relativeLuminance("#f1f1f1")
    );
    expect(relativeLuminance(light["primary-hovered"].$value)).toBeGreaterThan(
      relativeLuminance("#1f1f21")
    );
  });

  it("increases hairline active strength", () => {
    const result = tamaguiPreprocessor({
      color: { hairline: colorToken("#333333") }
    }) as any;
    const saturated = tamaguiPreprocessor({
      color: { hairline: colorToken("#336699") }
    }) as any;

    expect({
      hairline: result.color["hairline-active"].$description,
      hairlineSaturated: saturated.color["hairline-active"].$description
    }).toEqual({
      hairline: "active state at 80% brighter",
      hairlineSaturated: "active state at 40% brighter"
    });
    expect(result.color["hairline-active"].group).toBe("hairline");
  });

  it("generates hovered, active, inactive, and disabled states only for target colors", () => {
    const result = tamaguiPreprocessor({
      color: {
        sunken: { ...colorToken("#111111"), group: "background" },
        canvas: { ...colorToken("#222222"), group: "background" },
        emphasis: { ...colorToken("#f5f5f5"), group: "foreground" },
        ink: { ...colorToken("#777777"), group: "foreground" },
        subtle: { ...colorToken("#777777"), group: "foreground" },
        subtlest: colorToken("#777777"),
        hairline: colorToken("#777777"),
        base: {
          primary: colorToken("#f5f5f5"),
          secondary: colorToken("#777777")
        },
        danger: {
          primary: colorToken("#ff0000"),
          "on-primary": colorToken("#ffffff"),
          secondary: colorToken("#330000")
        },
        backdrop: colorToken("#00000066"),
        data: { red: { emphasis: colorToken("#555555") } }
      }
    }) as any;
    const states = ["hovered", "active", "inactive", "disabled"];

    for (const group of [result.color.base, result.color.danger]) {
      for (const key of ["primary", "secondary"]) {
        for (const state of states) {
          expect(group).toHaveProperty(`${key}-${state}`);
        }
      }
      expect(group).not.toHaveProperty("on-primary-active");
      expect(group).not.toHaveProperty("on-secondary-active");
    }
    for (const state of states) {
      for (const key of [
        "hairline",
        "emphasis",
        "ink",
        "subtle",
        "sunken",
        "canvas"
      ]) {
        expect(result.color).toHaveProperty(`${key}-${state}`);
      }
    }
    expect(result.color["ink-active"].group).toBe("foreground");

    for (const key of ["subtlest", "backdrop"]) {
      expect(result.color).toHaveProperty(key);
      expect(result.color).not.toHaveProperty(`${key}-active`);
    }
    expect(result.color.data.red).not.toHaveProperty("emphasis-active");
  });

  it("does not overwrite explicit state colors", () => {
    const result = tamaguiPreprocessor({
      color: {
        hairline: colorToken("#336699"),
        "hairline-active": colorToken("#fedcba"),
        danger: {
          primary: colorToken("#336699"),
          "primary-active": colorToken("#abcdef")
        }
      }
    }) as any;

    expect(result.color["hairline-active"].$value).toBe("#fedcba");
    expect(result.color.danger["primary-active"].$value).toBe("#abcdef");
  });

  it("skips theme color groups whose primary is not a color", () => {
    const result = tamaguiPreprocessor({
      color: {
        danger: {
          primary: {
            $type: "shadow",
            $value: { color: "#336699", offsetX: 0 }
          }
        }
      }
    }) as any;

    expect(result.color.danger).not.toHaveProperty("primary-active");
    expect(result.color.danger).not.toHaveProperty("on-primary");
    expect(result.color.danger.primary.$value.color).toBe("#336699");
  });

  it("desaturates colored disabled variants and fades them over the disabled base", () => {
    const result = tamaguiPreprocessor({
      color: { danger: { primary: colorToken("#ff000080") } }
    }) as any;

    expect(result.color.danger["primary-disabled"]).toMatchObject({
      $description:
        "disabled state at 85% saturation, 35% over oklch(0.3839 0.0045 286.26)",
      $value: expect.stringMatching(/^#[0-9a-f]{6}$/)
    });
  });

  it("assigns the group name as theme and group to theme color tokens", () => {
    const result = tamaguiPreprocessor({
      color: {
        $description: "The dark theme colors",
        emphasis: colorToken("#eeeeee"),
        hairline: colorToken("#777777"),
        base: {
          primary: colorToken("#eeeeee"),
          "on-primary": colorToken("#111111"),
          secondary: { ...colorToken("#444444"), theme: "custom" }
        },
        warning: { primary: colorToken("#ffee99") }
      }
    }) as any;
    const { base, warning } = result.color;

    expect(result.color.emphasis.theme).toBeUndefined();
    expect(result.color.hairline.theme).toBeUndefined();
    expect(base.primary).toMatchObject({
      $value: "#eeeeee",
      theme: "base",
      group: "base"
    });
    expect(base["on-primary"]).toMatchObject({
      $value: "#111111",
      theme: "base"
    });
    expect(base["primary-active"].theme).toBe("base");
    expect(base.secondary.theme).toBe("custom");
    for (const key of [
      "primary",
      "on-primary",
      "secondary",
      "on-secondary",
      "secondary-active",
      "primary-inactive"
    ]) {
      expect(warning[key]).toMatchObject({
        theme: "warning",
        group: "warning"
      });
    }
  });

  it("generates focus rings for theme color groups", () => {
    const result = tamaguiPreprocessor({
      color: {
        elevated: { ...colorToken("#222222"), group: "background" },
        emphasis: colorToken("#eeeeee"),
        base: { primary: colorToken("#eeeeee") },
        danger: { primary: colorToken("#336699") }
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
      $value: [{ color: "#eeeeee1a", spread: { value: 3, unit: "px" } }]
    });
    expect(result.ring["danger-offset"]).toMatchObject({
      theme: "danger",
      $value: [
        { color: "{color.elevated}" },
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
          neutral: { $value: { color: "#7777771a" } },
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
