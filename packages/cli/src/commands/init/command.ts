/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import type { CommandMetadata } from "@shell-shock/core";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { success, writeLine } from "shell-shock:console";
import { COMPONENT_PROTECTION_RULE } from "../../utilities/agent-guidance";
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
import { setupTailwind } from "../../utilities/tailwind";

export const metadata = {
  title: "Initialize",
  description: `Initialize Cyclone UI in a project. ${COMPONENT_PROTECTION_RULE}`,
  alias: "create",
  icon: "🌀"
} satisfies CommandMetadata;

export interface InitOptions {
  /** The working directory. */
  cwd?: string;
  /** Component output path, relative to the working directory. */
  path?: string;
  /** Registry URL. */
  registry?: string;
  /** Enable React Server Component support in components.json. */
  rsc?: boolean;
  /** Component styling: Tamagui style props, or `@tamagui/tailwind` class names where a component provides them. */
  style?: "tamagui" | "tailwind";
  /** The app stylesheet that imports `tailwindcss`, relative to the working directory. With the `tailwind` style, the Cyclone UI Tailwind theme is imported there. Common locations are tried when omitted. */
  css?: string;
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
    path: options.path,
    rsc: options.rsc,
    style: options.style
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

  // Tailwind classes need Tamagui's CSS layered below Tailwind utilities and
  // the Cyclone theme names available to Tailwind.
  const tailwind =
    config.style === "tailwind"
      ? await setupTailwind(root, options.css)
      : undefined;

  if (!options.silent) {
    success(`Initialized Cyclone UI in ${root}.`);
    for (const file of tailwind?.updated ?? []) {
      writeLine(`Set up Tailwind CSS in ${file}.`);
    }
    for (const step of tailwind?.todo ?? []) {
      writeLine(`To do: ${step}`);
    }
  }
}

export default handler;
