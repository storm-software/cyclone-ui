import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  applyInstallPlan,
  createInstallPlan
} from "../../src/utilities/components";
import { createConfig } from "../../src/utilities/config";
import type { CycloneRegistryClient } from "../../src/utilities/registry";

const temporaryDirectories: string[] = [];

async function temporaryDirectory(): Promise<string> {
  const directory = await mkdtemp(join(tmpdir(), "cyclone-cli-"));
  temporaryDirectories.push(directory);
  return directory;
}

afterEach(async () => {
  await Promise.all(
    temporaryDirectories.splice(0).map(path => rm(path, { recursive: true }))
  );
});

function component(name: string, overrides: Record<string, unknown> = {}) {
  return {
    name,
    version: "1.0.0",
    release: "latest",
    description: `${name} component`,
    tags: [],
    dependencies: {},
    devDependencies: {},
    internalDependencies: [],
    files: [
      {
        name: "index.ts",
        content: `export const name = \"${name}\";`,
        updatedOn: new Date().toISOString()
      }
    ],
    ...overrides
  };
}

function client(fixtures: Record<string, ReturnType<typeof component>>) {
  return {
    components: {
      get: {
        query: vi.fn(async (name: string) => fixtures[name]!)
      }
    }
  } as unknown as CycloneRegistryClient;
}

describe("component installation", () => {
  it("resolves internal dependencies and records written files", async () => {
    const root = await temporaryDirectory();
    await writeFile(join(root, "package.json"), '{"dependencies":{}}\n');
    const config = createConfig();
    const registry = client({
      button: component("button", {
        internalDependencies: ["helpers"],
        dependencies: { react: "^19.0.0" }
      }),
      helpers: component("helpers")
    });

    const plan = await createInstallPlan(registry, config, ["button"], {
      root
    });
    await applyInstallPlan(config, plan, { root });

    expect(plan.components.map(item => item.name)).toEqual([
      "helpers",
      "button"
    ]);
    await expect(
      readFile(join(root, "components/button/index.ts"), "utf8")
    ).resolves.toContain("button");
    await expect(
      readFile(join(root, "components.json"), "utf8")
    ).resolves.toContain('"button"');
    await expect(
      readFile(join(root, "package.json"), "utf8")
    ).resolves.toContain('"react": "^19.0.0"');
  });

  it("rejects registry file paths that escape a component directory", async () => {
    const root = await temporaryDirectory();
    const config = createConfig();
    const registry = client({
      button: component("button", {
        files: [
          {
            name: "../../outside.ts",
            content: "unsafe",
            updatedOn: new Date().toISOString()
          }
        ]
      })
    });

    await expect(
      createInstallPlan(registry, config, ["button"], { root })
    ).rejects.toThrow("Refusing to write outside the project");
  });

  it("requires overwrite before replacing a changed local file", async () => {
    const root = await temporaryDirectory();
    const config = createConfig();
    const registry = client({ button: component("button") });
    const firstPlan = await createInstallPlan(registry, config, ["button"], {
      root
    });
    await applyInstallPlan(config, firstPlan, { root });
    await writeFile(join(root, "components/button/index.ts"), "local change");

    await expect(
      createInstallPlan(registry, config, ["button"], {
        root,
        dryRun: true
      })
    ).resolves.toMatchObject({
      files: [{ status: "overwrite" }]
    });

    await expect(
      createInstallPlan(registry, config, ["button"], { root })
    ).rejects.toThrow("--overwrite");
  });
});
