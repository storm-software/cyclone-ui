/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { DEFAULT_REGISTRY_URL } from "@cyclone-ui/registry-api/client";
import type { CommandMetadata } from "@shell-shock/core";
import { resolve } from "node:path";
import { readConfig } from "../../utilities/config";
import { registryClient } from "../../utilities/registry";

export const metadata = {
  title: "View Registry Components",
  description: "View component metadata and files from the registry.",
  icon: "◉"
} satisfies CommandMetadata;

export interface ViewOptions {
  /** The working directory. */
  cwd?: string;
  /** Registry API URL. */
  registry?: string;
}

async function handler(
  options: ViewOptions,
  /** Component names to view. */
  components: string[]
) {
  const root = resolve(options.cwd ?? process.cwd());
  const config = await readConfig(root);
  const client = registryClient(
    options.registry ?? config?.registry ?? DEFAULT_REGISTRY_URL
  );
  console.log(
    JSON.stringify(
      await Promise.all(
        components.map(component => client.components.get.query(component))
      ),
      null,
      2
    )
  );
}

export default handler;
