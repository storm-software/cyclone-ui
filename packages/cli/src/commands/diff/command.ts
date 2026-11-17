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


import type { CommandMetadata } from "@shell-shock/core";
import { resolve } from "node:path";
import { createInstallPlan, formatDiff } from "../../utilities/components";
import { requireConfig } from "../../utilities/config";
import { registryClient } from "../../utilities/registry";
import { write } from "shell-shock:console";

export const metadata = {
  title: "Diff Components",
  description: "Compare installed components with the registry.",
  icon: "±"
} satisfies CommandMetadata;

export interface DiffOptions {
  /** The working directory. */
  cwd?: string;
  /** Registry URL. */
  registry?: string;
}

async function handler(
  options: DiffOptions,
  /** Installed component names to compare. */
  components: string[] = []
) {
  const root = resolve(options.cwd ?? process.cwd());
  const config = await requireConfig(root);
  const requested =
    components.length > 0 ? components : Object.keys(config.components);
  if (requested.length === 0)
    throw new Error("No installed components to compare.");

  const plan = await createInstallPlan(
    registryClient(options.registry ?? config.registry),
    config,
    requested,
    { root, overwrite: true, dryRun: true }
  );
  write(formatDiff(plan, root));
}

export default handler;
