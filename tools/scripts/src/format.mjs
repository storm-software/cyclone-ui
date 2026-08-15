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
  echo`${chalk.whiteBright(" 🎨  Formatting the monorepo...")}`;

  let files = "";
  if (argv._ && argv._.length > 0) {
    files = `--files ${argv._.join(" ")}`;
  }

  let proc =
    $`pnpm exec storm-git readme --templates="tools/readme-templates" --project=monorepo`.timeout(
      `${30 * 60}s`
    );
  proc.stdout.on("data", data => {
    echo`${data}`;
  });
  let result = await proc;
  if (result.exitCode !== 0) {
    throw new Error(
      `An error occurred while formatting the workspace's README file: \n\n${result.message}\n`
    );
  }

  proc =
    $`pnpm nx run-many --target=format --all --exclude=monorepo --outputStyle=dynamic-legacy --parallel=5`.timeout(
      `${30 * 60}s`
    );
  proc.stdout.on("data", data => {
    echo`${data}`;
  });
  result = await proc;
  if (result.exitCode !== 0) {
    throw new Error(
      `An error occurred while formatting the monorepo: \n\n${result.message}\n`
    );
  }

  proc =
    $`pnpm nx format:write ${files} --sort-root-tsconfig-paths --all`.timeout(
      `${30 * 60}s`
    );
  proc.stdout.on("data", data => {
    echo`${data}`;
  });
  result = await proc;
  if (result.exitCode !== 0) {
    throw new Error(
      `An error occurred while running \`nx format:write\` on the monorepo: \n\n${result.message}\n`
    );
  }

  echo`${chalk.green(" ✔ Successfully formatted the monorepo's files")}`;
} catch (error) {
  echo`${chalk.red(error?.message ? error.message : "A failure occurred while formatting the monorepo")}`;

  process.exit(1);
}
