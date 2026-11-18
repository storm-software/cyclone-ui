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

import { $, argv, chalk, echo } from "zx";

try {
  let base = argv.base;
  if (!base) {
    base = process.env.NX_BASE;
  }
  let head = argv.head;
  if (!head) {
    head = process.env.NX_HEAD;
  }
  if (!base && !head) {
    throw new Error(
      `Base and head arguments are required. Please provide them using the --base and --head flags.`
    );
  }

  await echo`${chalk.whiteBright(` 📦  Releasing workspace packages (Base tag: "${base}", Head tag: "${head}")`)}`;

  let proc = $`pnpm build`.timeout(`${30 * 60}s`);
  proc.stdout.on("data", data => {
    echo`${data}`;
  });
  let result = await proc;
  if (result.exitCode !== 0) {
    throw new Error(
      `An error occurred while building workspace packages: \n\n${result.message}\n`
    );
  }

  proc = $`pnpm exec storm-git release --base=${base} --head=${head}`.timeout(
    `${30 * 60}s`
  );
  proc.stdout.on("data", data => {
    echo`${data}`;
  });
  result = await proc;
  if (result.exitCode !== 0) {
    throw new Error(
      `An error occurred while releasing workspace packages: \n\n${result.message}\n`
    );
  }

  echo`${chalk.green(" ✔ Successfully released workspace packages")}`;
} catch (error) {
  echo`${chalk.red(error?.message ? error.message : "A failure occurred while releasing workspace packages")}`;

  process.exit(1);
}
