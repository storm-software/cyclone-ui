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

import type { CommandMetadata } from "@shell-shock/core";
import { createPowerlines } from "../../utilities/create-powerlines";

export const metadata = {
  title: "Lint Source Code",
  description: "Lint the project's source code for style and syntax errors.",
  icon: "🗹"
} satisfies CommandMetadata;

export interface LintOptions {
  /**
   * The root directory of the project to lint. Defaults to the current working directory if not specified.
   *
   * @remarks
   * This option allows you to specify the base directory for the linting process, which can be useful if your project structure requires linting from a different location than the default. If not provided, Powerlines will use the current working directory as the root for the linting process.
   */
  root?: string;
}

async function handler(options: LintOptions) {
  const engine = await createPowerlines(options);
  await engine.lint(options);
}

export default handler;
