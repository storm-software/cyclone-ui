import { dirname, join } from "node:path";
import { existsSync } from "node:fs";
import type { ProjectConfiguration } from "nx/src/config/workspace-json-project-json";
import { readJsonFile } from "nx/src/utils/fileutils";
import {
  type PackageJson,
  readTargetsFromPackageJson
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
    const targets: ProjectConfiguration["targets"] =
      readTargetsFromPackageJson(packageJson);

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

    targets.registry = {
      executor: "@cyclone-ui/tools-nx:registry"
    };

    return project?.name
      ? {
          projects: {
            [project.name]: {
              tags: ["component"],
              ...project,
              targets
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
  } catch (e) {
    console.log(e);
    return null;
  }
}