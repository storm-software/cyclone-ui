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

          const root = getRoot(projectRoot, context);

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
              context.workspaceRoot
            );

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

          const implicitDependencies = projectConfig.implicitDependencies ?? [];
          if (!implicitDependencies.includes("tools-nx")) {
            implicitDependencies.push("tools-nx");
          }

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
                  sourceRoot: join(root, "src"),
                  implicitDependencies:
                    packageGroup === "plugins" ? ["cyclone-ui"] : []
                }
              )
            }
          };
        } catch (error) {
          console.error(
            `[${name}]: ${error?.message ? error.message : "Unknown fatal error"}`
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
