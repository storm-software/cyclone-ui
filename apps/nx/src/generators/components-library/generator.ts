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
  ensurePackage,
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  offsetFromRoot,
  updateJson,
  writeJson,
  type Tree
} from "@nx/devkit";
import { determineProjectNameAndRootOptions } from "@nx/devkit/src/generators/project-name-and-root-utils";
import { Bundler } from "@nx/js/src/utils/schema";
import type { StormConfig } from "@storm-software/config";
import {
  typeScriptLibraryGeneratorFn,
  withRunGenerator
} from "@storm-software/workspace-tools";
import type {
  TypeScriptLibraryGeneratorNormalizedSchema,
  TypeScriptLibraryGeneratorSchema
} from "@storm-software/workspace-tools/declarations";
import type { PackageJson } from "@storm-stack/types";
import type { ComponentsLibraryGeneratorSchema } from "./schema";

export async function generatorFn(
  tree: Tree,
  schema: ComponentsLibraryGeneratorSchema,
  config?: StormConfig
) {
  const filesDir = joinPathFragments(__dirname, "./files");
  const tsLibraryGeneratorOptions: TypeScriptLibraryGeneratorSchema = {
    ...schema,
    platform: "browser",
    devDependencies: {
      react: "18.3.1",
      "react-dom": "18.3.1",
      "react-native": "0.73.2"
    },
    peerDependencies: {
      react: "18.3.1",
      "react-dom": "18.3.1",
      "react-native": "0.73.2"
    }
  };

  const options = await normalizeOptions(tree, tsLibraryGeneratorOptions);
  const { className, name, propertyName } = names(
    options.projectNames.projectFileName
  );

  generateFiles(tree, filesDir, options.projectRoot, {
    buildable: "none",
    bundler: "none",
    hasUnitTestRunner: "none",
    publishable: false,
    ...schema,
    dot: ".",
    className,
    name,
    namespace: config?.namespace ?? "storm-software",
    description: schema.description ?? "",
    propertyName,
    js: Boolean(options.js),
    cliCommand: "nx",
    strict: undefined,
    tmpl: "",
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    tsConfigOptions: {
      compilerOptions: {
        jsx: "react-jsx",
        types: [
          "node",
          "@nx/react/typings/cssmodule.d.ts",
          "@nx/react/typings/image.d.ts"
        ]
      }
    }
  });

  await typeScriptLibraryGeneratorFn(tree, tsLibraryGeneratorOptions);

  const packageJsonPath = joinPathFragments(
    options.projectRoot,
    "package.json"
  );
  if (tree.exists(packageJsonPath)) {
    updateJson<PackageJson>(tree, packageJsonPath, (json: PackageJson) => {
      return {
        ...json,
        sideEffects: ["*.css"],
        type: "module",
        exports: {
          "./package.json": "./package.json",
          ".": {
            types: "./types/index.d.ts",
            import: "./dist/esm/index.mjs",
            require: "./dist/cjs/index.js",
            "react-native": "./dist/cjs/index.native.js"
          }
        },
        dependencies: {
          "@cyclone-ui/animations": "latest",
          "@cyclone-ui/font-mona-sans": "latest",
          "@cyclone-ui/font-permanent-marker": "latest",
          "@cyclone-ui/font-space-grotesk": "latest",
          "@cyclone-ui/media-queries": "latest",
          "@cyclone-ui/shorthands": "latest",
          "@cyclone-ui/themes": "latest",
          "@tamagui/web": "^1.110.5",
          ...json.dependencies
        },
        main: "dist/cjs",
        module: "dist/esm",
        types: "./types/index.d.ts",
        files: ["types", "src", "dist"],
        "module:jsx": "dist/jsx"
      } as unknown as PackageJson;
    });
  } else {
    writeJson<PackageJson>(tree, packageJsonPath, {
      name: options.importPath,
      version: "0.0.1",
      description: schema.description ?? "",
      private: !options.publishable || options.rootProject,
      sideEffects: ["*.css"],
      type: "module",
      exports: {
        "./package.json": "./package.json",
        ".": {
          types: "./types/index.d.ts",
          import: "./dist/esm/index.mjs",
          require: "./dist/cjs/index.js",
          "react-native": "./dist/cjs/index.native.js"
        }
      },
      dependencies: {
        "@cyclone-ui/animations": "latest",
        "@cyclone-ui/font-mona-sans": "latest",
        "@cyclone-ui/font-permanent-marker": "latest",
        "@cyclone-ui/font-space-grotesk": "latest",
        "@cyclone-ui/media-queries": "latest",
        "@cyclone-ui/shorthands": "latest",
        "@cyclone-ui/themes": "latest",
        "@tamagui/web": "^1.110.5"
      },
      main: "dist/cjs",
      module: "dist/esm",
      types: "./types/index.d.ts",
      files: ["types", "src", "dist"],
      "module:jsx": "dist/jsx",
      publishConfig: {
        access: "public"
      }
    } as unknown as PackageJson);
  }

  await formatFiles(tree);

  return null;
}

export default withRunGenerator<ComponentsLibraryGeneratorSchema>(
  "Cyclone-UI Components Library Creator",
  generatorFn
);

export async function normalizeOptions(
  tree: Tree,
  options: TypeScriptLibraryGeneratorSchema
): Promise<TypeScriptLibraryGeneratorNormalizedSchema> {
  if (options.publishable && !options.importPath) {
    throw new Error(
      'For publishable libs you have to provide a proper "--importPath" which needs to be a valid npm package name (e.g. my-awesome-lib or @myorg/my-lib)'
    );
  }

  let bundler: Bundler = "tsc";
  if (options.publishable === false && options.buildable === false) {
    bundler = "none";
  }

  const { Linter } = ensurePackage("@nx/eslint", "^18.3.4");
  const {
    projectName,
    names: projectNames,
    projectRoot,
    importPath
  } = await determineProjectNameAndRootOptions(tree, {
    name: options.name,
    projectType: "library",
    directory: options.directory,
    importPath: options.importPath,
    projectNameAndRootFormat: options.projectNameAndRootFormat,
    rootProject: options.rootProject,
    callingGenerator: "@nx/js:library"
  });
  options.rootProject = projectRoot === ".";

  const normalized = names(projectNames.projectFileName);
  const fileName = normalized.fileName;

  return {
    js: false,
    pascalCaseFiles: false,
    skipFormat: false,
    skipTsConfig: false,
    includeBabelRc: false,
    unitTestRunner: "jest",
    linter: Linter.EsLint,
    testEnvironment: "node",
    config: "project",
    compiler: "tsc",
    bundler,
    skipTypeCheck: false,
    minimal: false,
    ...options,
    fileName,
    name: projectName,
    projectNames,
    projectRoot,
    parsedTags: options.tags ? options.tags.split(",").map(s => s.trim()) : [],
    importPath
  };
}
