#!/usr/bin/env tsx
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

import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { CycloneTheme } from "../src/create-flavor";
import { createStyle, REMOTE_GLYPHS_URL } from "../src/create-style";

const archiveUrl =
  process.argv[2] ||
  "pmtiles://https://public.storm-cdn.com/basemaps/tiles/data/monaco.pmtiles";
const outputDir = resolve(process.argv[3] || "__generated__");
const glyphsUrl =
  process.argv[4] || process.env.CYCLONE_GLYPHS_URL || REMOTE_GLYPHS_URL;

if (
  !archiveUrl?.startsWith("pmtiles://http://") &&
  !archiveUrl?.startsWith("pmtiles://https://")
) {
  console.error(
    "Usage: tsx scripts/generate.ts pmtiles://http://localhost:8000/tiles/data/monaco.pmtiles [output-dir] [glyphs-url-template]"
  );
  process.exit(1);
}

await mkdir(outputDir, { recursive: true });

for (const theme of ["light", "dark"] as CycloneTheme[]) {
  await writeFile(
    resolve(outputDir, `${theme}.json`),
    `${JSON.stringify(
      createStyle({ theme, archiveUrl, glyphsUrl }),
      null,
      2
    )}\n`
  );
}
