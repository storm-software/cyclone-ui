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
import { rm } from "node:fs/promises";
import { resolve } from "node:path";
import { dim, gray, green, red, write } from "shell-shock:console";
import { COMPONENT_PROTECTION_RULE } from "../../utilities/agent-guidance";
import {
  applyInstallPlan,
  componentUpdateReports,
  createInstallPlan,
  formatDiff,
  formatUpdate
} from "../../utilities/components";
import { requireConfig, resolveInside } from "../../utilities/config";
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

  const dryRun = options.dryRun === true || options.diff === true;
  const plan = await createInstallPlan(
    registryClient(options.registry ?? config.registry),
    config,
    requested,
    { root, overwrite: true, dryRun }
  );
  const reports = componentUpdateReports(config, plan, root);

  if (options.diff) {
    write(formatDiff(plan, root));
  } else if (!options.silent) {
    write(formatUpdate(reports, { gray, green, red, dim }));
  }

  await applyInstallPlan(config, plan, { root, overwrite: true, dryRun });

  if (!dryRun) {
    const removed = reports.flatMap(report =>
      report.files
        .filter(file => file.status === "removed")
        .map(file => file.path)
    );
    await Promise.all(
      removed.map(async path => rm(resolveInside(root, path), { force: true }))
    );
  }
}

export default handler;
