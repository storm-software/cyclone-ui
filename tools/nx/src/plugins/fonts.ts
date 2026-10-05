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
import { createNodesFromFiles, readJsonFile } from "@nx/devkit";
import { readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import type { ProjectConfiguration } from "nx/src/config/workspace-json-project-json";

export const name = "storm-software/cyclone-ui/fonts";

export interface CycloneUIFontPluginOptions {}

export const createNodes: CreateNodes<CycloneUIFontPluginOptions> = [
  "fonts/**/project.json",
  async (configFiles, options, context): Promise<CreateNodesResultArray> =>
    createNodesFromFiles(
      configFile => {
        const projectRoot = dirname(configFile);
        const project = readJsonFile<ProjectConfiguration>(
          join(context.workspaceRoot, configFile)
        );
        // Each UFO directory contains the fontinfo.plist manifest Nx versions.
        const manifestRootsToUpdate = readdirSync(
          join(context.workspaceRoot, projectRoot),
          { withFileTypes: true }
        )
          .filter(entry => entry.isDirectory() && entry.name.endsWith(".ufo"))
          .map(entry => join(projectRoot, entry.name))
          .sort();

        return {
          projects: {
            [projectRoot]: {
              ...project,
              root: projectRoot,
              release: {
                ...project.release,
                version: {
                  currentVersionResolver: "git-tag",
                  fallbackCurrentVersionResolver: "disk",
                  manifestRootsToUpdate,
                  versionActions:
                    "tools/nx/src/release/font-version-actions.ts",
                  ...project.release?.version
                }
              },
              targets: {
                ...project.targets,
                clean: project.targets?.clean ?? {},
                build: project.targets?.build ?? {
                  cache: true,
                  inputs: ["{projectRoot}/**/*"],
                  outputs: [
                    "{projectRoot}/dist",
                    "{workspaceRoot}/dist/{projectRoot}"
                  ],
                  executor: "nx:run-commands",
                  dependsOn: ["clean"],
                  options: {
                    commands: [
                      "pnpm exec zx {projectRoot}/build.mjs",
                      'pnpm copyfiles --up=2 "{projectRoot}/dist/**/*" dist/{projectRoot}'
                    ],
                    parallel: false
                  }
                },
                "nx-release-publish": project.targets?.[
                  "nx-release-publish"
                ] ?? {
                  cache: false,
                  inputs: ["{projectRoot}/dist/**/*"],
                  dependsOn: ["build"],
                  executor: "@cyclone-ui/tools-nx:font-publish",
                  options: {}
                }
              }
            }
          }
        };
      },
      configFiles,
      options,
      context
    )
];

export const createNodesV2 = createNodes;
