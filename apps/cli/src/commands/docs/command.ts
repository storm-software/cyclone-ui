/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { DEFAULT_REGISTRY_URL } from "@cyclone-ui/registry-api/client";
import type { CommandMetadata } from "@shell-shock/core";
import { resolve } from "node:path";
import { readConfig } from "../../utilities/config";
import {
  normalizeComponentName,
  registryClient
} from "../../utilities/registry";

export const metadata = {
  title: "Component Documentation",
  description: "Get documentation links for registry components.",
  icon: "🕮"
} satisfies CommandMetadata;

export interface DocsOptions {
  /** The working directory. */
  cwd?: string;
  /** Registry API URL. */
  registry?: string;
  /** Output machine-readable JSON. */
  json?: boolean;
}

async function handler(
  options: DocsOptions,
  /** Component names to document. */
  components: string[]
) {
  const root = resolve(options.cwd ?? process.cwd());
  const config = await readConfig(root);
  const client = registryClient(
    options.registry ?? config?.registry ?? DEFAULT_REGISTRY_URL
  );
  const result = await Promise.all(
    components.map(async name => {
      const component = await client.components.get.query(name);
      const normalizedName = normalizeComponentName(component.name);
      return {
        name: component.name,
        description: component.description,
        url: `https://docs.stormsoftware.com/projects/cyclone-ui/components/${normalizedName}`
      };
    })
  );

  console.log(
    options.json
      ? JSON.stringify(result, null, 2)
      : result.map(item => `${item.name}: ${item.url}`).join("\n")
  );
}

export default handler;
