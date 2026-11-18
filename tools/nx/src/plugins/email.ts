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
import { dirname } from "node:path";

export const name = "storm-software/cyclone-ui/email";

export interface CycloneUIEmailPluginOptions {}

// Publishes the React Email components to the public registry as one `email`
// item, which `cyclone-ui add email` installs.
export const createNodesV2: CreateNodes<CycloneUIEmailPluginOptions> = [
  "email/project.json",
  async (configFiles, options, context): Promise<CreateNodesResultArray> =>
    createNodesFromFiles(
      configFile => {
        const root = dirname(configFile);

        return {
          projects: {
            [root]: {
              root,
              // There is no `dist` package.json to version
              release: {
                version: { manifestRootsToUpdate: ["{projectRoot}"] }
              },
              targets: {
                "nx-release-publish": {
                  cache: false,
                  inputs: [
                    "default",
                    "{workspaceRoot}/packages/tokens/src/tailwindcss/*.css"
                  ],
                  dependsOn: [],
                  executor: "@cyclone-ui/tools-nx:component-publish",
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
