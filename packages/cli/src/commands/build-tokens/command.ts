/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { generate } from "@cyclone-ui/theme-builder";
import {
  generatePluginDocuments,
  isEmptyTokens,
  prepareSpec,
  resolveConfig,
  writeGeneratedDocuments
} from "@razorwind/core";
import type { CommandMetadata } from "@shell-shock/core";
import { relative, resolve } from "node:path";
import { success, writeLine } from "shell-shock:console";

export const metadata = {
  title: "Build Tokens",
  description: "Generate a Tamagui config file from design tokens.",
  icon: "🏗"
} satisfies CommandMetadata;

export interface BuildTokensOptions {
  /** The working directory. */
  cwd?: string;
  /** Path to the Razorwind configuration file. */
  config?: string;
  /** Design token source path or glob (overrides the configured `tokensPath`). */
  tokens?: string;
  /** Output path for the generated Tamagui config. */
  output?: string;
}

async function handler(options: BuildTokensOptions) {
  const root = resolve(options.cwd ?? process.cwd());
  const config = await resolveConfig(root, {
    configFile: options.config,
    mode: "production"
  });

  // Razorwind lets config-file paths win over passed options, so override afterwards.
  if (options.tokens) {
    config.tokensPath = options.tokens;
  }
  // Keep the configured preprocessors, but only run the Cyclone Tamagui generator.
  config.plugins = [
    ...config.plugins.filter(plugin => !plugin.generate),
    generate({ outputPath: options.output ?? "tamagui.config.ts" })
  ];

  const spec = await prepareSpec({ cwd: root, options: config } as Parameters<
    typeof prepareSpec
  >[0]);
  if (isEmptyTokens(spec.tokens)) {
    throw new Error(
      "No design tokens found. Pass --tokens or set `tokensPath` in razorwind.config.ts."
    );
  }

  const files = await writeGeneratedDocuments(
    await generatePluginDocuments(spec, config),
    root
  );
  for (const file of files) {
    writeLine(relative(root, file));
  }
  success(`Generated ${files.length} files.`);
}

export default handler;
