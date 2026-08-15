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
import { joinPathFragments, readJsonFile } from "@nx/devkit";
import executor from "@storm-software/cloudflare-tools/executors/r2-upload-publish/executor";
import { getWorkspaceConfig } from "@storm-software/config-tools/get-config";
import {
  writeFatal,
  writeInfo,
  writeSuccess
} from "@storm-software/config-tools/logger/console";
import { existsSync } from "node:fs";
import type { ComponentPublishExecutorSchema } from "./schema";

export default async function runExecutor(
  options: ComponentPublishExecutorSchema,
  context: ExecutorContext
) {
  try {
    const config = await getWorkspaceConfig();
    if (
      !context.projectName ||
      !context.projectsConfigurations?.projects ||
      !context.projectsConfigurations.projects[context.projectName] ||
      !context.projectsConfigurations.projects[context.projectName]?.root
    ) {
      throw new Error("The executor requires projectsConfigurations.");
    }

    const packageRoot = joinPathFragments(
      context.root,
      context.projectsConfigurations.projects[context.projectName]
        ?.root as string
    );

    const sourceRoot = context.projectsConfigurations.projects[
      context.projectName
    ]?.sourceRoot as string;
    if (!sourceRoot) {
      throw new Error(
        `The project ${context.projectName} does not have a sourceRoot defined in its configuration.`
      );
    }

    const projectName =
      context.projectsConfigurations.projects[context.projectName]?.name ??
      context.projectName;
    if (!projectName) {
      throw new Error(
        `The project ${context.projectName} does not have a name defined in its configuration.`
      );
    }

    if (!existsSync(joinPathFragments(packageRoot, "package.json"))) {
      throw new Error(
        `The project ${context.projectName} does not have a package.json file in its root.`
      );
    }

    const packageJson = readJsonFile(
      joinPathFragments(packageRoot, "package.json")
    );

    writeInfo(
      `🚀  Running Cyclone Component Registry executor on the ${
        projectName
      } package`,
      config
    );

    const result = await executor(
      {
        ...options,
        writeMetaJson: true,
        bucketId: "cyclone-ui-registry",
        bucketPath: `registry/components/${projectName}/${packageJson.version}`,
        path: joinPathFragments(context.root, sourceRoot)
      },
      context
    );
    if (result.success) {
      writeSuccess(
        `Successfully uploaded the ${projectName} component to the Cyclone Registry`,
        config
      );
    }

    return result;
  } catch (error) {
    writeFatal(
      `An error occurred while running the component registry publish executor. \n${error.message}`
    );

    return {
      success: false
    };
  }
}

// const uploadFile = async (
//   client: S3Client,
//   projectPath: string,
//   fileName: string,
//   version: string,
//   fileContent: string,
//   contentType = "text/plain",
//   isDryRun = false
// ) => {
//   const { writeDebug, writeWarning } =
//     await import("@storm-software/config-tools");

//   const checksum = createHash("sha256").update(fileContent).digest("base64");
//   const fileKey = `${projectPath}/${fileName.startsWith("/") ? fileName.slice(1) : fileName}`;
//   writeDebug(`Uploading file: ${fileKey}`);

//   if (isDryRun) {
//     writeWarning("Dry run: skipping upload to the Cyclone Registry.");
//   } else {
//     await client.send(
//       new PutObjectCommand({
//         Bucket: "storm-cdn-cyclone-ui",
//         Key: fileKey,
//         Body: fileContent.replaceAll(' from "@cyclone-ui/', ' from "../'),
//         ContentType: contentType,
//         Metadata: {
//           version,
//           checksum
//         }
//       })
//     );
//   }
// };

// const getInternalDependencies = (
//   projectName: string,
//   graph: ProjectGraph
// ): ProjectGraphProjectNode[] => {
//   const allDeps = graph.dependencies[projectName] ?? [];

//   return [
//     ...allDeps.reduce(
//       (acc: ProjectGraphProjectNode[], node: ProjectGraphDependency) => {
//         const found = graph.nodes[node.target];
//         if (found) acc.push(found);
//         return acc;
//       },
//       []
//     )
//   ];
// };
