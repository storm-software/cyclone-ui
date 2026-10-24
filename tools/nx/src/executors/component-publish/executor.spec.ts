import type { ExecutorContext } from "@nx/devkit";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import runExecutor from "./executor";

const mocks = vi.hoisted(() => ({ upload: vi.fn(), fatal: vi.fn() }));
vi.mock(
  "@storm-software/cloudflare-tools/executors/r2-upload-publish/executor",
  () => ({ default: mocks.upload })
);
vi.mock("@storm-software/config-tools/get-config", () => ({
  getWorkspaceConfig: async () => ({})
}));
vi.mock("@storm-software/config-tools/logger/console", () => ({
  writeInfo: vi.fn(),
  writeSuccess: vi.fn(),
  writeFatal: mocks.fatal
}));

const roots: string[] = [];
afterEach(async () => {
  vi.clearAllMocks();
  await Promise.all(
    roots.splice(0).map(root => rm(root, { recursive: true, force: true }))
  );
});

async function workspace() {
  const root = await mkdtemp(join(tmpdir(), "cyclone-publish-"));
  roots.push(root);
  await writeFile(
    join(root, "pnpm-workspace.yaml"),
    'catalog:\n  react: "^19.0.0"\n  typescript: "^6.0.0"\ncatalogs:\n  ui:\n    tamagui: "3.0.0"\n'
  );
  for (const name of ["button", "label"]) {
    await mkdir(join(root, `components/${name}/src/nested`), {
      recursive: true
    });
    await writeFile(
      join(root, `components/${name}/package.json`),
      JSON.stringify({
        name: `@cyclone-ui/${name}`,
        version: "1.2.3",
        description: name,
        dependencies:
          name === "button"
            ? {
                "@cyclone-ui/label": "workspace:*",
                "@cyclone-ui/helpers": "workspace:^",
                tamagui: "catalog:ui"
              }
            : {},
        peerDependencies: { react: "catalog:" },
        devDependencies: { typescript: "catalog:" }
      })
    );
    await writeFile(
      join(root, `components/${name}/src/index.ts`),
      `export * from "./nested/${name}";`
    );
    await writeFile(
      join(root, `components/${name}/src/nested/${name}.tsx`),
      name === "button"
        ? '/* -------------------------------------------------------------------\n\n Component source banner\n\n ------------------------------------------------------------------- */\n\n"use client";\n// This comment is part of the component source.\nimport { Label } from "@cyclone-ui/label";\nexport { Label };\nexport { helper } from "@cyclone-ui/helpers";'
        : 'export const Label = "label";'
    );
    await writeFile(
      join(root, `components/${name}/src/preview.stories.tsx`),
      "throw new Error('story');"
    );
    await writeFile(
      join(root, `components/${name}/src/spec.test.ts`),
      "throw new Error('test');"
    );
  }
  await mkdir(join(root, "packages/helpers"), { recursive: true });
  await writeFile(
    join(root, "packages/helpers/package.json"),
    JSON.stringify({ name: "@cyclone-ui/helpers", version: "2.4.0" })
  );
  const projects = Object.fromEntries(
    ["button", "label"].map(name => [
      name,
      { name, root: `components/${name}`, sourceRoot: `components/${name}/src` }
    ])
  );
  projects.helpers = {
    name: "helpers",
    root: "packages/helpers",
    sourceRoot: "packages/helpers/src"
  };
  return {
    root,
    context: {
      root,
      projectName: "button",
      projectsConfigurations: { version: 2, projects }
    } as ExecutorContext
  };
}

