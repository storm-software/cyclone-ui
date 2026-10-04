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

import type { ExecutorContext } from "@nx/devkit";
import { joinPathFragments } from "@nx/devkit";
import executor from "@storm-software/cloudflare-tools/executors/r2-upload-publish/executor";
import { getWorkspaceConfig } from "@storm-software/config-tools/get-config";
import {
  writeFatal,
  writeInfo,
  writeSuccess
} from "@storm-software/config-tools/logger/console";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import {
  consistentFontVersion,
  fontVersionToSemver
} from "../../release/font-version";
import type { FontPublishExecutorSchema } from "./schema";

export default async function runExecutor(
  options: FontPublishExecutorSchema,
  context: ExecutorContext
) {
  try {
    const config = await getWorkspaceConfig();
    const project = context.projectName
      ? context.projectsConfigurations?.projects?.[context.projectName]
      : undefined;
    if (!context.projectName || !project?.root) {
      throw new Error("The executor requires projectsConfigurations.");
    }

    const projectName = project.name ?? context.projectName;
    const projectRoot = joinPathFragments(context.root, project.root);
    const outputPath = joinPathFragments(projectRoot, "dist");
    if (!existsSync(outputPath)) {
      throw new Error(
        `The generated font output directory ${outputPath} does not exist. Run the ${projectName}:build target before publishing.`
      );
    }

    const manifests = readdirSync(projectRoot, { withFileTypes: true })
      .filter(entry => entry.isDirectory() && entry.name.endsWith(".ufo"))
      .map(entry => {
        const path = join(projectRoot, entry.name, "fontinfo.plist");

        return { path, content: readFileSync(path, "utf8") };
      });
    const fontVersion = fontVersionToSemver(
      await consistentFontVersion(manifests, projectName)
    );
    const packageVersion = JSON.parse(
      readFileSync(join(projectRoot, "package.json"), "utf8")
    ).version;
    if (packageVersion !== fontVersion) {
      throw new Error(
        `The ${projectName} package.json version ${packageVersion} does not match the fontinfo.plist version ${fontVersion}.`
      );
    }

    writeInfo(
      `Running Cyclone font publish executor on the ${projectName} project`,
      config
    );

    const result = await executor(
      {
        ...options,
        bucketId: "storm-cdn-cyclone-ui",
        bucketPath: "fonts",
        clean: false,
        path: outputPath,
        writeMetaJson: false
      },
      context
    );

    if (result.success) {
      writeSuccess(
        `Successfully uploaded the ${projectName} font to the Storm CDN`,
        config
      );
    }

    return result;
  } catch (error) {
    writeFatal(
      `An error occurred while running the font publish executor. \n${
        error instanceof Error ? error.message : String(error)
      }`
    );

    return { success: false };
  }
}
