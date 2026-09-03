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
import {
  applyInstallPlan,
  createInstallPlan,
  formatDiff,
  formatPlan
} from "../../utilities/components";
import { requireConfig } from "../../utilities/config";
import { registryClient } from "../../utilities/registry";

export const metadata = {
  title: "Add",
  description: "Adds a new component to the project.",
  icon: "➕"
} satisfies CommandMetadata;

export interface AddOptions {
  /** The working directory. */
  cwd?: string;
  /** Overwrite existing files. */
  overwrite?: boolean;
  /** Add every available component. */
  all?: boolean;
  /** Override the configured component output path. */
  path?: string;
  /** Preview changes without writing files. */
  dryRun?: boolean;
  /** Show the changes as a diff without writing files. */
  diff?: boolean;
  /** Show resolved file contents without writing files. */
  view?: boolean;
  /** Mute non-essential output. */
  silent?: boolean;
  /** Override the configured registry API URL. */
  registry?: string;
}

async function handler(
  options: AddOptions,
  /** Component names to add. */
  components: string[] = []
) {
  const root = resolve(options.cwd ?? process.cwd());
  const config = await requireConfig(root);
  const client = registryClient(options.registry ?? config.registry);
  const requested = options.all
    ? (await client.components.list.query()).map(component => component.name)
    : components;

  if (requested.length === 0) {
    throw new Error("Provide at least one component or use --all.");
  }

  const dryRun = options.dryRun || options.diff || options.view;
  const plan = await createInstallPlan(client, config, requested, {
    root,
    path: options.path,
    overwrite: options.overwrite,
    dryRun
  });

  if (options.diff) {
    console.log(formatDiff(plan, root));
  } else if (options.view) {
    console.log(
      plan.files.map(file => `// ${file.path}\n${file.content}`).join("\n\n")
    );
  } else if (!options.silent) {
    console.log(formatPlan(plan, root));
  }

  await applyInstallPlan(config, plan, {
    root,
    path: options.path,
    overwrite: options.overwrite,
    dryRun
  });
}

export default handler;
