/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import type { CommandMetadata } from "@shell-shock/core";
import { resolve } from "node:path";
import { CONFIG_FILE, readConfig } from "../../utilities/config";

export const metadata = {
  title: "Project Information",
  description:
    "Show Cyclone UI project configuration and installed components.",
  icon: "ⓘ"
} satisfies CommandMetadata;

export interface InfoOptions {
  /** The working directory. */
  cwd?: string;
  /** Output machine-readable JSON. */
  json?: boolean;
}

async function handler(options: InfoOptions) {
  const root = resolve(options.cwd ?? process.cwd());
  const config = await readConfig(root);
  const data = {
    root,
    configFile: config ? resolve(root, CONFIG_FILE) : null,
    registry: config?.registry ?? null,
    componentPath: config ? resolve(root, config.path) : null,
    components: config?.components ?? {}
  };

  if (options.json) {
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  console.log(`Project: ${data.root}`);
  console.log(`Configuration: ${data.configFile ?? "not initialized"}`);
  if (config) {
    console.log(`Registry: ${config.registry}`);
    console.log(
      `Components: ${Object.keys(config.components).join(", ") || "none"}`
    );
  }
}

export default handler;
