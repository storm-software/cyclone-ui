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

import { build } from "esbuild";
import { $, chalk, echo } from "zx";

try {
  echo`${chalk.whiteBright(" ⚙️  Bootstrapping the monorepo...")}`;

  await Promise.all([
    build({
      entryPoints: ["tools/razorwind/src/tokens.ts"],
      target: "node22",
      outdir: "dist/razorwind",
      tsconfig: "tools/razorwind/tsconfig.json",
      packages: "external",
      external: ["@razorwind/core"],
      logLevel: "info",
      bundle: true,
      minify: false,
      format: "esm",
      platform: "node"
    }).then(result => {
      if (result.errors.length > 0) {
        throw new Error(
          `An error occurred while building the Razorwind plugins: \n\n${result.errors.join("\n")}\n`
        );
      }

      echo`${chalk.green(" ✔ Completed Razorwind plugins build successfully!")}`;
    }),
    build({
      entryPoints: [
        "tools/nx/src/plugins/components.ts",
        "tools/nx/src/plugins/storybook.ts"
      ],
      target: "node22",
      outdir: "dist/nx-plugins",
      tsconfig: "tools/nx/tsconfig.json",
      packages: "external",
      external: [
        "@nx/*",
        "@storm-software/*",
        "@stryke/*",
        "@swc/*",
        "@tsdown/*",
        "defu",
        "glob",
        "nx",
        "nx/*"
      ],
      logLevel: "info",
      bundle: true,
      minify: false,
      format: "esm",
      platform: "node"
    }).then(result => {
      if (result.errors.length > 0) {
        throw new Error(
          `An error occurred while building the Nx plugins: \n\n${result.errors.join("\n")}\n`
        );
      }

      echo`${chalk.green(" ✔ Completed Nx plugins build successfully!")}`;
    })
  ]);

  let proc = $`pnpm nx reset --onlyDaemon`.timeout(`${2 * 60}s`);
  proc.stdout.on("data", data => {
    echo`${data}`;
  });
  let result = await proc;
  if (result.exitCode !== 0) {
    throw new Error(
      `An error occurred while resetting the Nx daemon process: \n\n${result.message}\n`
    );
  }

  proc = $`pnpm nx sync`.timeout(`${2 * 60}s`);
  proc.stdout.on("data", data => {
    echo`${data}`;
  });
  result = await proc;
  if (result.exitCode !== 0) {
    throw new Error(
      `An error occurred while syncing the Nx workspace: \n\n${result.message}\n`
    );
  }

  echo`${chalk.green(" ✔ Completed monorepo bootstrapping successfully!")}`;
} catch (error) {
  echo`${chalk.red(
    error?.message
      ? error.message
      : "A failure occurred while bootstrapping the monorepo"
  )}`;

  process.exit(1);
}
