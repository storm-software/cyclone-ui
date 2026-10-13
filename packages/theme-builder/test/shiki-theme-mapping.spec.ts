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
    emphasis: color(`${prefix}-emphasis`),
    ink: color(`${prefix}-ink`),
    subtle: color(`${prefix}-subtle`),
    hairline: color(`${prefix}-hairline`),
    canvas: color(`${prefix}-canvas`),
    sunken: color(`${prefix}-sunken`),
    danger: { primary: color(`${prefix}-danger`) },
    warning: { primary: color(`${prefix}-warning`) },
    success: { primary: color(`${prefix}-success`) },
    info: { primary: color(`${prefix}-info`) },
    discovery: { primary: color(`${prefix}-discovery`) }
  } as Record<string, unknown>
});

const setting = (theme: MappedTheme, scope: string) =>
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

    expect(dark.fg).toBe("dark-emphasis");
    expect(dark.colors).toMatchObject({
      "editor.background": "dark-canvas",
      "editorCursor.foreground": "dark-info",
      "editor.selectionBackground": "dark-emphasis",
      "editor.selectionForeground": "dark-canvas",
      "editor.inactiveSelectionBackground": "dark-sunken",
      "editorIndentGuide.background1": "dark-hairline",
      "editorIndentGuide.activeBackground1": "dark-subtle"
    });
    expect(setting(dark, "comment")).toBe("dark-subtle");
    expect(setting(dark, "string")).toBe("dark-success");
    expect(setting(dark, "constant")).toBe("dark-warning");
    expect(setting(dark, "keyword")).toBe("dark-info");
    expect(setting(dark, "entity.name.function")).toBe("dark-info");
    expect(setting(dark, "entity.name.type")).toBe("dark-discovery");
    expect(setting(dark, "entity.other.attribute-name")).toBe("dark-info");
    expect(setting(dark, "invalid")).toBe("dark-danger");

    expect(light.fg).toBe("light-emphasis");
    expect(light.colors["editor.background"]).toBe("light-canvas");
    expect(setting(light, "string")).toBe("light-success");
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

    tokens.color.subtle = color("{color.neutral.7}");
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
