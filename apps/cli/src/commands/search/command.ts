/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { DEFAULT_REGISTRY_URL } from "@cyclone-ui/registry-api/client";
import { type CommandMetadata } from "@shell-shock/core";
import { resolve } from "node:path";
import { readConfig } from "../../utilities/config";
import { registryClient } from "../../utilities/registry";

export const metadata = {
  title: "Search Registry",
  description: "Search components in the Cyclone registry.",
  alias: "list",
  icon: "⌕"
} satisfies CommandMetadata;

export interface SearchOptions {
  /** The working directory. */
  cwd?: string;
  /** Text to match against names, descriptions, and tags. */
  query?: string;
  /** Maximum number of results. */
  limit?: number;
  /** Number of results to skip. */
  offset?: number;
  /** Output machine-readable JSON. */
  json?: boolean;
  /** Registry API URL. */
  registry?: string;
}

async function handler(options: SearchOptions) {
  const root = resolve(options.cwd ?? process.cwd());
  const config = await readConfig(root);
  const components = await registryClient(
    options.registry ?? config?.registry ?? DEFAULT_REGISTRY_URL
  ).components.list.query();
  const query = options.query?.toLowerCase();
  const offset = Math.max(0, options.offset ?? 0);
  const limit = Math.max(0, options.limit ?? 100);
  const filtered = components
    .filter(component =>
      query
        ? [component.name, component.description, ...component.tags]
            .join(" ")
            .toLowerCase()
            .includes(query)
        : true
    )
    .slice(offset, offset + limit);

  console.log(
    options.json
      ? JSON.stringify(filtered, null, 2)
      : filtered
          .map(
            component =>
              `${component.name.padEnd(28)} ${component.version ?? "-"}  ${component.description}`
          )
          .join("\n")
  );
}

export default handler;