describe("public component publishing", () => {
  it("bootstraps every catalog item and isolates prerelease aliases from latest", async () => {
    const { context } = await workspace();
    let phase = 0;
    mocks.upload.mockImplementation(async options => {
      if (phase++ === 0) {
        for (const name of ["button", "label"]) {
          const item = JSON.parse(
            await readFile(
              join(options.path, `tags/next/components/${name}.json`),
              "utf8"
            )
          );
          expect(item).toMatchObject({
            name,
            version: "1.2.3",
            release: "next"
          });
          await expect(
            readFile(join(options.path, `components/${name}.json`))
          ).rejects.toThrow();
        }
      } else {
        const catalog = JSON.parse(
          await readFile(join(options.path, "tags/next/registry.json"), "utf8")
        );
        expect(
          catalog.items.map((item: { name: string }) => item.name)
        ).toEqual(["button", "label"]);
      }
      return { success: true };
    });
    expect(await runExecutor({ all: true, tag: "next" }, context)).toEqual({
      success: true
    });
    expect(phase).toBe(2);
  });

  it("uploads self-contained versioned items before the discovery catalog without deleting shared objects", async () => {
    const { context } = await workspace();
    const items: Record<string, unknown>[] = [];
    const catalog: Record<string, unknown>[] = [];
    const stagingPaths: string[] = [];
    mocks.upload.mockImplementation(async options => {
      expect(options).toMatchObject({
        bucketId: "storm-public",
        bucketPath: "cyclone-ui/registry",
        clean: false,
        writeMetaJson: false,
        dryRun: true
      });
      stagingPaths.push(options.path);
      if (items.length === 0) {
        items.push(
          JSON.parse(
            await readFile(
              join(options.path, "components/button/1.2.3.json"),
              "utf8"
            )
          )
        );
        expect(
          JSON.parse(
            await readFile(join(options.path, "components/button.json"), "utf8")
          )
        ).toEqual(items[0]);
      } else {
        catalog.push(
          JSON.parse(
            await readFile(join(options.path, "registry.json"), "utf8")
          )
        );
      }
      return { success: true };
    });
    expect(await runExecutor({ dryRun: true, clean: true }, context)).toEqual({
      success: true
    });
    expect(items[0]).toMatchObject({
      name: "button",
      version: "1.2.3",
      type: "registry:component",
      dependencies: [
        "@cyclone-ui/helpers@^2.4.0",
        "react@^19.0.0",
        "tamagui@3.0.0"
      ],
      registryDependencies: ["@cyclone-ui/label"]
    });
    expect(
      (items[0]!.files as { path: string; content: string }[]).map(
        file => file.path
      )
    ).toEqual(["index.ts", "nested/button.tsx"]);
    expect(catalog[0]).toMatchObject({
      name: "cyclone-ui",
      items: [
        { name: "button", version: "1.2.3", release: "latest" },
        { name: "label", version: "1.2.3", release: "latest" }
      ]
    });
    for (const path of stagingPaths)
      await expect(readFile(join(path, "registry.json"))).rejects.toThrow();
  });

  it("prepares component files for local installation before uploading", async () => {
    const { context } = await workspace();
    let content: string | undefined;
    mocks.upload.mockImplementation(async options => {
      if (mocks.upload.mock.calls.length === 1) {
        const item = JSON.parse(
          await readFile(
            join(options.path, "components/button/1.2.3.json"),
            "utf8"
          )
        ) as { files: { path: string; content: string }[] };
        content = item.files.find(
          file => file.path === "nested/button.tsx"
        )?.content;
      }
      return { success: true };
    });

    expect(await runExecutor({ dryRun: true }, context)).toEqual({
      success: true
    });
    expect(content).toBe(
      '"use client";\n// This comment is part of the component source.\nimport { Label } from "../../label";\nexport { Label };\nexport { helper } from "@cyclone-ui/helpers";'
    );
  });

  it("publishes the email components as one item with their theme stylesheets", async () => {
    const { root, context } = await workspace();
    await mkdir(join(root, "email/src/components"), { recursive: true });
    await mkdir(join(root, "email/src/templates"), { recursive: true });
    await mkdir(join(root, "packages/tokens/src/tailwindcss"), {
      recursive: true
    });
    await writeFile(
      join(root, "email/package.json"),
      JSON.stringify({
        name: "@cyclone-ui/email",
        version: "0.1.0",
        private: true,
        dependencies: { react: "catalog:" }
      })
    );
    await writeFile(
      join(root, "email/src/components/Button.tsx"),
      'import { cx } from "../theme";'
    );
    await writeFile(
      join(root, "email/src/theme.ts"),
      'import light from "../../packages/tokens/src/tailwindcss/tokens-light.css?raw";'
    );
    await writeFile(join(root, "email/src/css.d.ts"), "declare module;");
    await writeFile(join(root, "email/src/templates/welcome.tsx"), "");
    await writeFile(
      join(root, "packages/tokens/src/tailwindcss/tokens-light.css"),
      "@theme {}"
    );
    context.projectName = "email";
    context.projectsConfigurations!.projects.email = {
      name: "email",
      root: "email",
      sourceRoot: "email/src"
    };

    let item: { files: { path: string; content: string }[] } | undefined;
    mocks.upload.mockImplementation(async options => {
      if (!item) {
        item = JSON.parse(
          await readFile(join(options.path, "components/email.json"), "utf8")
        );
        expect(
          JSON.parse(
            await readFile(
              join(options.path, "components/email/0.1.0.json"),
              "utf8"
            )
          )
        ).toEqual(item);
      }
      return { success: true };
    });

    expect(await runExecutor({ dryRun: true }, context)).toEqual({
      success: true
    });
    expect(item).toMatchObject({
      name: "email",
      type: "registry:block",
      version: "0.1.0",
      dependencies: ["react@^19.0.0"],
      registryDependencies: []
    });
    expect(
      Object.fromEntries(item!.files.map(f => [f.path, f.content]))
    ).toEqual({
      "components/Button.tsx": 'import { cx } from "../theme";',
      "css.d.ts": "declare module;",
      "theme.ts": 'import light from "./tailwindcss/tokens-light.css?raw";',
      "tailwindcss/tokens-light.css": "@theme {}"
    });
  });

  it("does not update discovery after an upload failure", async () => {
    const { context } = await workspace();
    mocks.upload.mockResolvedValue({ success: false });
    expect(await runExecutor({}, context)).toEqual({ success: false });
    expect(mocks.upload).toHaveBeenCalledTimes(1);
  });
});
