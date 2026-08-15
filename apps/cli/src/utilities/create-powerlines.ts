/* -------------------------------------------------------------------

                   🗲 Storm Software - Powerlines

 This code was released as part of the Powerlines project. Powerlines
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/powerlines.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/powerlines
 Documentation:            https://docs.stormsoftware.com/projects/powerlines
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import {
  createPowerlines as createEngine,
  EngineOptions
} from "powerlines/engine";
import packageJson from "../../package.json" with { type: "json" };

/**
 * Creates a new {@link PowerlinesEngine} instance.
 *
 * @remarks
 * This function serves as a convenient wrapper around the {@link createEngine} function from the `powerlines` package. It initializes the Powerlines engine with the provided options and logs a message indicating that the engine is running, along with its version number. The version is retrieved from the `package.json` file, ensuring that it reflects the actual version of the Powerlines CLI being used. This function abstracts away some of the setup details and provides a more streamlined way to create and initialize the Powerlines engine for use in CLI commands and other utilities within the Powerlines project.
 *
 * @param options - The user configuration options.
 * @returns A promise that resolves to a {@link PowerlinesEngine} instance.
 */
export async function createPowerlines(
  options: Omit<EngineOptions, "framework">
) {
  const engine = await createEngine(options);

  engine.context.info(
    `🔌 Powerlines Engine v${packageJson.version || "1.0.0"} is running...`
  );

  return engine;
}
