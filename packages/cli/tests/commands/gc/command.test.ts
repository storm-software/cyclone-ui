import {
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  symlink,
  writeFile
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import gc from "../../../src/commands/gc/command";
import { createConfig, writeConfig } from "../../../src/utilities/config";

vi.mock("shell-shock:console", () => ({ write: vi.fn() }));
const { query } = vi.hoisted(() => ({ query: vi.fn() }));
vi.mock("../../../src/utilities/registry", async importOriginal => ({
  ...(await importOriginal<object>()),
  registryClient: () => ({ components: { get: { query } } })
}));

const directories: string[] = [];
beforeEach(() => {
  query.mockReset().mockResolvedValue({
    name: "button",
    version: "2.0.0",
    dependencies: {},
    devDependencies: {},
    internalDependencies: [],
    files: [{ name: "index.ts", content: "export const button = true;" }]
  });
});
afterEach(async () => {
  await Promise.all(
    directories
      .splice(0)
      .map(root => rm(root, { recursive: true, force: true }))
  );
});

async function project(
  files: unknown = ["components/button/index.ts"],
  path = "components"
) {
  const root = await mkdtemp(join(tmpdir(), "cyclone-gc-"));
  directories.push(root);
  const config = createConfig({ path });
  config.components.button = { version: "1.0.0", files: files as string[] };
  await writeConfig(root, config);
  await put(root, "components/button/index.ts", "local edit");
  await put(root, "components/button/legacy.ts", "old");
  await put(root, "components/obsolete/nested/old.ts", "old");
  await mkdir(join(root, "components/empty"));
  return root;
}
async function put(root: string, path: string, content: string) {
  await mkdir(dirname(join(root, path)), { recursive: true });
  await writeFile(join(root, path), content);
}

describe("gc", () => {
  it("removes untracked files, obsolete components and empty directories while preserving installed edits", async () => {
    const cwd = await project();
    query.mockRejectedValue(new Error("Registry unavailable"));
    const before = await readFile(join(cwd, "components.json"), "utf8");
    await gc({ cwd });
    expect(await readdir(join(cwd, "components"))).toEqual(["button"]);
    expect(await readdir(join(cwd, "components/button"))).toEqual(["index.ts"]);
    expect(
      await readFile(join(cwd, "components/button/index.ts"), "utf8")
    ).toBe("local edit");
    expect(await readFile(join(cwd, "components.json"), "utf8")).toBe(before);
  });

  it.each([undefined, [], [42], ["components/unknown.ts"]])(
    "reinstalls when the file list is unusable: %j",
    async files => {
      const cwd = await project(files === undefined ? null : files);
      if (files === undefined) {
        const config = createConfig();
        config.components.button = { version: "1.0.0" } as never;
        await writeConfig(cwd, config);
      }
      await gc({ cwd });
      expect(await readdir(join(cwd, "components"))).toEqual(["button"]);
      expect(
        await readFile(join(cwd, "components/button/index.ts"), "utf8")
      ).toBe("export const button = true;");
      const config = JSON.parse(
        await readFile(join(cwd, "components.json"), "utf8")
      );
      expect(config.components.button).toEqual({
        version: "2.0.0",
        files: ["components/button/index.ts"]
      });
    }
  );

  it("restores unchanged files after clearing the directory", async () => {
    const cwd = await project([]);
    await put(cwd, "components/button/index.ts", "export const button = true;");
    await gc({ cwd });
    expect(
      await readFile(join(cwd, "components/button/index.ts"), "utf8")
    ).toBe("export const button = true;");
  });

  it("preserves nested tracked files and cleans a custom directory", async () => {
    const cwd = await project();
    const config = createConfig({ path: "src/ui" });
    config.components.button = { files: ["src/ui/button/nested/index.ts"] };
    await writeConfig(cwd, config);
    await put(cwd, "src/ui/button/nested/index.ts", "keep");
    await put(cwd, "src/ui/button/nested/old.ts", "remove");
    await gc({ cwd });
    expect(await readdir(join(cwd, "src/ui/button/nested"))).toEqual([
      "index.ts"
    ]);
    expect(
      await readFile(join(cwd, "components/button/legacy.ts"), "utf8")
    ).toBe("old");
  });

  it("reinstalls dependencies when tracking is incomplete", async () => {
    const cwd = await project([]);
    query.mockImplementation(async (name: string) => ({
      name,
      version: "2.0.0",
      dependencies: {},
      devDependencies: {},
      internalDependencies: name === "button" ? ["text"] : [],
      files: [{ name: "index.ts", content: `export const ${name} = true;` }]
    }));
    await gc({ cwd });
    expect(await readdir(join(cwd, "components"))).toEqual(["button", "text"]);
    expect(await readFile(join(cwd, "components/text/index.ts"), "utf8")).toBe(
      "export const text = true;"
    );
  });

  it("reinstalls if a tracked file is missing", async () => {
    const cwd = await project();
    await rm(join(cwd, "components/button/index.ts"));
    await gc({ cwd });
    expect(
      await readFile(join(cwd, "components/button/index.ts"), "utf8")
    ).toBe("export const button = true;");
  });

  it("replaces a directory occupying an expected file path", async () => {
    const cwd = await project([]);
    await rm(join(cwd, "components/button/index.ts"));
    await mkdir(join(cwd, "components/button/index.ts"));
    await gc({ cwd });
    expect(
      await readFile(join(cwd, "components/button/index.ts"), "utf8")
    ).toBe("export const button = true;");
  });

  it("reinstalls a linked component without reading or changing its target", async () => {
    const cwd = await project([]);
    await rm(join(cwd, "components/button"), { recursive: true });
    await put(cwd, "outside/index.ts", "keep");
    await symlink(join(cwd, "outside"), join(cwd, "components/button"), "dir");
    await gc({ cwd });
    expect(await readFile(join(cwd, "outside/index.ts"), "utf8")).toBe("keep");
    expect(
      await readFile(join(cwd, "components/button/index.ts"), "utf8")
    ).toBe("export const button = true;");
  });

  it.each([false, true])(
    "previews cleanup without changing files (reinstall=%s)",
    async reinstall => {
      const cwd = await project(
        reinstall ? [] : ["components/button/index.ts"]
      );
      const before = await readFile(join(cwd, "components.json"), "utf8");
      await gc({ cwd, dryRun: true });
      expect(
        await readFile(join(cwd, "components/button/legacy.ts"), "utf8")
      ).toBe("old");
      expect(
        await readFile(join(cwd, "components/button/index.ts"), "utf8")
      ).toBe("local edit");
      expect(await readFile(join(cwd, "components.json"), "utf8")).toBe(before);
    }
  );

  it("keeps all files if registry resolution fails before a reinstall", async () => {
    const cwd = await project([]);
    query.mockRejectedValue(new Error("Registry unavailable"));
    await expect(gc({ cwd })).rejects.toThrow("Registry unavailable");
    expect(
      await readFile(join(cwd, "components/button/legacy.ts"), "utf8")
    ).toBe("old");
  });

  it.each([".", "../outside"])(
    "rejects an unsafe components directory: %s",
    async path => {
      const cwd = await project([], path);
      await expect(gc({ cwd })).rejects.toThrow();
      expect(
        await readFile(join(cwd, "components/button/legacy.ts"), "utf8")
      ).toBe("old");
    }
  );

  it("rejects a symlink in the components directory path", async () => {
    const cwd = await project([], "linked/components");
    await symlink(cwd, join(cwd, "linked"), "dir");
    await expect(gc({ cwd })).rejects.toThrow(/symbolic link/i);
    expect(
      await readFile(join(cwd, "components/button/legacy.ts"), "utf8")
    ).toBe("old");
  });

  it("removes untracked symlinks without traversing their targets", async () => {
    const cwd = await project();
    await put(cwd, "outside/keep.ts", "keep");
    await symlink(join(cwd, "outside"), join(cwd, "components/link"), "dir");
    await gc({ cwd });
    expect(await readFile(join(cwd, "outside/keep.ts"), "utf8")).toBe("keep");
    expect(await readdir(join(cwd, "components"))).toEqual(["button"]);
  });

  it("cleans the directory when no components are installed", async () => {
    const cwd = await project();
    await writeConfig(cwd, createConfig());
    await gc({ cwd });
    expect(await readdir(join(cwd, "components"))).toEqual([]);
  });
});
