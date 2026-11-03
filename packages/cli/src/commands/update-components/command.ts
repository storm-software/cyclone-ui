/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import type { CommandMetadata } from "@shell-shock/core";
import { resolve } from "node:path";
import { write } from "shell-shock:console";
import { COMPONENT_PROTECTION_RULE } from "../../utilities/agent-guidance";
import {
  applyInstallPlan,
  createInstallPlan,
  formatDiff,
  formatPlan
} from "../../utilities/components";
import { requireConfig } from "../../utilities/config";
import {
  normalizeComponentName,
  registryClient
} from "../../utilities/registry";

export const metadata = {
  title: "Update Components",
  description: `Updates installed components to the latest registry version. Local edits to their files are overwritten. ${COMPONENT_PROTECTION_RULE}`,
  icon: "⟳"
} satisfies CommandMetadata;

export interface UpdateComponentsOptions {
  /** The working directory. */
  cwd?: string;
  /** Preview changes without writing files. */
  dryRun?: boolean;
  /** Show the changes as a diff without writing files. */
  diff?: boolean;
  /** Mute non-essential output. */
  silent?: boolean;
  /** Override the configured registry URL. */
  registry?: string;
}

async function handler(
  options: UpdateComponentsOptions,
  /** Installed component names to update; defaults to every installed component. */
  components: string[] = []
) {
  const root = resolve(options.cwd ?? process.cwd());
  const config = await requireConfig(root);
  const installed = Object.keys(config.components);
  const requested =
    components.length > 0 ? components.map(normalizeComponentName) : installed;

  const missing = requested.filter(name => !config.components[name]);
  if (missing.length > 0) {
    throw new Error(
      `Not installed: ${missing.join(", ")}. Use "cyclone-ui add" instead.`
    );
  }
  if (requested.length === 0)
    throw new Error("No installed components to update.");

  const dryRun = options.dryRun || options.diff;
  const previous = Object.fromEntries(
    requested.map(name => [name, config.components[name]?.version])
  );
  const plan = await createInstallPlan(
    registryClient(options.registry ?? config.registry),
    config,
    requested,
    { root, overwrite: true, dryRun }
  );

  if (options.diff) {
    write(formatDiff(plan, root));
  } else if (!options.silent) {
    const versions = plan.components
      .map(component => {
        const name = normalizeComponentName(component.name);
        return name in previous && previous[name] !== component.version
          ? `${name} ${previous[name] ?? "?"} → ${component.version ?? "?"}`
          : null;
      })
      .filter(Boolean);
    write([...versions, formatPlan(plan, root)].join("\n"));
  }

  await applyInstallPlan(config, plan, { root, overwrite: true, dryRun });
}

export default handler;
