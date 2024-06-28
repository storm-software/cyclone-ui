#!/usr/bin/env node
import { join } from "node:path";
import { readJsonSync } from "fs-extra";
import { register as registerTsConfigPaths } from "tsconfig-paths";
import {
  exitWithError,
  exitWithSuccess,
  handleProcess,
  loadStormConfig,
  writeFatal,
  writeSuccess
} from "@storm-software/config-tools";
import { createProgram } from "../src/cli";

void (async () => {
  const config = await loadStormConfig();
  try {
    handleProcess(config);

    const compilerOptions = readJsonSync(
      join(config.workspaceRoot ?? "./", "tsconfig.base.json")
    ).compilerOptions;
    registerTsConfigPaths(compilerOptions);

    const program = await createProgram(config);
    program.exitOverride();
    await program.parseAsync(process.argv);

    writeSuccess(`Cyclone UI build processing completed successfully!`, config);

    exitWithSuccess(config);
  } catch (error) {
    writeFatal(
      `A fatal error occurred while running the program: ${error.message}`,
      config
    );
    exitWithError(config);
    process.exit(1);
  }
})();
