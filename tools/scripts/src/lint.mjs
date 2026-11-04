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

import { existsSync } from "node:fs";
import { $, argv, chalk, echo } from "zx";

async function run(proc) {
  proc.stdout.on("data", data => {
    echo`${data}`;
  });
  const result = await proc.timeout(`${30 * 60}s`);
  if (result.exitCode !== 0) {
    throw new Error(`Lint command failed: ${result.message}`);
  }
}

try {
  echo`${chalk.whiteBright(" 📋  Linting the monorepo...")}`;

  // `--files a b c` parses as `{ files: "a", _: ["b", "c"] }`
  const files = [argv.files, argv._]
    .flat()
    .filter(file => typeof file === "string" && file);
  // The shared Lefthook config passes --files. Explicit file lists stay local
  // unless --full requests the affected project graph and dependency checks.
  const staged =
    argv.staged === true ||
    (argv.full !== true && (argv.files !== undefined || files.length > 0));
  const existingFiles = staged ? files.filter(file => existsSync(file)) : files;
  const eslintFiles = staged
    ? existingFiles.filter(file =>
        /\.(?:[cm]?[jt]sx?|json[5c]?|ya?ml|mdx|html|css|[ps]css|sass|less|graphql|gql|svg|xml|astro)$/i.test(
          file
        )
      )
    : files;
  const markdownFiles = staged
    ? existingFiles.filter(file => /\.(?:md|mdx|markdown)$/i.test(file))
    : [];

  const nxArgs =
    files.length > 0
      ? ["affected", `--files=${files.join(",")}`]
      : ["run-many"];

  if (!staged || eslintFiles.length > 0) {
    await run(
      $`pnpm exec eslint --fix --quiet --max-warnings=-1 --color --config ./eslint.config.mjs --cache --cache-location ./node_modules/.cache/eslint/cache.json --concurrency auto --no-error-on-unmatched-pattern ${
        eslintFiles.length > 0 ? eslintFiles : "packages/**"
      }`
    );
  }

  if (markdownFiles.length > 0) {
    // ':' makes paths literal, including names containing glob characters.
    await run(
      $`pnpm exec markdownlint-cli2 --config node_modules/@storm-software/markdownlint/config/recommended.markdownlint-cli2.jsonc --fix --no-globs ${markdownFiles.map(file => `:${file}`)}`
    );
  }

  if (!staged) {
    await run(
      $`pnpm nx ${nxArgs} --target=lint --exclude=monorepo --outputStyle=dynamic-legacy --parallel=5`
    );
  }

  // Use the original list so deleted manifests also trigger workspace checks.
  const checkPackages =
    !staged ||
    files.some(file =>
      /(?:^|\/)(?:package\.json|pnpm-workspace\.ya?ml|pnpm-lock\.ya?ml|package-lock\.json|npm-shrinkwrap\.json|yarn\.lock|bun\.lockb?|lerna\.json)$/.test(
        file
      )
    );
  const checkActions =
    !staged || files.some(file => /^\.github\/.*\.ya?ml$/.test(file));
  if (checkPackages || checkActions) {
    const skips = [
      ...(!checkPackages ? ["--skip-deps-version", "--skip-manypkg"] : []),
      ...(!checkActions ? ["--skip-actions-up"] : [])
    ];
    // The CLI uses Zod 4 while registry-api uses Zod 3. Maps retains Node 22
    // types while other packages use Node 25.
    await run(
      $`pnpm exec storm-lint all --skip-cspell --skip-circular-deps ${skips} --ignore-deps-version zod @types/node`
    );
  }

  echo`${chalk.green(" ✔ Successfully linted the monorepo's files")}`;
} catch (error) {
  echo`${chalk.red(error?.message ? error.message : "A failure occurred while linting the monorepo")}`;

  process.exit(1);
}
