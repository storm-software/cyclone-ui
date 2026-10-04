#!/usr/bin/env zx
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

import { $, chalk, echo } from "zx";

// Compiles the Storm Sans designspaces into `./dist` (relative to this file):
// `StormSans[-Italic]-VF.ttf` and `StormSans-<Style>.{otf,ttf}`. Requires
// `fontmake` and `ttfautohint` on the PATH (both provided by `devenv shell`).
//
// fontmake's `-o` flag does NOT append: `-o variable -o otf -o ttf` parses as
// `-o ttf` only, so all formats are passed to a single `-o`. `variable` is
// incompatible with `-i`, so the variable and static builds run as separate
// invocations. `-a` (ttfautohint) hints the static TTFs only: ttfautohint does
// not support variable fonts and has no effect on OTF output.
const designspaces = ["StormSans.designspace", "StormSans-Italic.designspace"];

const $$ = $({ cwd: import.meta.dirname, verbose: true });

try {
  echo`${chalk.whiteBright(" 🔨  Building the Storm Sans font...")}`;

  await Promise.all(
    designspaces.flatMap(designspace => [
      $$`fontmake -m ${designspace} -o variable --output-dir dist`,
      $$`fontmake -m ${designspace} -o otf ttf -i -a --output-dir dist`
    ])
  );

  echo`${chalk.green(" ✔ Successfully built the Storm Sans font!")}`;
} catch (error) {
  echo`${chalk.red(error?.message ? error.message : "A failure occurred while building the Storm Sans font")}`;

  process.exit(1);
}
