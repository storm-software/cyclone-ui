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
  cancel,
  confirm,
  intro,
  isCancel,
  outro,
  spinner,
  text
} from "@clack/prompts";
import { Args, Command, Flags } from "@oclif/core";
import { loadStormConfig } from "@storm-software/config-tools";
import { isFunction } from "@storm-stack/types/type-checks/is-function";
import { exists, remove } from "fs-extra";
import { join } from "node:path";
import { getThemePath } from "../../libs/themes.js";

/**
 * A command to clean the existing color scheme configuration files.
 */
export default class Clean extends Command {
  public static override args = {
    name: Args.string({
      name: "Color scheme name",
      required: false,
      description:
        "The name of the specific color scheme to assign the design token to"
    })
  };

  public static override flags = {
    output: Flags.directory({
      char: "o",
      summary: "Output directory",
      description: "The location to output the design token file",
      hidden: false,
      env: "STORM_COLORS_DIRECTORY",
      default: ".storm/colors",
      defaultHelp:
        'The ".storm/colors" folder in the workspace\'s root directory',
      required: false,
      aliases: ["outputPath", "outDir"],
      deprecateAliases: false,
      noCacheDefault: false,
      helpValue: "<directory>"
    }),
    skip: Flags.boolean({
      char: "s",
      summary: "Skip confirmation prompts",
      description: "Skip all confirmation prompts and use the default values",
      hidden: false,
      default: false,
      required: false,
      deprecateAliases: false,
      noCacheDefault: false
    })
  };

  public static override summary =
    "Clean the workspace's color scheme configuration";

  public static override description =
    "Clean the color scheme configuration for the client application based on the colors provided in the Storm configuration file";

  public static override strict = false;

  public static override examples = [
    {
      description:
        "Clean all the color schemes using the output path from the Storm configuration file",
      command: "<%= config.bin %> <%= command.id %> clean"
    },
    {
      description:
        "Clean just the 'brand-light.ts' and 'brand-dark.ts' color scheme files using the output path from the Storm configuration file",
      command: "<%= config.bin %> <%= command.id %> clean brand"
    },
    {
      description:
        "Clean all the color schemes in the output path './path/to/output'",
      command:
        "<%= config.bin %> <%= command.id %> clean --output=./path/to/output"
    },
    {
      description:
        "Clean just the 'brand-light.ts' and 'brand-dark.ts' color schemes in the output path './path/to/output'",
      command:
        "<%= config.bin %> <%= command.id %> clean --output=./path/to/output"
    },
    {
      description:
        "Clean all the color schemes in the output path './path/to/output', and skip confirmation prompts",
      command:
        "<%= config.bin %> <%= command.id %> clean --output=./path/to/output --skip"
    },
    {
      description:
        "Clean just the 'brand-light.ts' and 'brand-dark.ts' color schemes in the output path './path/to/output', and skip confirmation prompts",
      command:
        "<%= config.bin %> <%= command.id %> clean --output=./path/to/output --skip"
    }
  ];

  public override async run(): Promise<void> {
    const { args, flags } = await this.parse(Clean);

    this.log(
      `Using the following args: \n${Object.keys(args)
        .map(
          key =>
            ` - ${key}=${isFunction(args[key]) ? "<function>" : JSON.stringify(args[key])}`
        )
        .join("\n")}\n`
    );
    this.log(
      `Using the following flags: \n${Object.keys(flags)
        .map(
          key =>
            ` - ${key}=${isFunction(flags[key]) ? "<function>" : JSON.stringify(flags[key])}`
        )
        .join("\n")}\n\n`
    );

    intro("Cyclone UI - Clean color scheme");

    const s1 = spinner();
    s1.start("Loading Storm configuration");

    const config = await loadStormConfig();

    s1.stop("Loaded Storm configuration");

    let output = flags.output;

    if (!output) {
      output = config.outputDirectory;

      if (!flags.skip) {
        const useConfigOutput = await confirm({
          message: `Should the output directory be set to ${output} (defaulted from ${config.configFile || "Storm configuration"})?`
        });

        if (isCancel(useConfigOutput)) {
          cancel("Operation cancelled.");
          // eslint-disable-next-line unicorn/no-process-exit
          process.exit(0);
        }

        if (!useConfigOutput) {
          const promptInput = await text({
            message: "Enter the color schemes output directory",
            defaultValue: "./.storm/colors"
          });

          if (isCancel(promptInput)) {
            cancel("Operation cancelled.");
            // eslint-disable-next-line unicorn/no-process-exit
            process.exit(0);
          }

          output = promptInput as string;
        }
      }

      if (!output) {
        this.error(
          "The output was not provided in the CLI and does not exist in the Storm configuration file"
        );
      }
    }

    const s2 = spinner();
    if (args.name) {
      s2.start(
        `Cleaning the '${args.name}-light.ts' and '${args.name}-dark.ts' color schemes output directory`
      );
      if (
        await exists(
          `${join(getThemePath(config.workspaceRoot, output), args.name)}-light.ts`
        )
      ) {
        await remove(
          `${join(getThemePath(config.workspaceRoot, output), args.name)}-light.ts`
        );
      }
      if (
        await exists(
          `${join(getThemePath(config.workspaceRoot, output), args.name)}-dark.ts`
        )
      ) {
        await remove(
          `${join(getThemePath(config.workspaceRoot, output), args.name)}-dark.ts`
        );
      }

      s2.stop(
        `Cleaned the '${args.name}-light.ts' and '${args.name}-dark.ts' color schemes output directory`
      );
    } else {
      s2.start("Cleaning the color schemes output directory");

      if (await exists(getThemePath(config.workspaceRoot, output))) {
        await remove(getThemePath(config.workspaceRoot, output));
      }

      s2.stop("Cleaned the color schemes output directory");
    }

    outro(
      "Theme configurations were successfully cleared out of the output directory"
    );

    this.exit();
  }

  public override async catch(error: Error): Promise<void> {
    this.error(error.message);
  }

  public override async init(): Promise<void> {
    this.log("Cleaning Cyclone UI Themes...");
  }
}
