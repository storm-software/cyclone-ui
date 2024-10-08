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

import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import type { ProjectConfiguration } from "nx/src/config/workspace-json-project-json";
import { readJsonFile } from "nx/src/utils/fileutils";
import {
  readTargetsFromPackageJson,
  type PackageJson
} from "nx/src/utils/package-json";

export const name = "storm-software/cyclone-ui/components";

export const createNodes = [
  "components/**/project.json",
  (file, _, ctx) => {
    const packageJson = createPackageJson(file, ctx.workspaceRoot);
    if (!packageJson) {
      return {};
    }

    const project = createProjectFromPackageJsonNextToProjectJson(
      file,
      packageJson
    );
    const nxJson = readJsonFile(join(ctx.workspaceRoot, "nx.json"));
    const targets: ProjectConfiguration["targets"] = readTargetsFromPackageJson(
      packageJson,
      nxJson
    );

    if (!targets.lint) {
      targets.lint = {
        cache: true,
        inputs: ["default"],
        dependsOn: ["^lint"],
        executor: "@nx/eslint:lint",
        outputs: ["{options.outputFile}"],
        options: {
          format: "stylish",
          fix: true,
          cache: true,
          errorOnUnmatchedPattern: false,
          printConfig: true
        }
      };
    }

    // Apply nx-release-publish target for non-private projects
    const isPrivate = packageJson.private ?? false;
    if (!isPrivate) {
      targets["nx-release-publish"] = {
        cache: false,
        inputs: ["default", "^production"],
        dependsOn: ["build", "^nx-release-publish"],
        executor: "@cyclone-ui/tools-nx:component-publish",
        options: {}
      };
    }

    const implicitDependencies = project?.implicitDependencies ?? [];
    implicitDependencies.push("tools-nx");

    return project?.name
      ? {
          projects: {
            [project.name]: {
              tags: ["component"],
              ...project,
              targets,
              implicitDependencies,
              release: {
                ...project?.release,
                version: {
                  ...project?.release?.version,
                  generator: "@storm-software/workspace-tools:release-version"
                }
              }
            }
          }
        }
      : {};
  }
];

function createProjectFromPackageJsonNextToProjectJson(
  projectJsonPath: string,
  packageJson: PackageJson
): ProjectConfiguration {
  const { nx, name } = packageJson;
  const root = dirname(projectJsonPath);

  return {
    ...nx,
    name,
    root,
    targets: {}
  } as ProjectConfiguration;
}

function createPackageJson(
  projectJsonPath: string,
  workspaceRoot: string
): PackageJson | null {
  try {
    const root = dirname(projectJsonPath);
    const packageJsonPath = join(workspaceRoot, root, "package.json");
    if (!existsSync(packageJsonPath)) {
      return null;
    }

    return readJsonFile(packageJsonPath) as PackageJson;
  } catch (error_) {
    // eslint-disable-next-line no-console
    console.log(error_);
    return null;
  }
}
