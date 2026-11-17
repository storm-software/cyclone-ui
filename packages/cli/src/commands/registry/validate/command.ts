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
import { readRegistryManifest } from "../../../utilities/local-registry";
import { success } from "shell-shock:console";

export const metadata = {
  title: "Validate Registry",
  description: "Validate a local registry manifest and its source files.",
  icon: "✓"
} satisfies CommandMetadata;

export interface ValidateOptions {
  /** The working directory. */
  cwd?: string;
}

async function handler(
  options: ValidateOptions,
  /** Registry manifest path. */
  registry: string = "registry.json"
) {
  const root = resolve(options.cwd ?? process.cwd());
  const manifest = await readRegistryManifest(resolve(root, registry));

  success(`Registry is valid (${manifest.items.length} items).`);
}

export default handler;
