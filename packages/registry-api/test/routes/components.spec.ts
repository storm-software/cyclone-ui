import type { R2Object, R2ObjectBody } from "@cloudflare/workers-types";
import { describe, expect, it, vi } from "vitest";
import type { Context } from "../../src/context";
import { router } from "../../src/router";
import type { ComponentMeta, RegistryStorage } from "../../src/types";

function object(key: string, uploaded: string): R2Object {
  return { key, uploaded: new Date(uploaded) } as R2Object;
}

function body(value: ComponentMeta | string): R2ObjectBody {
  return {
    json: vi.fn(async () => value),
    text: vi.fn(async () =>
      typeof value === "string" ? value : JSON.stringify(value)
    )
  } as unknown as R2ObjectBody;
}

function meta(version: string): ComponentMeta {
  return {
    name: "button",
    version,
    release: "latest",
    description: "A button.",
    tags: ["form"],
    dependencies: {},
    devDependencies: {},
    internalDependencies: []
  };
}

function context(
  objects: R2Object[],
  contents: Record<string, R2ObjectBody>
): Context {
  return {
    version: undefined,
    storage: {
      list: vi.fn(async () => ({
        objects,
        truncated: false,
        delimitedPrefixes: []
      })),
      get: vi.fn(async (key: string) => contents[key] ?? null)
    } as unknown as RegistryStorage
  } as Context;
}

describe("components router", () => {
  it("lists only the newest uploaded version of each component", async () => {
    const oldMeta = "registry/components/button/1.0.0/meta.json";
    const newMeta = "registry/components/button/2.0.0/meta.json";
    const caller = router.createCaller(
      context(
        [
          object(oldMeta, "2026-01-01T00:00:00Z"),
          object(newMeta, "2026-02-01T00:00:00Z")
        ],
        { [oldMeta]: body(meta("1.0.0")), [newMeta]: body(meta("2.0.0")) }
      )
    );

    await expect(caller.components.list()).resolves.toMatchObject([
      { name: "button", version: "2.0.0" }
    ]);
  });

  it("returns files only from the newest component version", async () => {
    const oldMeta = "registry/components/button/1.0.0/meta.json";
    const oldFile = "registry/components/button/1.0.0/index.ts";
    const newMeta = "registry/components/button/2.0.0/meta.json";
    const newFile = "registry/components/button/2.0.0/index.ts";
    const caller = router.createCaller(
      context(
        [
          object(oldMeta, "2026-01-01T00:00:00Z"),
          object(oldFile, "2026-01-01T00:00:00Z"),
          object(newMeta, "2026-02-01T00:00:00Z"),
          object(newFile, "2026-02-01T00:00:00Z")
        ],
        {
          [oldMeta]: body(meta("1.0.0")),
          [oldFile]: body("old"),
          [newMeta]: body(meta("2.0.0")),
          [newFile]: body("new")
        }
      )
    );

    await expect(caller.components.get("button")).resolves.toMatchObject({
      version: "2.0.0",
      files: [{ name: "index.ts", content: "new" }]
    });
  });
});
