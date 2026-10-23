import { loadTamagui } from "@tamagui/static/loadTamagui";
import { resolve } from "node:path";
import { beforeEach, describe, expect, it, vi } from "vitest";
import buildTokens from "../../../src/commands/build-tokens/command";
import handler from "../../../src/commands/build/command";

vi.mock("../../../src/commands/build-tokens/command", () => ({
  default: vi.fn()
}));
vi.mock("@tamagui/static/loadTamagui", () => ({
  loadTamagui: vi.fn()
}));
vi.mock("shell-shock:console", () => ({ success: vi.fn() }));

describe("build command", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(loadTamagui).mockResolvedValue({ tamaguiConfig: {} } as never);
  });

  it("generates tokens before compiling the default config", async () => {
    await handler({});

    expect(buildTokens).toHaveBeenCalledWith({
      cwd: process.cwd(),
      output: "tamagui.config.ts"
    });
    expect(loadTamagui).toHaveBeenCalledWith(
      {
        root: process.cwd(),
        config: resolve("tamagui.config.ts"),
        outputCSS: resolve("tamagui.generated.css"),
        components: ["@tamagui/core"],
        platform: "web"
      },
      true
    );
    expect(vi.mocked(buildTokens).mock.invocationCallOrder[0]).toBeLessThan(
      vi.mocked(loadTamagui).mock.invocationCallOrder[0]!
    );
  });

  it("compiles the generated config at a custom output path relative to cwd", async () => {
    await handler({
      cwd: "fixtures/project with spaces",
      config: "razorwind.custom.ts",
      tokens: "tokens/**/*.json",
      output: "generated/custom.config.ts"
    });

    expect(buildTokens).toHaveBeenCalledWith({
      cwd: resolve("fixtures/project with spaces"),
      config: "razorwind.custom.ts",
      tokens: "tokens/**/*.json",
      output: "generated/custom.config.ts"
    });
    expect(loadTamagui).toHaveBeenCalledWith(
      expect.objectContaining({
        root: resolve("fixtures/project with spaces"),
        config: resolve(
          "fixtures/project with spaces/generated/custom.config.ts"
        ),
        outputCSS: resolve("fixtures/project with spaces/tamagui.generated.css")
      }),
      true
    );
  });

  it("does not compile when token generation fails", async () => {
    const error = new Error("Invalid tokens");
    vi.mocked(buildTokens).mockRejectedValueOnce(error);
    await expect(handler({})).rejects.toBe(error);
    expect(loadTamagui).not.toHaveBeenCalled();
  });

  it("propagates compiler failures", async () => {
    const error = new Error("Invalid Tamagui config");
    vi.mocked(loadTamagui).mockRejectedValueOnce(error);
    await expect(handler({})).rejects.toBe(error);
  });

  it("rejects an empty compiler result", async () => {
    vi.mocked(loadTamagui).mockResolvedValueOnce(null);
    await expect(handler({})).rejects.toThrow("Unable to build Tamagui config");
  });
});
