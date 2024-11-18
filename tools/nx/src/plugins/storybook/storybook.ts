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
  CreateNodes,
  CreateNodesContext,
  joinPathFragments,
  TargetConfiguration
} from "@nx/devkit";
import { getNamedInputs } from "@nx/devkit/src/utils/get-named-inputs";
import { readdirSync } from "fs";
import { globSync } from "glob";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import type { ProjectConfiguration } from "nx/src/config/workspace-json-project-json";
import { readJsonFile } from "nx/src/utils/fileutils";
import { type PackageJson } from "nx/src/utils/package-json";

export const name = "storm-software/cyclone-ui/storybook";

export interface StorybookPluginOptions {
  buildStorybookTargetName?: string;
  serveStorybookTargetName?: string;
  staticStorybookTargetName?: string;
  testStorybookTargetName?: string;
  port?: number;
}

export const createNodes: CreateNodes<StorybookPluginOptions | undefined> = [
  "**/.storybook/main.{js,ts,mjs,mts,cjs,cts}",
  async (configFilePath, options, ctx) => {
    // eslint-disable-next-line no-console
    console.log(`Running Cyclone UI Storybook plugin - ${configFilePath}`);

    try {
      let projectRoot = "";
      if (configFilePath.includes("/.storybook")) {
        projectRoot = dirname(configFilePath).replace("/.storybook", "");
      } else {
        projectRoot = dirname(configFilePath).replace(".storybook", "");
      }

      if (projectRoot === "") {
        projectRoot = ".";
      }

      const fullProjectRoot = join(ctx.workspaceRoot, projectRoot);

      // Do not create a project if package.json and project.json isn't there.
      const siblingFiles = readdirSync(fullProjectRoot);
      if (
        !siblingFiles.includes("package.json") &&
        !siblingFiles.includes("project.json")
      ) {
        // eslint-disable-next-line no-console
        console.warn(
          `Unable to find package.json or project.json in ${fullProjectRoot}`
        );

        return {};
      }

      const packageJson = createPackageJson(fullProjectRoot);
      if (!packageJson) {
        // eslint-disable-next-line no-console
        console.warn(`Unable to find package.json in ${fullProjectRoot}`);

        return {};
      }

      let project = createProjectFromPackageJsonNextToProjectJson(
        projectRoot,
        packageJson
      );
      project ??= {
        root: projectRoot
      };

      if (!project.name) {
        // eslint-disable-next-line no-console
        console.warn(
          `Unable to determine the project name in ${fullProjectRoot}`
        );

        return {};
      }

      project.tags ??= [];
      project.tags.push("app:storybook");

      project.implicitDependencies ??= [];
      project.implicitDependencies.push(...getComponentProjectNames());
      project.implicitDependencies.push("config");

      // project.implicitDependencies.push("font-space-grotesk");
      // project.implicitDependencies.push("font-permanent-marker");
      // project.implicitDependencies.push("font-mona-sans");
      // project.implicitDependencies.push("tamagui");
      // project.implicitDependencies.push("themes");
      // project.implicitDependencies.push("state");
      // project.implicitDependencies.push("client-state");
      // project.implicitDependencies.push("message-state");
      // project.implicitDependencies.push("form-state");

      const targets = await buildStorybookTargets(
        ctx.workspaceRoot,
        projectRoot,
        normalizeOptions(options),
        ctx
      );

      return {
        projects: {
          [project.name]: {
            ...project,
            root: projectRoot,
            targets: {
              ...project.targets,
              ...targets
            }
          }
        }
      };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      return {};
    }
  }
];

function createProjectFromPackageJsonNextToProjectJson(
  projectJsonPath: string,
  packageJson: PackageJson
): ProjectConfiguration {
  const { nx, name } = packageJson;
  const root = dirname(projectJsonPath);

  return {
    ...nx,
    name,
    root,
    targets: {}
  } as ProjectConfiguration;
}

function createPackageJson(projectRoot: string): PackageJson | null {
  try {
    const packageJsonPath = join(projectRoot, "package.json");
    if (!existsSync(packageJsonPath)) {
      return null;
    }

    return readJsonFile(packageJsonPath) as PackageJson;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    return null;
  }
}

