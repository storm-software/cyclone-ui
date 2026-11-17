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
import { write } from "shell-shock:console";
import { COMPONENT_PROTECTION_RULE } from "../../utilities/agent-guidance";
import { requireConfig } from "../../utilities/config";
import { collectComponents } from "../../utilities/gc";

export const metadata = {
  title: "Garbage Collection",
  description: `Remove files and empty folders not tracked in components.json from the configured components directory. If file tracking is incomplete, clear the directory and reinstall all installed components from the registry, overwriting local edits. Use --dry-run to preview. ${COMPONENT_PROTECTION_RULE}`,
  icon: "♲",
  tags: ["Utility"],
  alias: ["garbage-collection"]
} satisfies CommandMetadata;

export interface GcOptions {
  /** The working directory. */
  cwd?: string;
  /** Preview deletions and any reinstall without changing files. */
  dryRun?: boolean;
  /** Mute non-essential output. */
  silent?: boolean;
  /** Override the registry URL used when reinstalling components. */
  registry?: string;
}

async function handler(options: GcOptions) {
  const root = resolve(options.cwd ?? process.cwd());
  const config = await requireConfig(root);
  await collectComponents(config, {
    root,
    dryRun: options.dryRun,
    registry: options.registry,
    report: message => {
      if (!options.silent) write(message);
    }
  });
}

export default handler;
