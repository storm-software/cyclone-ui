/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

/* eslint-disable unused-imports/no-unused-vars, test/no-import-node-test */

import assert from "node:assert/strict";
import {
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  writeFile
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { organizeFontOutputs } from "./build-output.mjs";

test("compiled font files are grouped by format with family-free names", async () => {
  const root = await mkdtemp(join(tmpdir(), "font-output-"));
  const compiled = join(root, "compiled");
  const dist = join(root, "dist");
  try {
    await mkdir(compiled);
    await mkdir(dist);
    await mkdir(join(dist, "pbf"));
    await writeFile(join(dist, "pbf", "keep.txt"), "glyphs");
    for (const name of [
      "StormSans-Bold.otf",
      "StormSans-BoldItalic.otf",
      "StormSans-Bold.ttf",
      "StormSans-Italic-Variable.ttf"
    ])
      await writeFile(join(compiled, name), name);

    await organizeFontOutputs(compiled, dist, "StormSans");

    assert.deepEqual(await readdir(join(dist, "otf")), [
      "Bold.otf",
      "BoldItalic.otf"
    ]);
    assert.deepEqual(await readdir(join(dist, "ttf")), [
      "Bold.ttf",
      "Italic-Variable.ttf"
    ]);
    assert.equal(
      await readFile(join(dist, "pbf", "keep.txt"), "utf8"),
      "glyphs"
    );
    assert.deepEqual(await readdir(compiled), []);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