function getComponentProjectNames(): string[] {
  try {
    const componentsGlob = "./components/**/project.json";
    const packageJsonPaths = globSync(componentsGlob, {
      ignore: ["**/node_modules/**"]
    });

    // eslint-disable-next-line no-console
    console.log(
      `Found ${packageJsonPaths.length} component project.json files in ${componentsGlob}`
    );

    return packageJsonPaths.map(packageJsonPath => {
      const jsonFile = readJsonFile(packageJsonPath) as PackageJson;
      return jsonFile.name;
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);

    return [];
  }
}

async function buildStorybookTargets(
  workspaceRoot: string,
  projectRoot: string,
  options: Required<StorybookPluginOptions>,
  context: CreateNodesContext
) {
  const buildOutputs = getOutputs();
  const namedInputs = getNamedInputs(projectRoot, context);

  const targets: Record<string, TargetConfiguration> = {};

  targets.prepare = prepareTarget(workspaceRoot);

  targets[options.buildStorybookTargetName] = buildTarget(
    namedInputs,
    buildOutputs,
    projectRoot
  );

  targets[options.serveStorybookTargetName] = serveTarget(
    projectRoot,
    options.port
  );

  if (isStorybookTestRunnerInstalled()) {
    targets[options.testStorybookTargetName] = testTarget(projectRoot);
  }

  targets[options.staticStorybookTargetName] = serveStaticTarget(
    options,
    projectRoot
  );

  return targets;
}

function prepareTarget(workspaceRoot: string): TargetConfiguration {
  return {
    executor: "nx:run-commands",
    inputs: ["typescript", "^production"],
    options: {
      cwd: workspaceRoot,
      commands: [
        { command: "pnpm nx run cli:build" },
        { command: "pnpm nx run colors:build" },
        { command: "pnpm nx run themes:build" }
      ],
      parallel: false
    }
  };
}

function buildTarget(
  namedInputs: {
    [inputName: string]: any[];
  },
  outputs: string[],
  projectRoot: string
): TargetConfiguration {
  return {
    dependsOn: [{ target: "prepare" }],
    command: "storybook build",
    options: { cwd: projectRoot },
    cache: true,
    outputs,
    inputs: [
      "typescript",
      "^production",
      {
        externalDependencies: [
          "storybook",
          isStorybookTestRunnerInstalled()
            ? "@storybook/test-runner"
            : undefined
        ].filter(Boolean) as string[]
      }
    ]
  };
}

function serveTarget(projectRoot: string, port = 4400): TargetConfiguration {
  return {
    dependsOn: [{ target: "prepare" }],
    inputs: ["typescript", "^production"],
    executor: "nx:run-commands",
    options: { cwd: projectRoot, command: `storybook dev -p ${port}` },
    defaultConfiguration: "local",
    configurations: {
      local: {
        cwd: projectRoot,
        command: `storybook dev -p ${port}`
      },
      ci: {
        cwd: projectRoot,
        command: `storybook dev -p ${port} --ci --no-open`
      }
    }
  };
}

function testTarget(projectRoot: string) {
  const targetConfig: TargetConfiguration = {
    dependsOn: [{ target: "prepare" }],
    command: "test-storybook",
    options: { cwd: projectRoot },
    inputs: [
      {
        externalDependencies: ["storybook", "@storybook/test-runner"]
      }
    ]
  };

  return targetConfig;
}

function serveStaticTarget(
  options: StorybookPluginOptions,
  projectRoot: string
) {
  const targetConfig: TargetConfiguration = {
    dependsOn: [{ target: "prepare" }],
    executor: "@nx/web:file-server",
    options: {
      buildTarget: `${options.buildStorybookTargetName}`,
      staticFilePath: joinPathFragments(projectRoot, "storybook-static")
    }
  };

  return targetConfig;
}

function getOutputs(): string[] {
  const outputs = [
    "{projectRoot}/storybook-static",
    "{options.output-dir}",
    "{options.outputDir}",
    "{options.o}"
  ];

  return outputs;
}

function normalizeOptions(
  options?: StorybookPluginOptions
): Required<StorybookPluginOptions> {
  const normalizedOptions = (options ?? {}) as Required<StorybookPluginOptions>;

  normalizedOptions.buildStorybookTargetName ??= "build";
  normalizedOptions.serveStorybookTargetName ??= "serve";
  normalizedOptions.testStorybookTargetName ??= "test";
  normalizedOptions.staticStorybookTargetName ??= "static";
  normalizedOptions.port ??= 4400;

  return normalizedOptions;
}

function isStorybookTestRunnerInstalled(): boolean {
  try {
    require.resolve("@storybook/test-runner");
    return true;
  } catch (e) {
    return false;
  }
}
