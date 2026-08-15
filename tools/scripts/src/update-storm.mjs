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

try {
  await echo`${chalk.whiteBright(" 🔄 Updating the workspace's Storm Software dependencies and re-linking workspace packages...")}`;

  // 1) Update @storm-software/*, @stryke/*, and @shell-shock/* packages to the latest version
  await echo`${chalk.whiteBright("Checking for storm-software, stryke, and shell-shock updates...")}`;
  let proc = $`pnpm exec storm-pnpm update --all`.timeout(`${8 * 60}s`);
  proc.stdout.on("data", data => echo`${data}`);
  let result = await proc;
  if (result.exitCode !== 0) {
    throw new Error(
      `An error occurred while updating "storm-software", "stryke", and "shell-shock" packages:\n\n${result.message}\n`
    );
  }

  // 2) Dedupe all workspace dependencies
  proc = $`pnpm dedupe`.timeout(`${30 * 60}s`);
  proc.stdout.on("data", data => echo`${data}`);
  result = await proc;
  if (result.exitCode !== 0) {
    throw new Error(
      `An error occurred while deduplicating workspace dependencies:\n\n${result.message}\n`
    );
  }

  // 3) Ensure workspace:* links are up to date
  proc = $`pnpm update --recursive --workspace`.timeout(`${8 * 60}s`);
  proc.stdout.on("data", data => echo`${data}`);
  result = await proc;
  if (result.exitCode !== 0) {
    throw new Error(
      `An error occurred while refreshing workspace links:\n\n${result.message}\n`
    );
  }

  // 4) Install git hooks to ensure that the correct versions of the CLI and other tools are used when running git commands
  proc = $`pnpm exec storm-git prepare`.timeout(`${8 * 60}s`);
  proc.stdout.on("data", data => echo`${data}`);
  result = await proc;
  if (result.exitCode !== 0) {
    throw new Error(
      `An error occurred while installing git hooks:\n\n${result.message}\n`
    );
  }

  echo`${chalk.green(" ✔ Successfully updated Storm Software package dependencies and re-linked workspace packages")}\n\n`;
} catch (error) {
  echo`${chalk.red(
    error?.message ??
      "A failure occurred while updating storm-software, stryke, and shell-shock dependency packages"
  )}`;
  process.exit(1);
}
