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
    ink: {
      emphasis: token(`${prefix}-ink-emphasis`),
      body: token(`${prefix}-ink-body`)
    },
    surface: {
      canvas: token(`${prefix}-surface-canvas`),
      elevated: token(`${prefix}-surface-elevated`),
      floating: token(`${prefix}-surface-floating`)
    },
    hairline: token(`${prefix}-hairline`),
    accent: { brand: token(`${prefix}-accent-brand`) },
    muted: { base: token(`${prefix}-muted-base`) },
    "on-accent": { base: token(`${prefix}-on-accent-base`) }
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
        plugin.outputPath === "packages/themes/src/storybook" &&
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
      colorPrimary: "dark-accent-brand",
      colorSecondary: "dark-muted-base",
      textColor: "dark-ink-emphasis",
      textInverseColor: "dark-on-accent-base",
      appBg: "dark-surface-canvas",
      appContentBg: "dark-surface-elevated",
      appPreviewBg: "dark-surface-canvas",
      appBorderColor: "dark-hairline",
      appBorderRadius: 6,
      barTextColor: "dark-ink-body",
      barSelectedColor: "dark-accent-brand",
      barBg: "dark-surface-floating",
      barHoverColor: "dark-muted-base",
      buttonBg: "dark-surface-elevated",
      buttonBorder: "dark-hairline",
      inputBg: "dark-surface-elevated",
      inputBorder: "dark-hairline",
      inputTextColor: "dark-ink-body",
      inputBorderRadius: 6,
      booleanBg: "dark-surface-elevated",
      booleanSelectedBg: "dark-muted-base"
    });
    expect(themes.light.colorPrimary).toBe("light-accent-brand");
    expect(themes.light.textColor).toBe("light-ink-emphasis");
    expect(themes.light.appBg).toBe("light-surface-canvas");
  });
});
