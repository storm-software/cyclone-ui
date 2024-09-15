#!/usr/bin/env node
/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import {
  exitWithError,
  exitWithSuccess,
  handleProcess,
  loadStormConfig,
  writeFatal,
  writeInfo,
  writeSuccess
} from "@storm-software/config-tools";
import { readJsonSync } from "fs-extra";
import { join } from "node:path";
import { register as registerTsConfigPaths } from "tsconfig-paths";
import { createProgram } from "../src/cli";

const run = async () => {
  const config = await loadStormConfig();
  try {
    writeInfo("🌀 Running the Cyclone UI build script", config);

    handleProcess(config);

    const compilerOptions = readJsonSync(
      join(config.workspaceRoot ?? "./", "tsconfig.base.json")
    ).compilerOptions;
    registerTsConfigPaths(compilerOptions);

    const program = await createProgram(config);
    program.exitOverride();
    await program.parseAsync(process.argv);

    writeSuccess(
      "Cyclone UI build processing completed successfully √ ",
      config
    );

    exitWithSuccess(config);
  } catch (error) {
    writeFatal(
      `A fatal error occurred while running the program: ${error.message}`,
      config
    );
    exitWithError(config);
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  }
};

await run();
