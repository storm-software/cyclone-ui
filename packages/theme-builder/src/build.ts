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

import {
  generatePluginDocuments,
  isEmptyTokens,
  prepareSpec,
  resolveConfig,
  writeGeneratedDocuments
} from "@razorwind/core";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import generate from "./generate";
import preprocessor from "./preprocessor";

export interface BuildTamaguiConfigOptions {
  /**
   * The design tokens: a DTCG token object, or token file path(s) or globs
   * relative to `cwd`. Theme-named files (`light.tokens.json`,
   * `dark.tokens.json`, …) become the `light` / `dark` themes.
   */
  tokens: string | string[] | Record<string, unknown>;

  /**
   * The project root.
   *
   * @defaultValue `process.cwd()`
   */
  cwd?: string;

  /**
   * The generated config file, relative to `cwd`.
   *
   * @defaultValue `".cyclone-ui/tamagui.config.ts"`
   */
  outputPath?: string;
}

/**
 * Generate a Tamagui config from design tokens, the same way
 * `@cyclone-ui/tokens` builds its own.
 *
 * @remarks
 * Tokens go through the Cyclone UI preprocessor (state variants, focus rings)
 * and the Cyclone Tamagui generator. The config imports its media, shorthands,
 * settings and animations from `@cyclone-ui/tokens/tamagui-defaults`, so the
 * app only needs `@cyclone-ui/tokens` and `@tamagui/core` to load it. A
 * `razorwind.config.ts` in `cwd` still applies (fonts, extract plugins), but
 * its generators don't run.
 *
 * @returns The absolute path of the generated config.
 */
export async function buildTamaguiConfig({
  tokens,
  cwd = process.cwd(),
  outputPath = ".cyclone-ui/tamagui.config.ts"
}: BuildTamaguiConfigOptions): Promise<string> {
  const root = resolve(cwd);
  const config = await resolveConfig(root, { mode: "production" });

  // Razorwind lets config-file paths win over passed options, so override
  // afterwards. Inline tokens are written to a file because the preprocessor
  // only runs while Razorwind loads token files.
  if (typeof tokens === "object" && !Array.isArray(tokens)) {
    const tokensFile = join(dirname(resolve(root, outputPath)), "tokens.json");
    await mkdir(dirname(tokensFile), { recursive: true });
    await writeFile(tokensFile, JSON.stringify(tokens), "utf8");
    config.tokensPath = tokensFile;
  } else {
    config.tokensPath = tokens;
  }
  config.tokens = undefined;
  config.plugins = [
    preprocessor(),
    ...config.plugins.filter(
      plugin =>
        !plugin.generate && plugin.name !== "cyclone-ui:tamagui-preprocessor"
    ),
    generate({
      outputPath,
      animations: false,
      importConfig: "@cyclone-ui/tokens/tamagui-defaults"
    })
  ];

  const spec = await prepareSpec({ cwd: root, options: config } as Parameters<
    typeof prepareSpec
  >[0]);
  if (isEmptyTokens(spec.tokens)) {
    throw new Error(
      `No design tokens found in ${JSON.stringify(config.tokensPath)}.`
    );
  }

  await writeGeneratedDocuments(
    await generatePluginDocuments(spec, config),
    root
  );

  return resolve(root, outputPath);
}
