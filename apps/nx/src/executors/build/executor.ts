import type { ExecutorContext } from "@nx/devkit";
import type { StormConfig } from "@storm-software/config";
import { withRunExecutor } from "@storm-software/workspace-tools";
import type { AssetGlob } from "@nx/js/src/utils/assets/assets";
import type { BuildOptions } from "@cyclone-ui/build";
import type { BuildExecutorSchema } from "./schema.d";
import { join } from "node:path";
import { copyAssets } from "@nx/js";

export async function buildExecutorFn(
  options: BuildExecutorSchema,
  context: ExecutorContext,
  config?: StormConfig
) {
  const { writeDebug, writeInfo, writeSuccess } = await import(
    "@storm-software/config-tools"
  );
  const { build } = await import("@cyclone-ui/build");

  writeInfo("📦  Running Cyclone UI build executor on the workspace", config);

  // #region Apply default options

  const optionsRecord = options as Record<string, any>;
  writeDebug(
    `⚙️  Executor options:
${Object.keys(optionsRecord)
  .map(
    key =>
      `${key}: ${
        !optionsRecord[key] || _isPrimitive(optionsRecord[key])
          ? optionsRecord[key]
          : _isFunction(optionsRecord[key])
            ? "<function>"
            : JSON.stringify(optionsRecord[key])
      }`
  )
  .join("\n")}
`,
    config
  );

  // #endregion Apply default options

  // #region Prepare build context variables

  if (
    !context.projectsConfigurations?.projects ||
    !context.projectName ||
    !context.projectsConfigurations.projects[context.projectName] ||
    !context.projectsConfigurations.projects[context.projectName]!.root
  ) {
    throw new Error(
      "The Build process failed because the context is not valid. Please run this command from a workspace."
    );
  }

  // #endregion Prepare build context variables

  const projectRoot = context.projectsConfigurations.projects[
    context.projectName
  ]!.root as string;
  const outputPath = (
    options?.outputPath ? options?.outputPath : join("dist", projectRoot)
  ) as string;

  writeDebug(
    `📦  Copying asset files to output directory: ${outputPath}`,
    config
  );

  const assets = Array.from(options.assets ?? []);
  if (!options.assets?.some((asset: AssetGlob) => asset?.glob === "*.md")) {
    assets.push({
      input: projectRoot,
      glob: "*.md",
      output: "."
    });
  }

  if (!options.assets?.some((asset: AssetGlob) => asset?.glob === "LICENSE")) {
    assets.push({
      input: "",
      glob: "LICENSE",
      output: "."
    });
  }

  assets.push({
    input: projectRoot,
    glob: "**/package.json",
    output: "."
  });

  // if (options.includeSrc !== false) {
  //   assets.push({
  //     input: projectRoot,
  //     glob: "src/**/*",
  //     output: "."
  //   });
  // }

  const result = await copyAssets(
    {
      assets,
      watch: options.watch,
      outputPath
    },
    context
  );
  if (!result.success) {
    throw new Error("The Build process failed trying to copy assets");
  }

  // #region Run the build process

  writeDebug(`⚡  Running Tamagui build on the package`, config);

  await build(config, {
    ...options,
    clean: false,
    projectRoot,
    outputPath,
    tsConfig: options.tsConfig as string
  } as BuildOptions);

  // #endregion Run the build process

  writeSuccess("⚡ The Build process has completed successfully", config);

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
        options.projectRoot ??= "{projectRoot}";
        options.outputPath ??= "dist/{projectRoot}";
        options.tsConfig ??= "{projectRoot}/tsconfig.json";
        options.bundle ??= true;
        options.clean ??= true;
        options.watch ??= false;
        options.assets ??= [];
        options.minify ??= true;
        options.includeSrc ??= true;

        return options;
      }
    }
  }
);

const _isPrimitive = (value: unknown): boolean => {
  try {
    return (
      value === undefined ||
      value === null ||
      (typeof value !== "object" && typeof value !== "function")
    );
    // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  } catch (e) {
    return false;
  }
};

const _isFunction = (
  value: unknown
): value is ((params?: unknown) => unknown) & ((param?: any) => any) => {
  try {
    return (
      value instanceof Function ||
      typeof value === "function" ||
      !!(value?.constructor && (value as any)?.call && (value as any)?.apply)
    );
    // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  } catch (e) {
    return false;
  }
};
