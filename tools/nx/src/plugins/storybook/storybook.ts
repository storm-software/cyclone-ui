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

import { CreateNodes } from "@nx/devkit";
import { globSync } from "glob";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import type { ProjectConfiguration } from "nx/src/config/workspace-json-project-json";
import { readJsonFile } from "nx/src/utils/fileutils";
import { type PackageJson } from "nx/src/utils/package-json";

export const name = "storm-software/cyclone-ui/storybook";

export const createNodes: CreateNodes = [
  "**/storybook/project.json",
  (file, _, ctx) => {
    // eslint-disable-next-line no-console
    console.log(`Running Cyclone UI Storybook plugin - ${file}`);

    try {
      const packageJson = createPackageJson(file, ctx.workspaceRoot);
      if (!packageJson) {
        return {};
      }

      let project = createProjectFromPackageJsonNextToProjectJson(
        file,
        packageJson
      );
      project ??= {
        root: dirname(file)
      };

      project.tags ??= [];
      project.tags.push("storybook");

      project.implicitDependencies ??= [];
      project.implicitDependencies.push(...getComponentProjectNames());

      return project.name
        ? {
            projects: {
              [project.name]: {
                ...project
              }
            }
          }
        : {};
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);

      return {};
    }
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
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);

    return null;
  }
}

function getComponentProjectNames(): string[] {
  try {
    const componentsGlob = "./components/**/project.json";
    const packageJsonPaths = globSync(componentsGlob, {
      ignore: ["**/node_modules/**"]
    });

    // eslint-disable-next-line no-console
    console.log(
      `Found ${packageJsonPaths.length} component project.json files in ${componentsGlob}`
    );

    return packageJsonPaths.map(packageJsonPath => {
      const jsonFile = readJsonFile(packageJsonPath) as PackageJson;
      return jsonFile.name;
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);

    return [];
  }
}
