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
import { resolve } from "node:path";
import { write } from "shell-shock:console";
import { COMPONENT_PROTECTION_RULE } from "../../utilities/agent-guidance";
import { readConfig } from "../../utilities/config";
import { DEFAULT_REGISTRY_URL, registryClient } from "../../utilities/registry";

export const metadata = {
  title: "View Registry Components",
  description: `View component metadata and files from the registry. ${COMPONENT_PROTECTION_RULE}`,
  icon: "◉"
} satisfies CommandMetadata;

export interface ViewOptions {
  /** The working directory. */
  cwd?: string;
  /** Registry URL. */
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
  write(
    JSON.stringify(
      await Promise.all(
        components.map(async component => client.components.get.query(component))
      ),
      null,
      2
    )
  );
}

export default handler;
