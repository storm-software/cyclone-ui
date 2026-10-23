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
  it.each([
    [
      '"use client" /* keep license */;\nexport const value = 1;',
      " /* keep license */\nexport const value = 1;"
    ],
    [
      '"use client" // keep note\n;\nexport const value = 1;',
      " // keep note\n\nexport const value = 1;"
    ]
  ])(
    "preserves comments inside a removed directive",
    async (content, expected) => {
      const root = await temporaryDirectory();
      const registry = client({
        button: component("button", { files: [{ name: "index.ts", content }] })
      });
      const plan = await createInstallPlan(
        registry,
        createConfig({ rsc: false }),
        ["button"],
        { root }
      );
      expect(plan.files[0]!.content).toBe(expected);
    }
  );

  it("removes only client directives when RSC is explicitly disabled", async () => {
    const root = await temporaryDirectory();
    const config = { ...createConfig(), rsc: false };
    const source =
      "// License\r\n\"use strict\";\r\n'use client'; // boundary\r\nexport const Button = () => <button />;\r\n";
    const registry = client({
      button: component("button", {
        files: ["Button.tsx", "Other.tsx"].map(name => ({
          name,
          content: source
        }))
      })
    });
    const plan = await createInstallPlan(registry, config, ["button"], {
      root
    });
    for (const file of plan.files) {
      expect(file.content).toBe(
        '// License\r\n"use strict";\r\n // boundary\r\nexport const Button = () => <button />;\r\n'
      );
    }
    await applyInstallPlan(config, plan, { root });
    await expect(
      readFile(join(root, "components/button/Button.tsx"), "utf8")
    ).resolves.toBe(plan.files[0]!.content);
    const repeated = await createInstallPlan(registry, config, ["button"], {
      root
    });
    expect(repeated.files.map(file => file.status)).toEqual([
      "unchanged",
      "unchanged"
    ]);
  });

  it.each([undefined, true])(
    "preserves registry contents with rsc=%s",
    async rsc => {
      const root = await temporaryDirectory();
      const source =
        '/* License */\n"use client";\nexport const Button = () => <button />;\n';
      const registry = client({
        button: component("button", {
          files: [{ name: "Button.tsx", content: source }]
        })
      });
      const plan = await createInstallPlan(
        registry,
        { ...createConfig(), rsc },
        ["button"],
        { root }
      );
      expect(plan.files[0]!.content).toBe(source);
    }
  );

  it.each(["Button.tsx", "Button.jsx"])(
    "preserves unmarked %s when RSC is enabled",
    async name => {
      const root = await temporaryDirectory();
      const content =
        '/* License */\r\nimport { useState } from "react";\r\nexport function Button() { return <button />; }\r\n';
      const registry = client({
        button: component("button", { files: [{ name, content }] })
      });
      const config = createConfig({ rsc: true });
      const plan = await createInstallPlan(registry, config, ["button"], {
        root
      });
      expect(plan.files[0]!.content).toBe(content);
      await applyInstallPlan(config, plan, { root });
      const repeated = await createInstallPlan(registry, config, ["button"], {
        root
      });
      expect(repeated.files[0]!.status).toBe("unchanged");
    }
  );

  it.each([
    ["Server.tsx", '"use server";\nexport async function action() {}'],
    [
      "Cached.tsx",
      '"use cache";\nexport async function Cached() { return <div />; }'
    ],
    ["Private.tsx", '"use cache: private";\nexport async function Cached() {}'],
    ["Remote.tsx", '"use cache: remote";\nexport async function Cached() {}'],
    ["Action.tsx", 'export async function action() { "use server"; }'],
    [
      "InlineCache.tsx",
      'export async function Cached() { "use cache"; return <div />; }'
    ],
    ["helper.ts", "export const value = 1;"],
    ["README.md", "Documentation"]
  ])("does not invent a client boundary for %s", async (name, content) => {
    const root = await temporaryDirectory();
    const registry = client({
      button: component("button", { files: [{ name, content }] })
    });
    const plan = await createInstallPlan(
      registry,
      createConfig({ rsc: true }),
      ["button"],
      { root }
    );
    expect(plan.files[0]!.content).toBe(content);
  });

  it("keeps unmarked JSX unchanged for existing project configs", async () => {
    const root = await temporaryDirectory();
    const content = "export const Button = () => <button />;";
    const registry = client({
      button: component("button", { files: [{ name: "Button.tsx", content }] })
    });
    const plan = await createInstallPlan(registry, createConfig(), ["button"], {
      root
    });
    expect(plan.files[0]!.content).toBe(content);
  });

  it.each([
    [
      "actions.ts",
      '"use server";\nexport async function action() { "use server"; return "use client"; }'
    ],
    [
      "cache.ts",
      '"use cache";\nexport async function cached() { "use cache"; }'
    ],
    ["private.ts", '"use cache: private";\nexport async function cached() {}'],
    ["remote.ts", '"use cache: remote";\nexport async function cached() {}'],
    ["nested.ts", 'export function nested() { "use client"; }'],
    ["late.ts", 'import "react";\n"use client";'],
    ["value.ts", '"use client" + " value";'],
    ["README.md", '"use client";\nDocumentation'],
    ["styles.css", '/* "use client"; */\n.button {}'],
    ["types.d.ts", '"use client";\nexport type Button = {};']
  ])("preserves unrelated directives and files: %s", async (name, content) => {
    const root = await temporaryDirectory();
    const registry = client({
      button: component("button", { files: [{ name, content }] })
    });
    const plan = await createInstallPlan(
      registry,
      { ...createConfig(), rsc: false },
      ["button"],
      { root }
    );
    expect(plan.files[0]!.content).toBe(content);
  });

  it("applies an RSC override to dependencies without changing project config", async () => {
    const root = await temporaryDirectory();
    const config = { ...createConfig(), rsc: true };
    const files = [
      { name: "index.ts", content: '"use client";\nexport const value = 1;' }
    ];
    const registry = client({
      button: component("button", { files, internalDependencies: ["helpers"] }),
      helpers: component("helpers", { files })
    });
    const plan = await createInstallPlan(registry, config, ["button"], {
      root,
      dryRun: true,
      rsc: false
    });
    expect(plan.files.map(file => file.content)).toEqual([
      "\nexport const value = 1;",
      "\nexport const value = 1;"
    ]);
    expect(config.rsc).toBe(true);
  });

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
