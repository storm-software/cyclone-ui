/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import type { CommandMetadata } from "@shell-shock/core";
import { resolve } from "node:path";
import { success } from "shell-shock:console";
import buildTokens from "../build-tokens/command";

export const metadata = {
  title: "Build",
  description: "Generate design tokens and build the resulting Tamagui config.",
  icon: "🏗"
} satisfies CommandMetadata;

export interface BuildOptions {
  /** The working directory. */
  cwd?: string;
  /** Path to the Razorwind configuration file. */
  config?: string;
  /** Design token source path or glob. */
  tokens?: string;
  /** Output path for the generated Tamagui config. */
  output?: string;
}

async function handler(options: BuildOptions) {
  const root = resolve(options.cwd ?? process.cwd());
  const output = options.output ?? "tamagui.config.ts";
  await buildTokens({ ...options, cwd: root, output });

  // Use the same compiler as `tamagui generate`, without requiring its CLI.
  const { loadTamagui } = await import("@tamagui/static/loadTamagui");
  const result = await loadTamagui(
    {
      root,
      config: resolve(root, output),
      outputCSS: resolve(root, "tamagui.generated.css"),
      components: ["@tamagui/core"],
      platform: "web"
    },
    true
  );
  if (!result?.tamaguiConfig) {
    throw new Error(`Unable to build Tamagui config: ${resolve(root, output)}`);
  }

  success("Built Tamagui config and CSS.");
}

export default handler;
