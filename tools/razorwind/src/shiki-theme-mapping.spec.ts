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

vi.mock("@razorwind/storybook/generate", () => ({
  default: (options: unknown = {}) => options
}));

vi.mock("@razorwind/tamagui/generate", () => ({
  default: (options: unknown = {}) => options
}));

vi.mock("@razorwind/shiki/generate", () => ({
  default: (options: unknown) => options
}));

type Token = { $value: string };
type MappedTheme = {
  colors: Record<string, string>;
  fg: string;
  name: string;
  settings: Array<{
    scope: string[];
    settings: { foreground: string };
  }>;
};
type ShikiPlugin = {
  mapTheme: (tokens: unknown) => MappedTheme | MappedTheme[];
};

const color = ($value: string): Token => ({ $value });

const semanticColors = (prefix: string) => ({
  color: {
    ink: {
      emphasis: color(`${prefix}-ink-emphasis`),
      body: color(`${prefix}-ink-body`),
      subtle: color(`${prefix}-ink-subtle`)
    },
    surface: {
      canvas: color(`${prefix}-surface-canvas`),
      sunken: color(`${prefix}-surface-sunken`)
    },
    link: color(`${prefix}-link`),
    hairline: color(`${prefix}-hairline`),
    required: color(`${prefix}-required`),
    accent: {
      brand: color(`${prefix}-accent-brand`),
      danger: color(`${prefix}-accent-danger`),
      warning: color(`${prefix}-accent-warning`),
      success: color(`${prefix}-accent-success`),
      info: color(`${prefix}-accent-info`),
      discovery: color(`${prefix}-accent-discovery`)
    },
    "on-accent": {
      base: color(`${prefix}-on-accent-base`),
      brand: color(`${prefix}-on-accent-brand`)
    },
    muted: { brand: color(`${prefix}-muted-brand`) }
  }
});

const setting = (
  theme: MappedTheme,
  scope: string
) =>
  theme.settings.find(candidate => candidate.scope.includes(scope))?.settings
    .foreground;

describe("Shiki theme mapping", () => {
  it("maps the latest semantic token roles for each named theme", async () => {
    const config = (await import("../../../razorwind.config")).default as {
      plugins: unknown[];
    };
    const shikiPlugin = config.plugins.find(
      (plugin): plugin is ShikiPlugin =>
        typeof plugin === "object" &&
        plugin !== null &&
        "mapTheme" in plugin &&
        typeof plugin.mapTheme === "function"
    );

    expect(shikiPlugin).toBeDefined();

    const dark = shikiPlugin!.mapTheme({
      theme: "dark",
      tokens: semanticColors("dark")
    }) as MappedTheme;
    const light = shikiPlugin!.mapTheme({
      theme: "light",
      tokens: semanticColors("light")
    }) as MappedTheme;

    expect(dark.fg).toBe("dark-ink-emphasis");
    expect(dark.colors).toMatchObject({
      "editor.background": "dark-surface-canvas",
      "editorCursor.foreground": "dark-link",
      "editor.selectionBackground": "dark-accent-brand",
      "editor.selectionForeground": "dark-on-accent-brand",
      "editor.inactiveSelectionBackground": "dark-surface-sunken",
      "editorIndentGuide.background1": "dark-hairline",
      "editorIndentGuide.activeBackground1": "dark-ink-subtle"
    });
    expect(setting(dark, "comment")).toBe("dark-ink-subtle");
    expect(setting(dark, "string")).toBe("dark-accent-success");
    expect(setting(dark, "constant")).toBe("dark-accent-warning");
    expect(setting(dark, "keyword")).toBe("dark-accent-brand");
    expect(setting(dark, "entity.name.function")).toBe("dark-accent-brand");
    expect(setting(dark, "entity.name.type")).toBe("dark-accent-discovery");
    expect(setting(dark, "entity.other.attribute-name")).toBe(
      "dark-accent-info"
    );
    expect(setting(dark, "invalid")).toBe("dark-accent-danger");

    expect(light.fg).toBe("light-ink-emphasis");
    expect(light.colors["editor.background"]).toBe("light-surface-canvas");
    expect(setting(light, "string")).toBe("light-accent-success");
  });

  it("resolves token aliases to literal colors", async () => {
    const config = (await import("../../../razorwind.config")).default as {
      plugins: unknown[];
    };
    const shikiPlugin = config.plugins.find(
      (plugin): plugin is ShikiPlugin =>
        typeof plugin === "object" &&
        plugin !== null &&
        "mapTheme" in plugin &&
        typeof plugin.mapTheme === "function"
    );
    const tokens = semanticColors("light");

    tokens.color.ink.subtle = color("{color.neutral.7}");
    Object.assign(tokens.color, {
      neutral: { 7: color("#959698") }
    });

    const light = shikiPlugin!.mapTheme({
      theme: "light",
      tokens
    }) as MappedTheme;

    expect(light.colors["editorLineNumber.foreground"]).toBe("#959698");
    expect(setting(light, "comment")).toBe("#959698");
  });
});
