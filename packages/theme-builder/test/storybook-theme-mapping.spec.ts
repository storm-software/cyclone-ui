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
    primary: token(`${prefix}-primary`),
    secondary: token(`${prefix}-secondary`),
    tertiary: token(`${prefix}-tertiary`),
    border: token(`${prefix}-border`),
    "surface-canvas": token(`${prefix}-surface-canvas`),
    "surface-elevated": token(`${prefix}-surface-elevated`),
    "surface-floating": token(`${prefix}-surface-floating`)
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
      colorPrimary: "dark-primary",
      colorSecondary: "dark-tertiary",
      textColor: "dark-primary",
      textInverseColor: "dark-surface-canvas",
      appBg: "dark-surface-canvas",
      appContentBg: "dark-surface-elevated",
      appPreviewBg: "dark-surface-canvas",
      appBorderColor: "dark-border",
      appBorderRadius: 6,
      barTextColor: "dark-secondary",
      barSelectedColor: "dark-primary",
      barBg: "dark-surface-floating",
      barHoverColor: "dark-tertiary",
      buttonBg: "dark-surface-elevated",
      buttonBorder: "dark-border",
      inputBg: "dark-surface-elevated",
      inputBorder: "dark-border",
      inputTextColor: "dark-secondary",
      inputBorderRadius: 6,
      booleanBg: "dark-surface-elevated",
      booleanSelectedBg: "dark-tertiary"
    });
    expect(themes.light.colorPrimary).toBe("light-primary");
    expect(themes.light.textColor).toBe("light-primary");
    expect(themes.light.appBg).toBe("light-surface-canvas");
  });
});
