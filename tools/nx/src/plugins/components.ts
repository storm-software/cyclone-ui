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

import type { CreateNodes, CreateNodesResultArray } from "@nx/devkit";
import { createNodesFromFiles } from "@nx/devkit";
import { getWorkspacePackageManagerCommand } from "@storm-software/workspace-tools";
import {
  ProjectTagRegistryValue,
  ProjectTagVariant
} from "@storm-software/workspace-tools/types";
import {
  getProjectConfigFromProjectRoot,
  getProjectRoot,
  getRoot
} from "@storm-software/workspace-tools/utils/plugin-helpers";
import {
  addProjectTag,
  setDefaultProjectTags
} from "@storm-software/workspace-tools/utils/project-tags";
import { appendPath } from "@stryke/path/append";
import { findFolderName } from "@stryke/path/find";
import { resolveParentPath } from "@stryke/path/resolve-parent-path";
import defu from "defu";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { readNxJson } from "nx/src/config/nx-json";
import type {
  ProjectConfiguration,
  ProjectType
} from "nx/src/config/workspace-json-project-json";
import type { PackageJson as PackageJsonNx } from "nx/src/utils/package-json";
import { readTargetsFromPackageJson } from "nx/src/utils/package-json";
import { CycloneUIProjectTagScopeValue } from "../constants";

/* eslint-disable no-console */

export const name = "storm-software/cyclone-ui/components";

export interface CycloneUIComponentPluginOptions {}

export const createNodesV2: CreateNodes<CycloneUIComponentPluginOptions> = [
  "components/**/project.json",
  async (
    configFiles,
    optionsV2,
    contextV2
  ): Promise<CreateNodesResultArray> => {
    const nxJson = readNxJson(contextV2.workspaceRoot);

    const packageManagerCommand = await getWorkspacePackageManagerCommand(
      contextV2.workspaceRoot
    );
    const { exec } = packageManagerCommand;

    return createNodesFromFiles(
      async (configFile, _, context) => {
        try {
          const projectRoot = getProjectRoot(
            configFile,
            contextV2.workspaceRoot
          );
          if (!projectRoot) {
            console.error(
              `[${name}]: package.json and Powerlines configuration files (i.e. powerlines.config.ts) must be located in the project root directory: ${configFile}`
            );

            return {};
          }

          const root = getRoot(projectRoot, contextV2);
          const packageJsonContent = await readFile(
            join(projectRoot, "package.json"),
            "utf8"
          );
          const packageJson = JSON.parse(packageJsonContent);
          if (!packageJson.name) {
            console.warn(
              `[${name}]: The package.json file located at ${join(
                projectRoot,
                "package.json"
              )} is missing a \`name\` field. Skipping Nx project creation.`
            );

            return {};
          }

          const projectConfig = getProjectConfigFromProjectRoot(
            projectRoot,
            packageJson
          );
          if (!projectConfig) {
            console.warn(
              `[${name}]: No project configuration found for project in root directory ${projectRoot}`
            );

            return {};
          }

          const targets: ProjectConfiguration["targets"] =
            readTargetsFromPackageJson(
              packageJson as PackageJsonNx,
              nxJson,
              projectRoot,
              context.workspaceRoot,
              packageManagerCommand
            );

          targets["build-base"] ??= {
            cache: true,
            inputs: [
              "default",
              "^production",
              "{workspaceRoot}/tools/config/tsdown.config.ts"
            ],
            outputs: ["{projectRoot}/dist"],
            command: `${exec} tsdown \"src/**/*.ts\" --config \"../../tools/config/tsdown.components.ts\" --cwd \"${join(
              context.workspaceRoot,
              projectRoot
            )}\"`,
            defaultConfiguration: "production",
            options: {
              cwd: projectRoot,
              name: projectConfig?.name
            },
            configurations: {
              production: {
                debug: false,
                sourcemap: false
              },
              development: {
                debug: true,
                sourcemap: true
              }
            }
          };

          // Always set packaging `build` so it wins over the tsdown plugin's
          // compile target for packages with a custom tsdown.config.ts.
          targets.build = {
            cache: true,
            inputs: [
              "{workspaceRoot}/LICENSE",
              "{projectRoot}/dist",
              "{projectRoot}/*.md",
              "{projectRoot}/package.json"
            ],
            outputs: [`{workspaceRoot}/dist/${projectRoot}`],
            executor: "nx:run-commands",
            dependsOn: ["build-base", "^build"],
            options: {
              parallel: false,
              commands: [
                `pnpm copyfiles LICENSE dist/${projectRoot}`,
                `pnpm copyfiles --up=2 ./${projectRoot}/*.md ./${
                  projectRoot
                }/package.json dist/${projectRoot}`,
                `pnpm copyfiles --up=3 "./${projectRoot}/dist/**/*" dist/${
                  projectRoot
                }/dist`
              ]
            }
          };

          // Apply nx-release-publish target for non-private projects
          const isPrivate = packageJson.private ?? false;
          if (!isPrivate) {
            targets["nx-release-publish"] = {
              cache: false,
              inputs: ["default", "^production"],
              dependsOn: ["build", "^nx-release-publish"],
              executor: "@cyclone-ui/tools-nx:component-publish",
              options: {}
            };
          }

          setDefaultProjectTags(projectConfig, name);

          addProjectTag(
            projectConfig,
            ProjectTagVariant.TYPE,
            CycloneUIProjectTagScopeValue.COMPONENT
          );
          addProjectTag(
            projectConfig,
            ProjectTagVariant.REGISTRY,
            ProjectTagRegistryValue.CYCLONE
          );

          const packageGroup = findFolderName(
            resolveParentPath(appendPath(root, context.workspaceRoot))
          );
          addProjectTag(
            projectConfig,
            "cyclone-ui" as ProjectTagVariant,
            packageGroup,
            {
              overwrite: true
            }
          );

          return {
            projects: {
              [root]: defu(
                {
                  root,
                  targets
                },
                projectConfig,
                {
                  name: String(packageJson.name).replace(/^@cyclone-ui\//, ""),
                  // eslint-disable-next-line ts/no-unnecessary-type-assertion
                  projectType: "library" as ProjectType,
                  sourceRoot: join(root, "src")
                }
              )
            }
          };
        } catch (error) {
          console.error(
            `[${name}]: ${
              (error as Error)?.message
                ? (error as Error).message
                : "Unknown fatal error"
            }`
          );

          return {};
        }
      },
      configFiles,
      optionsV2,
      contextV2
    );
  }
];
