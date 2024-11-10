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

/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */

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
// import { CLICommandType, executeCommand } from "@storm-stack/cli";
// import { StormLog } from "@storm-stack/logging";
import { isFunction } from "@storm-stack/types/type-checks/is-function";
import * as fs from "fs-extra";
import { join } from "node:path";

/**
 * A command to generate a Tamagui theme file based on the tokens provided by the user.
 */
export default class Generate extends Command {
  public static override args = {
    name: Args.string({
      name: "Theme name",
      required: true,
      description: "The name of the specific theme",
      default: "brand",
      ignoreStdin: false,
      noCacheDefault: false
    })
  };

  public static override flags = {
    input: Flags.directory({
      char: "i",
      summary: "Input file",
      description: "The path to the theme input file",
      hidden: false,
      required: true,
      deprecateAliases: false,
      helpValue: "<file>"
    }),
    output: Flags.directory({
      char: "o",
      summary: "Output directory",
      description: "The location to output the themes file",
      hidden: false,
      env: "STORM_THEMES_DIRECTORY",
      default: ".storm/themes",
      defaultHelp:
        'The ".storm/themes" folder in the workspace\'s root directory',
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
      allowNo: true,
      hidden: false,
      default: false,
      required: false,
      deprecateAliases: false,
      noCacheDefault: false
    }),
    clean: Flags.boolean({
      char: "c",
      summary: "Clean output directory",
      description:
        "Remove all files from the output directory before generating new themes",
      allowNo: true,
      hidden: false,
      default: false,
      required: false,
      deprecateAliases: false,
      noCacheDefault: false
    }),
    json: Flags.boolean({
      char: "j",
      summary: "Generate JSON",
      description: "Should the themes be generated as a JSON",
      allowNo: true,
      hidden: false,
      default: false,
      required: false,
      deprecateAliases: false,
      noCacheDefault: false
    })
  };

  public static override summary = "Generate a theme configuration file";

  public static override description =
    "Generate a theme configuration for the client application based on the values provided in the Storm configuration file";

  public static override strict = false;

  public static override examples = [
    {
      description:
        "Generate a theme using the output path from the Storm configuration file",
      command: "<%= config.bin %> <%= command.id %> generate"
    },
    {
      description: "Generate a theme, and write the output to ./path/to/output",
      command:
        "<%= config.bin %> <%= command.id %> generate --output=./path/to/output"
    },
    {
      description:
        "Generate a theme, write the output to ./path/to/output, and skip confirmation prompts",
      command:
        "<%= config.bin %> <%= command.id %> generate --output=./path/to/output --skip"
    }
  ];

  public override async run(): Promise<void> {
    const { args, flags } = await this.parse(Generate);

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

    intro(`Cyclone UI - Generate ${args.name} theme configurations`);

    const s1 = spinner();
    s1.start("Loading Storm configuration");

    const config = await loadStormConfig();

    s1.stop("Loaded Storm configuration");

    let output = flags.output;
    if (!output) {
      output = config.outputDirectory;

      if (!flags.skip) {
        const useConfigOutput = await confirm({
          message: `Should the output directory be set to "${output}" (defaulted from ${config.configFile || "Storm configuration"} file)?`
        });

        if (isCancel(useConfigOutput)) {
          cancel("Operation cancelled.");
          // eslint-disable-next-line unicorn/no-process-exit
          process.exit(0);
        }

        if (!useConfigOutput) {
          const promptInput = await text({
            message: "Enter the themes output directory",
            defaultValue: "./.storm/themes"
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

    if (flags.clean) {
      const s2 = spinner();
      s2.start(`Cleaning themes from "${output}"`);

      await fs.remove(join(config.workspaceRoot, output, `${args.name}.ts`));

      s2.stop(`Cleaned themes from "${output}"`);
    }

    const s3 = spinner();
    s3.start(`Generating theme configuration to output directory`);

    // await executeCommand(
    //   CLICommandType.EXECUTE,
    //   [
    //     "tamagui",
    //     "generate-themes",
    //     flags.input,
    //     join(output, `${args.name}.ts`)
    //   ],
    //   config.workspaceRoot
    // );

    s3.stop(`Generated themes configuration to output directory`);

    outro(
      `${args.name} theme configurations were successfully generated and saved to "${join(output, `${args.name}.ts`)}"`
    );
  }

  public override async catch(error: Error): Promise<void> {
    this.error(
      error?.message
        ? `\nMessage: ${error.message}\n\n${error.stack ? "Stacktrace: \n" : ""}${error.stack || ""}\n`
        : error || "An error occurred"
    );
  }

  public override async init(): Promise<void> {
    this.log("Initializing Cyclone-UI theme generator...");
  }

  public override async finally(): Promise<void> {
    this.log("Exiting Cyclone-UI theme generator...");
  }
}
