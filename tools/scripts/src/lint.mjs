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
  echo`${chalk.whiteBright(" 📋  Linting the monorepo...")}`;

  let filesArg = "--all";
  let filesList = "";
  if (argv._ && argv._.length > 0) {
    filesList = argv._.join(" ");
    filesArg = `--files ${argv._.join(",")}`;
  }

  let proc =
    $`pnpm exec eslint --fix --quiet --color --config ./eslint.config.mjs --cache --cache-location ./node_modules/.cache/eslint/cache.json --concurrency auto ${
      filesList || "packages/**"
    }`.timeout(`${30 * 60}s`);
  proc.stdout.on("data", data => {
    echo`${data}`;
  });
  let result = await proc;
  if (result.exitCode !== 0) {
    throw new Error(
      `An error occurred while running ESLint on the monorepo: \n\n${result.message}\n`
    );
  }

  proc =
    $`pnpm nx run-many --target=lint ${filesArg} --exclude=monorepo --outputStyle=dynamic-legacy --parallel=5`.timeout(
      `${30 * 60}s`
    );
  proc.stdout.on("data", data => {
    echo`${data}`;
  });
  result = await proc;
  if (result.exitCode !== 0) {
    throw new Error(
      `An error occurred while linting the monorepo: \n\n${result.message}\n`
    );
  }

  proc = $`pnpm exec storm-lint all --skip-cspell --skip-circular-deps`.timeout(
    `${30 * 60}s`
  );
  proc.stdout.on("data", data => {
    echo`${data}`;
  });
  result = await proc;
  if (result.exitCode !== 0) {
    throw new Error(
      `An error occurred while running \`storm-lint\` on the monorepo: \n\n${result.message}\n`
    );
  }

  echo`${chalk.green(" ✔ Successfully linted the monorepo's files")}`;
} catch (error) {
  echo`${chalk.red(error?.message ? error.message : "A failure occurred while linting the monorepo")}`;

  process.exit(1);
}
