import type { NextConfig } from "next";
import { describe, expect, it } from "vitest";

import { withCycloneUI } from "../src/index";

describe("withCycloneUI", () => {
  it("preserves application caching settings and bundler overrides", () => {
    const config: NextConfig = {
      cacheComponents: true,
      partialPrefetching: true,
      cacheLife: { shared: { stale: 30, revalidate: 60, expire: 600 } },
      env: { APP_NAME: "example" },
      turbopack: {
        resolveExtensions: [".tsx", ".ts", ".js"],
        resolveAlias: { "react-native": "./native-web.ts", example: "./src" }
      }
    };

    const wrapped = withCycloneUI(config);

    expect(wrapped).toMatchObject({
      cacheComponents: true,
      partialPrefetching: true,
      cacheLife: { shared: { stale: 30, revalidate: 60, expire: 600 } },
      env: { TAMAGUI_TARGET: "web", APP_NAME: "example" },
      turbopack: {
        resolveExtensions: [".tsx", ".ts", ".js"],
        resolveAlias: {
          "react-native": "./native-web.ts",
          "react-native-svg": "@tamagui/react-native-svg",
          example: "./src"
        }
      }
    });
    expect(config.env).toEqual({ APP_NAME: "example" });
    expect(config.turbopack?.resolveAlias).toEqual({
      "react-native": "./native-web.ts",
      example: "./src"
    });
    expect(withCycloneUI({}).cacheComponents).toBeUndefined();
    expect(withCycloneUI({}).partialPrefetching).toBeUndefined();
  });

  it("resolves phase functions lazily with the original Next.js context", () => {
    let calls = 0;
    const context = { defaultConfig: { reactStrictMode: true } };
    const wrapped = withCycloneUI((phase, receivedContext) => {
      calls += 1;
      expect(receivedContext).toBe(context);
      return {
        ...receivedContext.defaultConfig,
        cacheComponents: phase === "phase-production-build"
      };
    });

    expect(calls).toBe(0);
    expect(wrapped("phase-production-build", context)).toMatchObject({
      cacheComponents: true,
      reactStrictMode: true,
      env: { TAMAGUI_TARGET: "web" }
    });
    expect(wrapped("phase-development-server", context)).toMatchObject({
      cacheComponents: false,
      env: { TAMAGUI_TARGET: "web" }
    });
    expect(calls).toBe(2);
  });

  it("waits for async phase configuration before extending it", async () => {
    const wrapped = withCycloneUI(async phase => ({
      cacheComponents: true,
      partialPrefetching: phase === "phase-production-build",
      env: { APP_NAME: "async" }
    }));

    await expect(
      wrapped("phase-production-build", { defaultConfig: {} })
    ).resolves.toMatchObject({
      cacheComponents: true,
      partialPrefetching: true,
      env: { TAMAGUI_TARGET: "web", APP_NAME: "async" }
    });
  });

  it("waits for a promised configuration before extending it", async () => {
    await expect(
      withCycloneUI(
        Promise.resolve({ cacheComponents: true, partialPrefetching: true })
      )
    ).resolves.toMatchObject({
      cacheComponents: true,
      partialPrefetching: true,
      env: { TAMAGUI_TARGET: "web" }
    });
  });
});
