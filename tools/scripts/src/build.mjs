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
  let configuration = argv.configuration;
  if (!configuration) {
    if (argv.prod) {
      configuration = "production";
    } else if (argv.dev) {
      configuration = "development";
    } else {
      configuration = "production";
    }
  }

  let filter = argv.filter;
  if (!filter) {
    if (argv.cli) {
      filter = "cli";
    } else if (argv.plugins) {
      filter = "plugins";
    } else {
      filter = "all";
    }
  }

  echo`${chalk.whiteBright(` 🏗️  Building the monorepo in ${configuration} mode...`)}`;

  let proc = $`pnpm bootstrap`.timeout(`${1 * 60}s`);
  proc.stdout.on("data", data => {
    echo`${data}`;
  });
  let result = await proc;
  if (!result.ok) {
    throw new Error(
      `An error occurred while bootstrapping the monorepo: \n\n${result.message}\n`
    );
  }

  proc =
    $`pnpm nx run-many --target=build --projects="packages/*" --configuration=${configuration} --outputStyle=dynamic-legacy --parallel=5`.timeout(
      `${6 * 60}s`
    );
  proc.stdout.on("data", data => {
    echo`${data}`;
  });
  result = await proc;
  if (!result.ok) {
    throw new Error(
      `An error occurred while building the Cyclone UI Nx package in ${configuration} mode: \n\n${result.message}\n`
    );
  }

  proc = $`pnpm nx reset --only-daemon`.timeout(`${2 * 60}s`);
  proc.stdout.on("data", data => {
    echo`${data}`;
  });
  result = await proc;
  if (!result.ok) {
    throw new Error(
      `An error occurred while resetting the Nx daemon process: \n\n${result.message}\n`
    );
  }

  if (filter === "plugin" || filter === "cli" || filter === "all") {
    if (filter === "plugin") {
      proc =
        $`pnpm nx run-many --target=build --projects="plugin-*" --configuration=${configuration} --outputStyle=dynamic-legacy --parallel=5`.timeout(
          `${15 * 60}s`
        );
      proc.stdout.on("data", data => {
        echo`${data}`;
      });
      result = await proc;
      if (!result.ok) {
        throw new Error(
          `An error occurred while building the monorepo's plugins and presets in ${configuration} mode: \n\n${result.message}\n`
        );
      }
    } else if (filter === "cli" || filter === "all") {
      //   proc = $`pnpm nx reset --only-daemon`.timeout(`${2 * 60}s`);
      //   proc.stdout.on("data", data => {
      //     echo`${data}`;
      //   });
      //   result = await proc;
      //   if (!result.ok) {
      //     throw new Error(
      //       `An error occurred while resetting the Nx daemon process: \n\n${result.message}\n`
      //     );
      //   }

      //   proc = $`pnpm bootstrap`.timeout(`${2 * 60}s`);
      //   proc.stdout.on("data", data => {
      //     echo`${data}`;
      //   });
      //   result = await proc;
      //   if (!result.ok) {
      //     throw new Error(
      //       `An error occurred while bootstrapping the monorepo: \n\n${result.message}\n`
      //     );
      //   }

      //   proc = $`pnpm nx run cli:build:${
      //     configuration
      //   } --outputStyle=dynamic-legacy --parallel=5`.timeout(`${15 * 60}s`);
      //   proc.stdout.on("data", data => {
      //     echo`${data}`;
      //   });
      //   result = await proc;
      //   if (!result.ok) {
      //     throw new Error(
      //       `An error occurred while building the CLI application in ${configuration} mode: \n\n${result.message}\n`
      //     );
      //   }

      if (filter === "all") {
        proc =
          $`pnpm nx run-many --target=build --exclude="monorepo" --configuration=${configuration} --outputStyle=dynamic-legacy --parallel=5`.timeout(
            `${20 * 60}s`
          );
        proc.stdout.on("data", data => {
          echo`${data}`;
        });
        result = await proc;
        if (!result.ok) {
          throw new Error(
            `An error occurred while building the monorepo in ${configuration} mode: \n\n${result.message}\n`
          );
        }
      }
    }
  }

  echo`${chalk.green(` ✔ Successfully built the monorepo in ${configuration} mode!`)}`;
} catch (error) {
  echo`${chalk.red(error?.message ? error.message : "A failure occurred while building the monorepo")}`;

  process.exit(1);
}
