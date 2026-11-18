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

/**
 * Writes `src/<Name>Illustration.tsx` for every illustration source: the
 * figures ported from Hairline in `sources/`, and the skill's two examples.
 * Each goes through the skill's `build.mjs`, which also draws its static
 * images in Node and fails when the illustration cannot draw without a page.
 *
 *   node ./scripts/illustrations.ts
 */

import { execFileSync } from "node:child_process";
import {
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const PACKAGE = fileURLToPath(new URL("..", import.meta.url));
const SKILL = join(PACKAGE, "../../skills/cyclone-ui-illustration");
/* the license header, as the package's index has it */
const INDEX = readFileSync(join(PACKAGE, "src/index.ts"), "utf8");
const HEADER = INDEX.slice(0, INDEX.indexOf("\nexport ") + 1);

const sources = [join(PACKAGE, "sources"), join(SKILL, "examples")].flatMap(
  dir =>
    readdirSync(dir)
      .filter(f => f.endsWith(".js"))
      .map(f => join(dir, f))
);

const out = mkdtempSync(join(tmpdir(), "illustrations-"));
try {
  for (const source of sources) {
    execFileSync(
      process.execPath,
      [
        join(SKILL, "build.mjs"),
        source,
        "--out",
        out,
        "--import",
        "./create-illustration"
      ],
      { stdio: ["ignore", "ignore", "inherit"] }
    );
  }
  for (const file of readdirSync(out).filter(f =>
    f.endsWith("Illustration.tsx")
  )) {
    writeFileSync(
      join(PACKAGE, "src", file),
      `${HEADER}${readFileSync(join(out, file), "utf8")}`
    );
    console.log(`src/${file}`);
  }
} finally {
  rmSync(out, { recursive: true, force: true });
}
