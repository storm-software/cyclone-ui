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

/* eslint-disable no-await-in-loop */

import {
  cancel,
  confirm,
  intro,
  isCancel,
  multiselect,
  outro,
  spinner,
  text
} from "@clack/prompts";
import type { Router } from "@cyclone-ui/registry-api/router";
import { Args, Command, Flags } from "@oclif/core";
import { loadStormConfig } from "@storm-software/config-tools";
import { isString } from "@storm-stack/types/type-checks/is-string";
import { createTRPCClient, httpBatchLink, loggerLink } from "@trpc/client";
import * as fs from "fs-extra";
import { join } from "node:path";

export type Option<TValue = any> = {
  value: TValue;
  label: string;
  hint?: string;
};

/**
 * A command to generate design tokens based on the colors provided by the user.
 */
export default class Get extends Command {
  public static override args = {
    component: Args.string({
      name: "Component Name",
      required: false,
      description:
        "The name of the component to add to the local components library package",
      ignoreStdin: false,
      noCacheDefault: false
    })
  };

  public static override flags = {
    library: Flags.directory({
      char: "l",
      summary: "Components library directory",
      description:
        "The location of the local components library package directory",
      hidden: false,
      required: false,
      aliases: ["lib"],
      deprecateAliases: false,
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
    registry: Flags.url({
      char: "r",
      summary: "Registry URL",
      description:
        "The URL of the Cyclone UI remote registry to use for the components library package",
      hidden: false,
      required: false,
      aliases: ["registryUrl", "registry-url"],
      deprecateAliases: false,
      helpValue: "<url>"
    })
  };

  public static override summary = "Get design component files from registry";

  public static override description =
    "A command to add a copy of a design component from the remote Cyclone UI registry to the local components library package";

  public static override strict = false;

  public static override examples = [
    {
      description:
        "Initialize the themes using the output path from the Storm configuration file",
      command: "<%= config.bin %> <%= command.id %> init"
    },
    {
      description:
        "Initialize the themes, and write the output to ./path/to/output",
      command:
        "<%= config.bin %> <%= command.id %> init --output=./path/to/output"
    },
    {
      description:
        "Initialize the themes, write the output to ./path/to/output, and skip confirmation prompts",
      command:
        "<%= config.bin %> <%= command.id %> init --output=./path/to/output --skip"
    }
  ];

  public override async run(): Promise<void> {
    const { args, flags } = await this.parse(Get);

    intro("Cyclone UI - Get Component");

    const s1 = spinner();
    s1.start("Loading Storm configuration");

    const config = await loadStormConfig();

    s1.stop("Loaded Storm configuration");

    let library = flags.library;
    if (!library) {
      library = config.extensions.cyclone.library;
      if (!flags.skip) {
        const useConfigOutput = await confirm({
          message: `Should the "${library}" directory be used as the root of the components library package?`
        });
        if (isCancel(useConfigOutput)) {
          cancel("Operation cancelled.");
          // eslint-disable-next-line unicorn/no-process-exit
          process.exit(0);
        }

        if (!useConfigOutput) {
          const promptInput = await text({
            message:
              "Enter the local components library package output directory",
            defaultValue: "./packages/components"
          });

          if (isCancel(promptInput)) {
            cancel("Operation cancelled.");
            // eslint-disable-next-line unicorn/no-process-exit
            process.exit(0);
          }

          library = promptInput as string;
        }
      }

      if (!library) {
        this.error(
          "The components library package directory is required. Please provide a valid directory path."
        );
      }
    }

    let registry = flags.registry;
    if (!registry && config.registry.cyclone) {
      registry = new URL(config.registry.cyclone);
      if (!flags.skip) {
        let useConfigOutput = false as boolean | symbol;
        if (registry) {
          useConfigOutput = await confirm({
            message: `Should the registry URL "${registry}" be used to download local copies of the design components?`
          });
          if (isCancel(useConfigOutput)) {
            cancel("Operation cancelled.");
            // eslint-disable-next-line unicorn/no-process-exit
            process.exit(0);
          }
        }

        if (!useConfigOutput && !registry) {
          const promptInput = await text({
            message: "Enter the remote registry URL",
            defaultValue: "https://cyclone-ui.com/registry"
          });
          if (isCancel(promptInput)) {
            cancel("Operation cancelled.");
            // eslint-disable-next-line unicorn/no-process-exit
            process.exit(0);
          }

          registry =
            promptInput && typeof promptInput === "string"
              ? new URL(promptInput)
              : undefined;
        }
      }

      if (!registry) {
        this.error(
          "A remote URL for the Cyclone UI registry is required. Please provide a valid URL."
        );
      }
    }

    const s2 = spinner();
    s2.start("Connecting to the Cyclone remote registry...");

    if (!registry) {
      this.error(
        "A remote URL for the Cyclone UI registry is required. Please provide a valid URL."
      );
    }
    const client = createTRPCClient<Router>({
      links: [
        loggerLink(),
        httpBatchLink({
          url: isString(registry) ? registry : registry.toString()
        })
      ]
    });

    const remoteComponents = await client.components.list.query();
    s2.stop("Connected to the Cyclone remote registry...");

    const s3 = spinner();

    s3.start(
      "Checking for components.json file in local design components library..."
    );

    let localComponents = {};
    if (await fs.exists(library)) {
      localComponents = await fs.readJson(join(library, "components.json"));
      s3.stop(
        "Found components.json file in local design components library..."
      );
    } else {
      await fs.writeJson(join(library, "components.json"), {});
      s3.stop(
        "Added components.json file to local design components library..."
      );
    }

    let components = [...(args.component ?? [])];
    if (components && components.length > 0) {
      let useConfigOutput = false as boolean | symbol;
      if (components) {
        useConfigOutput = await confirm({
          message: `Do you want the "${components[0]}" component added to the design components library?`
        });

        if (isCancel(useConfigOutput)) {
          cancel("Operation cancelled.");
          // eslint-disable-next-line unicorn/no-process-exit
          process.exit(0);
        }

        if (!useConfigOutput) {
          components = await this.componentPrompt(
            remoteComponents as any,
            localComponents
          );
        }
      }
    } else {
      components = await this.componentPrompt(
        remoteComponents as any,
        localComponents
      );
    }

    if (!components || components.length === 0) {
      this.error(
        "No components were selected to add to the local components library"
      );
    }

    if (components) {
      const s4 = spinner();
      s4.start("Adding components to the local components library package...");

      for (const component of components) {
        await client.components.get.query(component);
      }

      s4.stop("Added components to the local components library package...");
    }

    outro(
      `Added ${components.length > 1 ? [...components.slice(-1), `and ${components.at(-1)}`].join(", ") : components[0]} to the local components library package`
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
    this.log("Initializing Cyclone Component Registry CLI...");
  }

  public override async finally(): Promise<void> {
    this.log("Exiting Cyclone Component Registry CLI...");
  }

  async componentPrompt(
    remoteComponents: any[],
    localComponents: Record<string, string>
  ): Promise<string[]> {
    const promptInput = await multiselect<Option<string>[], string>({
      message:
        "Select the components to add to the local components library package",
      initialValues: Object.keys(localComponents),
      options: remoteComponents.map(component => {
        let hint = "Component not found locally";
        if (localComponents[component.name]) {
          hint =
            localComponents[component.name] === component.version
              ? "Local version is up-to-date"
              : "Local version is outdated";
        }

        return {
          value: component.name,
          label: component.name,
          hint
        };
      })
    });

    if (isCancel(promptInput)) {
      cancel("Operation cancelled.");
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(0);
    }

    return promptInput as string[];
  }
}
