/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import type { CommandMetadata } from "@shell-shock/core";
import { resolve } from "node:path";
import { readRegistryManifest } from "../../../utilities/local-registry";

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
  console.log(`Registry is valid (${manifest.items.length} items).`);
}

export default handler;
