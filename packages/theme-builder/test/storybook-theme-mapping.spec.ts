import { describe, expect, it, vi } from "vitest";

vi.mock("@razorwind/color-variants", () => ({
  default: () => ({ name: "color-variants" })
}));

vi.mock("@razorwind/core", () => ({
  defineConfig: <T>(config: T) => config
}));

vi.mock("@razorwind/core/plugin", () => ({
  definePlugin: <T>(plugin: T) => plugin
}));

vi.mock("@razorwind/css/generate", () => ({
  default: (options: unknown = {}) => options
}));

vi.mock("@razorwind/design-md/generate", () => ({
  default: (options: unknown = {}) => options
}));

vi.mock("@razorwind/docgen/generate", () => ({
  default: (options: unknown = {}) => options
}));

vi.mock("@razorwind/llms/generate", () => ({
  default: (options: unknown = {}) => options
}));

vi.mock("@razorwind/shadcn/generate", () => ({
  default: (options: unknown = {}) => options
}));

vi.mock("@razorwind/shiki/generate", () => ({
  default: (options: unknown = {}) => options
}));

vi.mock("@razorwind/storybook/generate", () => ({
  default: (options: unknown) => options
}));

vi.mock("@razorwind/tamagui/generate", () => ({
  default: (options: unknown = {}) => options
}));

type Token = { $value: string | number };
type StorybookPlugin = {
  outputPath: string;
  mapTheme: (tokens: unknown) => Record<string, Record<string, unknown>>;
};

const token = ($value: string | number): Token => ({ $value });

const semanticColors = (prefix: string) => ({
  color: {
    emphasis: token(`${prefix}-emphasis`),
    ink: token(`${prefix}-ink`),
    subtlest: token(`${prefix}-subtlest`),
    subtle: token(`${prefix}-subtle`),
    outline: token(`${prefix}-outline`),
    hairline: token(`${prefix}-hairline`),
    canvas: token(`${prefix}-canvas`),
    elevated: token(`${prefix}-elevated`),
    floating: token(`${prefix}-floating`),
  },
  radius: { md: token(6) }
});

describe("Storybook theme mapping", () => {
  it("maps the latest semantic token roles for both Storybook themes", async () => {
    const config = (await import("../../../razorwind.config")).default as {
      plugins: unknown[];
    };
    const storybookPlugin = config.plugins.find(
      (plugin): plugin is StorybookPlugin =>
        typeof plugin === "object" &&
        plugin !== null &&
        "outputPath" in plugin &&
        plugin.outputPath === "apps/storybook/src" &&
        "mapTheme" in plugin &&
        typeof plugin.mapTheme === "function"
    );

    expect(storybookPlugin).toBeDefined();

    const themes = storybookPlugin!.mapTheme({
      dark: semanticColors("dark"),
      light: semanticColors("light")
    });

    expect(themes.dark).toMatchObject({
      base: "dark",
      colorPrimary: "dark-emphasis",
      colorSecondary: "dark-subtlest",
      textColor: "dark-emphasis",
      textInverseColor: "dark-canvas",
      appBg: "dark-canvas",
      appContentBg: "dark-canvas",
      appPreviewBg: "dark-canvas",
      appBorderColor: "dark-outline",
      appBorderRadius: 6,
      barTextColor: "dark-ink",
      barSelectedColor: "dark-emphasis",
      barBg: "dark-floating",
      barHoverColor: "dark-subtlest",
      buttonBg: "dark-elevated",
      buttonBorder: "dark-outline",
      inputBg: "dark-elevated",
      inputBorder: "dark-outline",
      inputTextColor: "dark-ink",
      inputBorderRadius: 6,
      booleanBg: "dark-elevated",
      booleanSelectedBg: "dark-subtlest"
    });
    expect(themes.light.colorPrimary).toBe("light-emphasis");
    expect(themes.light.textColor).toBe("light-emphasis");
    expect(themes.light.appBg).toBe("light-canvas");
  });
});
