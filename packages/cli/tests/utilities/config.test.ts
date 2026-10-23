import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createConfig,
  readConfig,
  writeConfig
} from "../../src/utilities/config";

const directories: string[] = [];
async function project() {
  const root = await mkdtemp(join(tmpdir(), "cyclone-config-"));
  directories.push(root);
  return root;
}
afterEach(async () => {
  await Promise.all(
    directories.splice(0).map(root => rm(root, { recursive: true }))
  );
});

describe("RSC configuration", () => {
  it.each([true, false])("persists rsc=%s", async rsc => {
    const root = await project();
    await writeConfig(root, createConfig({ rsc }));
    expect((await readConfig(root))?.rsc).toBe(rsc);
  });

  it("accepts existing configs without an RSC setting", async () => {
    const root = await project();
    await writeConfig(root, createConfig());
    expect(await readConfig(root)).toEqual(createConfig());
  });

  it.each(["false", null, 0, {}])(
    "rejects invalid RSC setting %s",
    async rsc => {
      const root = await project();
      await writeFile(
        join(root, "components.json"),
        JSON.stringify({ ...createConfig(), rsc })
      );
      await expect(readConfig(root)).rejects.toThrow("configuration");
    }
  );
});
