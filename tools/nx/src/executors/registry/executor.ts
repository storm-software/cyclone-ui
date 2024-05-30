import {
  ExecutorContext,
  ProjectGraph,
  ProjectGraphDependency,
  ProjectGraphProjectNode,
  joinPathFragments,
  readCachedProjectGraph,
  readJsonFile
} from "@nx/devkit";
import { RegistryExecutorSchema } from "./schema";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";
import { glob } from "glob";
import { readFile } from "fs/promises";

export default async function runExecutor(
  options: RegistryExecutorSchema,
  context: ExecutorContext
) {
  const {
    writeDebug,
    writeWarning,
    writeFatal,
    writeInfo,
    writeSuccess,
    writeTrace,
    findWorkspaceRoot,
    loadStormConfig
  } = await import("@storm-software/config-tools");

  try {
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

    const workspaceRoot = findWorkspaceRoot();

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
      `🚀  Running Cyclone Component Registry executor on the ${packageName} package`
    );

    const config = await loadStormConfig(workspaceRoot);
    writeTrace("Completed Loading Storm config", config);
    writeTrace(config, config);

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

    const endpoint = config.extensions?.cyclone?.registry
      ? config.extensions.cyclone.registry
      : `https://${config.cloudflareAccountId}.r2.cloudflarestorage.com`;

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

    writeInfo(
      `Publishing ${packageTxt} to the Cyclone Registry at ${endpoint}`
    );

    const s3Client = new S3Client({
      region: "auto",
      endpoint,
      credentials: {
        accessKeyId: process.env.CYCLONE_REGISTRY_ACCESS_KEY,
        secretAccessKey: process.env.CYCLONE_REGISTRY_SECRET_KEY
      }
    });

    const componentVersion = randomUUID();
    writeInfo(`Generated component version: ${componentVersion}`);

    const files = await glob(joinPathFragments(sourceRoot, "**/*"), {
      ignore: "**/{*.stories.tsx,index.ts}"
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

    const componentJson = JSON.stringify({
      name: projectName,
      version: componentVersion,
      description: projectPackageJson.description,
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

    writeInfo(`Generating component.json file: \n${componentJson}`);

    await uploadFile(
      s3Client,
      projectPath,
      "component.json",
      componentJson,
      componentVersion,
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
            fileContent,
            componentVersion,
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
  } catch (e) {
    writeFatal("An error occurred while running the executor.");

    console.error(e);
    return {
      success: false
    };
  }
}

const uploadFile = async (
  client: S3Client,
  projectPath: string,
  fileName: string,
  fileContent: string,
  version: string,
  contentType = "text/plain",
  isDryRun = false
) => {
  const { writeDebug, writeWarning } = await import(
    "@storm-software/config-tools"
  );

  const fileKey = `${projectPath}/${fileName.startsWith("/") ? fileName.substring(1) : fileName}`;
  writeDebug(`Uploading file: ${fileKey}`);

  if (!isDryRun) {
    await client.send(
      new PutObjectCommand({
        Bucket: "storm-cdn-cyclone-ui",
        Key: fileKey,
        Body: fileContent.replaceAll(' from "@cyclone-ui', ' from "./'),
        ContentType: contentType,
        Metadata: {
          "component-version": version
        }
      })
    );
  } else {
    writeWarning("Dry run: skipping upload to the Cyclone Registry.");
  }
};

const getInternalDependencies = (
  projectName: string,
  graph: ProjectGraph
): ProjectGraphProjectNode[] => {
  const allDeps = graph.dependencies[projectName] ?? [];

  return Array.from(
    allDeps.reduce(
      (acc: ProjectGraphProjectNode[], node: ProjectGraphDependency) => {
        const found = graph.nodes[node.target];
        if (found) acc.push(found);
        return acc;
      },
      []
    )
  );
};
