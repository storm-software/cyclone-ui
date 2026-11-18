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

/* eslint-disable unused-imports/no-unused-vars */

import { execFile } from "node:child_process";
import { mkdir, mkdtemp, readdir, rename, rm } from "node:fs/promises";
import { basename, dirname, extname, join } from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export async function generateWebfonts(ttfDir, outputDir) {
  const files = (await readdir(ttfDir))
    .filter(file => extname(file) === ".ttf")
    .sort();
  const staging = await mkdtemp(join(dirname(outputDir), ".webfonts-"));

  try {
    await Promise.all(
      files.map(file =>
        execFileAsync("fonttools", [
          "ttLib.woff2",
          "compress",
          join(ttfDir, file),
          "-o",
          join(staging, `${basename(file, ".ttf")}.woff2`)
        ])
      )
    );

    await rm(outputDir, { recursive: true, force: true });
    await rename(staging, outputDir);
  } catch (error) {
    await rm(staging, { recursive: true, force: true });
    throw error;
  }
}

export async function organizeFontOutputs(compiledDir, distDir, family) {
  const files = await readdir(compiledDir);
  for (const file of files) {
    if (!file.startsWith(`${family}-`) || !/\.(?:otf|ttf)$/.test(file)) {
      throw new Error(`Unexpected compiled font output: ${file}`);
    }
  }

  for (const format of ["otf", "ttf"]) {
    const directory = join(distDir, format);
    await rm(directory, { recursive: true, force: true });
    await mkdir(directory, { recursive: true });
    for (const file of files.filter(file => file.endsWith(`.${format}`))) {
      await rename(
        join(compiledDir, file),
        join(directory, file.slice(family.length + 1).replace("VF", "Variable"))
      );
    }
  }

  // Remove artifacts left by the previous flat layout after a successful build.
  for (const file of await readdir(distDir)) {
    if (file.startsWith(`${family}-`) && /\.(?:otf|ttf)$/.test(file)) {
      await rm(join(distDir, file));
    }
  }
}
