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

// import { build } from "@cyclone-ui/build/build/tamagui";
// import { type BuildOptions } from "@cyclone-ui/build/types";
import type { ExecutorContext } from "@nx/devkit";
import type { StormConfig } from "@storm-software/config";
import { withRunExecutor } from "@storm-software/workspace-tools";
import type { BuildExecutorSchema } from "./schema.d";

export async function buildExecutorFn(
  _options: BuildExecutorSchema,
  _context: ExecutorContext,
  _config?: StormConfig
) {
  // const { writeDebug, writeTrace } = await import(
  //   "@storm-software/config-tools"
  // );

  // if (
  //   !context.projectsConfigurations?.projects ||
  //   !context.projectName ||
  //   !context.projectsConfigurations.projects[context.projectName] ||
  //   !context.projectsConfigurations.projects[context.projectName]!.root
  // ) {
  //   throw new Error(
  //     "The Build process failed because the context is not valid. Please run this command from a workspace."
  //   );
  // }

  // const projectRoot = context.projectsConfigurations.projects[
  //   context.projectName
  // ]!.root as string;
  // const outputPath = (options?.outputPath ||
  //   join("dist", projectRoot)) as string;

  // writeDebug(
  //   `📦  Copying asset files to output directory: ${outputPath}`,
  //   config
  // );

  // const assets = [...(options.assets ?? [])];
  // if (!options.assets?.some((asset: AssetGlob) => asset?.glob === "*.md")) {
  //   assets.push({
  //     input: projectRoot,
  //     glob: "*.md",
  //     output: "."
  //   });
  // }

  // if (!options.assets?.some((asset: AssetGlob) => asset?.glob === "LICENSE")) {
  //   assets.push({
  //     input: "",
  //     glob: "LICENSE",
  //     output: "."
  //   });
  // }

  // assets.push({
  //   input: projectRoot,
  //   glob: "**/package.json",
  //   output: "."
  // });

  // const result = await copyAssets(
  //   {
  //     assets,
  //     watch: options.watch,
  //     outputPath
  //   },
  //   context
  // );
  // if (!result.success) {
  //   throw new Error("The Build process failed trying to copy assets");
  // }

  // // #region Run the build process

  // writeTrace("⚡  Running Tamagui build on the package", config);

  // await build(config!, {
  //   ...options,
  //   clean: false,
  //   projectRoot,
  //   outputPath,
  //   tsConfig: options.tsConfig as string
  // } as BuildOptions);

  // #endregion Run the build process

  return {
    success: true
  };
}

export default withRunExecutor<BuildExecutorSchema>(
  "Cyclone UI Build",
  buildExecutorFn,
  {
    skipReadingConfig: false,
    hooks: {
      applyDefaultOptions: (
        options: Partial<BuildExecutorSchema>
      ): BuildExecutorSchema => {
        options.assets ??= [];
        options.includeSrc ??= true;

        return options;
      }
    }
  }
);
