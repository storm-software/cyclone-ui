import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import add from "../../../src/commands/add/command";
import init from "../../../src/commands/init/command";
import {
  createConfig,
  readConfig,
  writeConfig
} from "../../../src/utilities/config";

vi.mock("shell-shock:console", () => ({ write: vi.fn(), success: vi.fn() }));
vi.mock("../../../src/utilities/registry", async importOriginal => ({
  ...(await importOriginal<object>()),
  registryClient: () => ({
    components: {
      get: {
        query: async () => ({
          name: "button",
          version: "1.0.0",
          dependencies: {},
          devDependencies: {},
          internalDependencies: [],
          files: [
            {
              name: "Button.tsx",
              content: '"use client";\nexport const Button = () => <button />;'
            }
          ]
        })
      }
    }
  })
}));

const directories: string[] = [];
async function project() {
  const root = await mkdtemp(join(tmpdir(), "cyclone-add-"));
  directories.push(root);
  return root;
}
afterEach(async () => {
  await Promise.all(
    directories.splice(0).map(root => rm(root, { recursive: true }))
  );
});

describe("RSC command options", () => {
  it("persists init's RSC choice and applies it to initial components", async () => {
    const cwd = await project();
    await init({ cwd, rsc: false, silent: true }, ["button"]);
    expect((await readConfig(cwd))?.rsc).toBe(false);
    expect(
      await readFile(join(cwd, "components/button/Button.tsx"), "utf8")
    ).toBe("\nexport const Button = () => <button />;");
  });

  it("uses an add override without persisting it as the project default", async () => {
    const cwd = await project();
    await writeConfig(cwd, createConfig({ rsc: true }));
    await add({ cwd, rsc: false, silent: true }, ["button"]);
    expect((await readConfig(cwd))?.rsc).toBe(true);
    expect(
      await readFile(join(cwd, "components/button/Button.tsx"), "utf8")
    ).toBe("\nexport const Button = () => <button />;");
  });

  it("previews transformed files without writing them", async () => {
    const cwd = await project();
    await writeConfig(cwd, createConfig({ rsc: true }));
    await add({ cwd, rsc: false, view: true }, ["button"]);
    const { write } = await import("shell-shock:console");
    expect(vi.mocked(write).mock.calls.at(-1)?.[0]).toContain(
      "\n\nexport const Button = () => <button />;"
    );
    await expect(
      readFile(join(cwd, "components/button/Button.tsx"), "utf8")
    ).rejects.toMatchObject({ code: "ENOENT" });
    expect((await readConfig(cwd))?.components).toEqual({});
  });
});
