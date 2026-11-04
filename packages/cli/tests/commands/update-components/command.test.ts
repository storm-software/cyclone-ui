import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import update from "../../../src/commands/update-components/command";
import { createConfig, writeConfig } from "../../../src/utilities/config";

vi.mock("shell-shock:console", () => ({
  write: vi.fn(),
  gray: (text: string) => `gray(${text})`,
  green: (text: string) => `green(${text})`,
  red: (text: string) => `red(${text})`,
  dim: (text: string) => `dim(${text})`
}));

vi.mock("../../../src/utilities/registry", async importOriginal => ({
  ...(await importOriginal<object>()),
  registryClient: () => ({
    components: {
      get: {
        query: async () => ({
          name: "button",
          version: "2.0.0",
          dependencies: {},
          devDependencies: {},
          internalDependencies: [],
          files: [{ name: "index.ts", content: "export const next = true;" }]
        })
      }
    }
  })
}));

const directories: string[] = [];

afterEach(async () => {
  await Promise.all(
    directories.splice(0).map(root => rm(root, { recursive: true, force: true }))
  );
});

async function installedProject() {
  const root = await mkdtemp(join(tmpdir(), "cyclone-update-"));
  directories.push(root);
  const config = createConfig();
  config.components.button = {
    version: "1.0.0",
    files: ["components/button/index.ts", "components/button/legacy.ts"]
  };
  await writeConfig(root, config);
  await mkdir(join(root, "components/button"), { recursive: true });
  await writeFile(
    join(root, "components/button/index.ts"),
    "export const next = false;"
  );
  await writeFile(
    join(root, "components/button/legacy.ts"),
    "export const old = true;"
  );
  return root;
}

describe("update components output", () => {
  it("colors file statuses and version changes, then deletes removed files", async () => {
    const cwd = await installedProject();
    await update({ cwd }, ["button"]);

    const { write } = await import("shell-shock:console");
    expect(vi.mocked(write).mock.calls.at(-1)?.[0]).toBe(
      [
        "button",
        "  red(1.0.0) dim(→) green(2.0.0)",
        "  green(overwrite) green(components/button/index.ts)",
        "  red(removed  ) red(components/button/legacy.ts)"
      ].join("\n")
    );
    await expect(
      readFile(join(cwd, "components/button/index.ts"), "utf8")
    ).resolves.toBe("export const next = true;");
    await expect(
      readFile(join(cwd, "components/button/legacy.ts"), "utf8")
    ).rejects.toMatchObject({ code: "ENOENT" });
  });

  it("previews a removal without deleting the file", async () => {
    const cwd = await installedProject();
    await update({ cwd, dryRun: true }, ["button"]);

    await expect(
      readFile(join(cwd, "components/button/legacy.ts"), "utf8")
    ).resolves.toBe("export const old = true;");
    await expect(
      readFile(join(cwd, "components/button/index.ts"), "utf8")
    ).resolves.toBe("export const next = false;");
  });
});
