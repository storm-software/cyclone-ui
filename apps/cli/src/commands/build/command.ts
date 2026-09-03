/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import type { CommandMetadata } from "@shell-shock/core";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import {
  buildRegistry,
  readRegistryManifest
} from "../../utilities/local-registry";

export const metadata = {
  title: "Build Registry",
  description: "Build registry item JSON files for distribution.",
  icon: "🏗"
} satisfies CommandMetadata;

export interface BuildOptions {
  /** The working directory. */
  cwd?: string;
  /** Output directory. */
  output?: string;
}

async function handler(
  options: BuildOptions,
  /** Registry manifest path. */
  registry: string = "registry.json"
) {
  const root = resolve(options.cwd ?? process.cwd());
  const manifest = await readRegistryManifest(resolve(root, registry));
  const files = await buildRegistry(
    root,
    manifest,
    options.output ?? "public/r"
  );
  for (const file of files) {
    await mkdir(dirname(file.path), { recursive: true });
    await writeFile(file.path, file.content, "utf8");
  }
  console.log(`Built ${files.length} registry items.`);
}

export default handler;
