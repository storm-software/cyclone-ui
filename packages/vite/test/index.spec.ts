import type { Plugin, UserConfig } from "vite";
import { beforeEach, describe, expect, it, vi } from "vitest";

const createTamaguiPlugins = vi.fn((_options: Record<string, unknown>) => ({
  plugins: [{ name: "tamagui" }],
  loader: {}
}));
vi.mock("@tamagui/vite-plugin", () => ({ createTamaguiPlugins }));

const { cycloneUI } = await import("../src/index");

const cyclonePlugin = (options?: Parameters<typeof cycloneUI>[0]) =>
  cycloneUI(options)[0] as Plugin;

const tamaguiOptions = () => createTamaguiPlugins.mock.lastCall![0];

async function resolveConfig(plugin: Plugin) {
  const hook = plugin.config as (
    config: UserConfig,
    env: object
  ) => Promise<UserConfig>;
  return hook.call({}, {}, { command: "build", mode: "production" });
}

describe("cycloneUI", () => {
  beforeEach(() => createTamaguiPlugins.mockClear());

  it("leaves Tamagui CSS unlayered by default", async () => {
    const plugin = cyclonePlugin();

    expect((await resolveConfig(plugin)).define).toEqual({
      "process.env.TAMAGUI_TARGET": '"web"'
    });
    expect(plugin.transformIndexHtml).toBeUndefined();
    expect(plugin.transform).toBeUndefined();
    expect(tamaguiOptions()).toEqual({
      config: "@cyclone-ui/tokens/tamagui",
      components: ["@tamagui/core"]
    });
  });

  it("puts Tamagui CSS in a layer below Tailwind utilities", async () => {
    const plugin = cyclonePlugin({ tailwind: true });
    const { wrapExtractedCSS } = tamaguiOptions() as {
      wrapExtractedCSS: (css: string) => string;
    };

    expect((await resolveConfig(plugin)).define).toMatchObject({
      "process.env.TAMAGUI_CSS_LAYER": '"tamagui"'
    });
    expect(wrapExtractedCSS("._p-1{padding:1px}")).toBe(
      "@layer tamagui {\n._p-1{padding:1px}\n}"
    );
    expect(wrapExtractedCSS("")).toBe("");
    expect((plugin.transformIndexHtml as () => unknown)()).toEqual([
      {
        tag: "style",
        attrs: { "data-precedence": "default" },
        children: "@layer theme, base, tamagui, components, utilities;",
        injectTo: "head-prepend"
      }
    ]);
  });

  it("layers Tamagui's reset stylesheet", () => {
    const transform = cyclonePlugin({ tailwind: true }).transform as (
      code: string,
      id: string
    ) => { code: string } | undefined;

    expect(
      transform("html{}", "/app/node_modules/@tamagui/core/reset.css?direct")
    ).toEqual({ code: "@layer tamagui {\nhtml{}\n}", map: null });
    expect(transform("html{}", "/app/src/index.css")).toBeUndefined();
  });

  it("keeps explicit Tamagui options", () => {
    cyclonePlugin({ tailwind: true, components: ["tamagui"] });

    expect(tamaguiOptions().components).toEqual(["tamagui"]);
  });
});
