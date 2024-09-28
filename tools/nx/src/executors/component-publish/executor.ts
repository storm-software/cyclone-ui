/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import {
  DeleteObjectsCommand,
  ListObjectsCommand,
  PutObjectCommand,
  S3Client
} from "@aws-sdk/client-s3";
import {
  ExecutorContext,
  joinPathFragments,
  ProjectGraph,
  ProjectGraphDependency,
  ProjectGraphProjectNode,
  readCachedProjectGraph,
  readJsonFile
} from "@nx/devkit";
import { glob } from "glob";
import { execSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { ComponentPublishExecutorSchema } from "./schema";

export default async function runExecutor(
  options: ComponentPublishExecutorSchema,
  context: ExecutorContext
) {
  const {
    writeWarning,
    writeFatal,
    writeInfo,
    writeSuccess,
    writeTrace,
    writeDebug,
    findWorkspaceRoot,
    loadStormConfig
  } = await import("@storm-software/config-tools");

  try {
    const workspaceRoot = findWorkspaceRoot();
    const config = await loadStormConfig(workspaceRoot);

    if (!context.projectName) {
      throw new Error("The executor requires a projectName.");
    }

    if (
      !context.projectName ||
      !context.projectsConfigurations?.projects ||
      !context.projectsConfigurations.projects[context.projectName] ||
      !context.projectsConfigurations.projects[context.projectName]?.root
    ) {
      throw new Error("The executor requires projectsConfigurations.");
    }

    const packageRoot =
      joinPathFragments(
        context.root,
        context.projectsConfigurations.projects[context.projectName]
          ?.root as string
      ) ?? workspaceRoot;

    const sourceRoot =
      context.projectsConfigurations.projects[context.projectName]
        ?.sourceRoot ?? workspaceRoot;
    const projectName =
      context.projectsConfigurations.projects[context.projectName]?.name ??
      context.projectName;

    const packageJsonPath = joinPathFragments(packageRoot, "package.json");
    const projectPackageJson = readJsonFile(packageJsonPath);
    const packageName = projectPackageJson.name;

    writeInfo(
      `🚀  Running Cyclone Component Registry executor on the ${packageName} package`,
      config
    );

    writeTrace("Completed Loading Storm config", config);

    /**
     * We need to check both the env var and the option because the executor may have been triggered
     * indirectly via dependsOn, in which case the env var will be set, but the option will not.
     */
    const isDryRun =
      process.env.NX_DRY_RUN === "true" || options.dryRun || false;

    // If package and project name match, we can make log messages terser
    const packageTxt =
      packageName === context.projectName
        ? `package "${packageName}"`
        : `package "${packageName}" from project "${context.projectName}"`;

    // if (projectPackageJson.private === true) {
    //   writeWarning(
    //     `Skipped ${packageTxt}, because it has \`"private": true\` in ${packageJsonPath}`
    //   );
    //   return new Promise(resolve => resolve({ success: true }));
    // }

    if (!config.extensions?.cyclone?.registry && !config.cloudflareAccountId) {
      throw new Error(
        "The Cyclone Registry URL is not set in the Storm config. Please set either the `extensions.cyclone.registry` or `config.extensions.cyclone.accountId` property in the Storm config."
      );
    }

    const endpoint =
      config.extensions?.cyclone?.registry ||
      `https://${config.cloudflareAccountId}.r2.cloudflarestorage.com`;
    if (!process.env.CYCLONE_REGISTRY_ACCESS_KEY) {
      throw new Error(
        "The Cyclone Registry Access Key is not set. Please set the `CYCLONE_REGISTRY_ACCESS_KEY` environment variable."
      );
    }
    if (!process.env.CYCLONE_REGISTRY_SECRET_KEY) {
      throw new Error(
        "The Cyclone Registry Secret Key is not set. Please set the `CYCLONE_REGISTRY_SECRET_KEY` environment variable."
      );
    }

    const projectGraph = readCachedProjectGraph();
    if (!projectGraph) {
      throw new Error("No project graph found in cache");
    }

    writeDebug(
      `Publishing ${packageTxt} to the Cyclone Registry at ${endpoint}`,
      config
    );

    const s3Client = new S3Client({
      region: "auto",
      endpoint,
      credentials: {
        accessKeyId: process.env.CYCLONE_REGISTRY_ACCESS_KEY,
        secretAccessKey: process.env.CYCLONE_REGISTRY_SECRET_KEY
      }
    });

    const version = projectPackageJson.version;
    writeDebug(`Generated component version: ${version}`, config);

    const files = await glob(joinPathFragments(sourceRoot, "**/*"), {
      ignore: "**/{*.stories.tsx,*.stories.ts,*.spec.tsx,*.spec.ts}"
    });
    const projectPath = `registry/components/${projectName}`;

    const internalDependencies = await getInternalDependencies(
      projectName,
      projectGraph as ProjectGraph
    );

    const dependencies = internalDependencies
      .filter(
        projectNode =>
          !projectNode.data.tags ||
          projectNode.data.tags.every(tag => tag.toLowerCase() !== "component")
      )
      .reduce((ret, dep) => {
        if (!ret[dep.name]) {
          ret[dep.name] = "latest";
        }

        return ret;
      }, projectPackageJson.dependencies ?? {});

    const release =
      options.tag ?? execSync("npm config get tag").toString().trim();

    writeDebug(`Clearing out existing items in ${projectPath}`, config);

    if (isDryRun) {
      writeWarning("Dry run: skipping upload to the Cyclone Registry.", config);
    } else {
      const response = await s3Client.send(
        new ListObjectsCommand({
          Bucket: "cyclone-ui-registry",
          Prefix: projectPath
        })
      );

      if (response?.Contents && response.Contents.length > 0) {
        writeDebug(
          `Deleting the following existing items from the component registry: ${response.Contents.map(item => item.Key).join(", ")}`,
          config
        );

        await Promise.all(
          response.Contents.map(item =>
            s3Client.send(
              new DeleteObjectsCommand({
                Bucket: "cyclone-ui-registry",
                Delete: {
                  Objects: [
                    {
                      Key: item.Key
                    }
                  ],
                  Quiet: false
                }
              })
            )
          )
        );
      } else {
        writeDebug(
          `No existing items to delete in the component registry path ${projectPath}`,
          config
        );
      }
    }

    const metaJson = JSON.stringify({
      name: projectName,
      version,
      release,
      description: projectPackageJson.description,
      tags: projectPackageJson.keywords,
      dependencies,
      devDependencies: projectPackageJson.devDependencies,
      internalDependencies: internalDependencies
        .filter(
          projectNode =>
            projectNode.data.tags &&
            projectNode.data.tags.some(tag => tag.toLowerCase() === "component")
        )
        .map(dep => dep.name)
    });

    writeDebug(`Generating meta.json file: \n${metaJson}`, config);

    await uploadFile(
      s3Client,
      projectPath,
      "meta.json",
      version,
      metaJson,
      "application/json",
      isDryRun
    );

    await Promise.all(
      files.map(file => {
        const fileName = file
          .replaceAll("\\", "/")
          .replace(sourceRoot.replaceAll("\\", "/"), "");

        return readFile(file, { encoding: "utf8" }).then(fileContent =>
          uploadFile(
            s3Client,
            projectPath,
            fileName,
            version,
            fileContent,
            "text/plain",
            isDryRun
          )
        );
      })
    );

    writeSuccess(
      `Successfully uploaded the ${projectName} component to the Cyclone Registry`,
      config
    );

    return {
      success: true
    };
  } catch (error) {
    writeFatal(
      `An error occurred while running the component registry publish executor. \n${error.message}`
    );

    return {
      success: false
    };
  }
}

const uploadFile = async (
  client: S3Client,
  projectPath: string,
  fileName: string,
  version: string,
  fileContent: string,
  contentType = "text/plain",
  isDryRun = false
) => {
  const { writeDebug, writeWarning } = await import(
    "@storm-software/config-tools"
  );

  const checksum = createHash("sha256").update(fileContent).digest("base64");
  const fileKey = `${projectPath}/${fileName.startsWith("/") ? fileName.slice(1) : fileName}`;
  writeDebug(`Uploading file: ${fileKey}`);

  if (isDryRun) {
    writeWarning("Dry run: skipping upload to the Cyclone Registry.");
  } else {
    await client.send(
      new PutObjectCommand({
        Bucket: "storm-cdn-cyclone-ui",
        Key: fileKey,
        Body: fileContent.replaceAll(' from "@cyclone-ui/', ' from "../'),
        ContentType: contentType,
        Metadata: {
          version,
          checksum
        }
      })
    );
  }
};

const getInternalDependencies = (
  projectName: string,
  graph: ProjectGraph
): ProjectGraphProjectNode[] => {
  const allDeps = graph.dependencies[projectName] ?? [];

  return [
    ...allDeps.reduce(
      (acc: ProjectGraphProjectNode[], node: ProjectGraphDependency) => {
        const found = graph.nodes[node.target];
        if (found) acc.push(found);
        return acc;
      },
      []
    )
  ];
};
