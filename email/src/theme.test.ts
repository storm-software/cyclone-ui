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

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import { palettes } from "./theme.ts";

type Tokens = Record<string, { $value: string } & Record<string, unknown>>;

// The generated token files are CommonJS inside an ESM package, so they're
// evaluated directly instead of imported.
const loadColors = (mode: string): Tokens => {
  const module = { exports: {} as { color: Tokens } };
  runInNewContext(
    readFileSync(
      new URL(
        `../../packages/tokens/src/js/tokens-${mode}.js`,
        import.meta.url
      ),
      "utf8"
    ),
    { module }
  );

  return module.exports.color;
};

for (const [mode, palette] of Object.entries(palettes)) {
  test(`the ${mode} palette matches the generated tokens`, () => {
    const color = loadColors(mode);

    for (const [key, value] of Object.entries(palette)) {
      const [group, ...rest] = key.split("-");
      const token = rest.length
        ? (color[group!] as unknown as Tokens)[rest.join("-")]
        : color[key];

      assert.equal(value, token?.$value, key);
    }
  });
}
