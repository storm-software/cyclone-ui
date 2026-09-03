/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import type { CommandMetadata } from "@shell-shock/core";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import {
  applyInstallPlan,
  createInstallPlan
} from "../../utilities/components";
import {
  CONFIG_FILE,
  createConfig,
  pathExists,
  resolveInside,
  writeConfig
} from "../../utilities/config";
import { registryClient } from "../../utilities/registry";

export const metadata = {
  title: "Initialize",
  description: "Initialize Cyclone UI in a project.",
  alias: "create",
  icon: "🌀"
} satisfies CommandMetadata;

export interface InitOptions {
  /** The working directory. */
  cwd?: string;
  /** Component output path, relative to the working directory. */
  path?: string;
  /** Registry API URL. */
  registry?: string;
  /** Overwrite an existing Cyclone configuration. */
  force?: boolean;
  /** Mute non-essential output. */
  silent?: boolean;
}

async function handler(
  options: InitOptions,
  /** Components to install after initialization. */
  components: string[] = []
) {
  const root = resolve(options.cwd ?? process.cwd());
  const configPath = resolve(root, CONFIG_FILE);
  if ((await pathExists(configPath)) && !options.force) {
    throw new Error(
      `${CONFIG_FILE} already exists. Re-run with --force to replace it.`
    );
  }

  const config = createConfig({
    registry: options.registry,
    path: options.path
  });
  await mkdir(resolveInside(root, config.path), { recursive: true });

  if (components.length > 0) {
    const plan = await createInstallPlan(
      registryClient(config.registry),
      config,
      components,
      { root, overwrite: options.force }
    );
    await applyInstallPlan(config, plan, { root, overwrite: options.force });
  } else {
    await writeConfig(root, config);
  }

  if (!options.silent) console.log(`Initialized Cyclone UI in ${root}.`);
}

export default handler;
