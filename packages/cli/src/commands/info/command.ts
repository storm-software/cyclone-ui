/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import type { CommandMetadata } from "@shell-shock/core";
import { resolve } from "node:path";
import { write, writeLine } from "shell-shock:console";
import { COMPONENT_PROTECTION_INSTRUCTIONS } from "../../utilities/agent-guidance";
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
    style: config ? (config.style ?? "tamagui") : null,
    componentPath: config ? resolve(root, config.path) : null,
    components: config?.components ?? {},
    agentInstructions: COMPONENT_PROTECTION_INSTRUCTIONS
  };

  if (options.json) {
    write(JSON.stringify(data, null, 2));
    return;
  }

  writeLine(`Project: ${data.root}`);
  writeLine(`Configuration: ${data.configFile ?? "not initialized"}`);
  writeLine(`Agent instructions: ${data.agentInstructions}`);
  if (config) {
    writeLine(`Registry: ${config.registry}`);
    writeLine(`Style: ${data.style}`);
    writeLine(
      `Components: ${Object.keys(config.components).join(", ") || "none"}`
    );
  }
}

export default handler;
