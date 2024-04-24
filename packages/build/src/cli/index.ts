import {
  findWorkspaceRootSafe,
  writeFatal,
  writeInfo,
  writeSuccess
} from "@storm-software/config-tools";
import type { StormConfig } from "@storm-software/config";
import { build } from "../build/tamagui";
import { join } from "node:path";

export async function createProgram(config: StormConfig) {
  const { Command, Option } = await import("commander");

  try {
    writeInfo("⚡ Running Storm Cyclone Build Tools", config);

    const root = findWorkspaceRootSafe();
    process.env.STORM_WORKSPACE_ROOT ??= root;
    process.env.NX_WORKSPACE_ROOT_PATH ??= root;
    root && process.chdir(root);

    const program = new Command("cyclone-ui-build");
    program.version("1.0.0", "-v --version", "display CLI version");

    program
      .description("⚡ Build the Cyclone UI code")
      .showHelpAfterError()
      .showSuggestionAfterError();

    const projectRootOption = new Option(
      "--project-root <args>",
      "The path to the root of the project to build. This path is defined relative to the workspace root."
    ).makeOptionMandatory();

    const tsconfigOption = new Option(
      "--tsconfig <args>",
      "The path to the root of the project to build. This path is defined relative to the workspace root."
    );

    const outputPathOption = new Option(
      "--output-path <args>",
      "The path to the root of the project to build. This path is defined relative to the workspace root"
    );

    const bundleOption = new Option(
      "--bundle",
      "Should the build be bundled using ESBuild. Default is true."
    ).default(true);

    const cleanOption = new Option(
      "--clean",
      "Should the build be cleaned before building. Default is true."
    ).default(true);

    program
      .command("tamagui")
      .description(
        "Run a TypeScript build using ESBuild, API-Extractor, and TSC (for type generation)."
      )
      .addOption(projectRootOption)
      .addOption(tsconfigOption)
      .addOption(outputPathOption)
      .addOption(bundleOption)
      .addOption(cleanOption)
      .action(buildAction(config));

    return program;
  } catch (e) {
    writeFatal(
      `A fatal error occurred while running the program: ${e.message}`,
      config
    );
    process.exit(1);
  }
}

const buildAction =
  (config: StormConfig) =>
  async (
    projectRoot: string,
    tsConfig?: string,
    outputPath?: string,
    bundle?: boolean,
    clean?: boolean
  ) => {
    try {
      writeInfo("⚡ Building the Storm TypeScript package", config);
      await build(config, {
        projectRoot,
        tsConfig: tsConfig ? tsConfig : join(projectRoot, "tsconfig.json"),
        outputPath: outputPath ? outputPath : join("dist", projectRoot),
        bundle,
        clean
      });

      writeSuccess("Building has completed successfully ✅", config);
    } catch (e) {
      writeFatal(
        `❌ A fatal error occurred while building the package: ${e.message}`,
        config
      );
      console.error(e);

      process.exit(1);
    }
  };
