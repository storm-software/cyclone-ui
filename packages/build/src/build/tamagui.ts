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

/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

import esbuild, { BuildOptions as ESBuildOptions, SameShape } from "esbuild";
import { es5Plugin } from "esbuild-plugin-es5";
import { glob } from "fast-glob";
import {
  copy,
  ensureDir,
  move,
  pathExists,
  readFile,
  readJSONSync,
  remove,
  writeFile
} from "fs-extra";
import debounce from "lodash.debounce";
import { dirname, join } from "node:path";
// import { readTSConfig } from "pkg-types";
import { transform } from "@babel/core";
import type { StormConfig } from "@storm-software/config";
import {
  getStopwatch,
  run,
  writeError,
  writeSuccess,
  writeTrace,
  writeWarning
} from "@storm-software/config-tools";
import { register as registerTsConfigPaths } from "tsconfig-paths";
import alias from "../plugins/esbuild-alias-plugin";
import createExternalPlugin from "../plugins/external-node-plugin";
import { BuildOptions } from "../types";

// import merge from "deepmerge";

// const jsOnly = !!process.env.JS_ONLY;
// const skipJS = !!(process.env.SKIP_JS || false);
// const shouldSkipTypes = !!(
//   process.argv.includes("--skip-types") || process.env.SKIP_TYPES
// );
// const shouldSkipMJS = !!process.argv.includes("--skip-mjs");
// const shouldBundle = !!process.argv.includes("--bundle");
// const shouldBundleNodeModules = !!process.argv.includes("--bundle-modules");
// const shouldClean = !!process.argv.includes("clean");
// const shouldCleanBuildOnly = !!process.argv.includes("clean:build");
// const shouldWatch = process.argv.includes("--watch");
// const declarationToRoot = !!process.argv.includes("--declaration-root");
// const ignoreBaseUrl = process.argv.includes("--ignore-base-url");
// const baseUrlIndex = process.argv.indexOf("--base-url");
// const tsProjectIndex = process.argv.indexOf("--ts-project");
// const excludeIndex = process.argv.indexOf("--exclude");
// const baseUrl =
//   baseUrlIndex > -1 && process.argv[baseUrlIndex + 1]
//     ? process.argv[baseUrlIndex + 1]
//     : ".";
// const tsProject =
//   tsProjectIndex > -1 && process.argv[tsProjectIndex + 1]
//     ? process.argv[tsProjectIndex + 1]
//     : null;

// const exclude =
//   excludeIndex > -1 && process.argv[excludeIndex + 1]
//     ? process.argv[excludeIndex + 1]
//     : null;

export const correctPaths = (path?: string): string => {
  if (!path) {
    return "";
  }

  // Handle Windows absolute paths
  if (path?.toUpperCase()?.startsWith("C:")) {
    return path.replaceAll("/", "\\");
  }

  return path.replaceAll("\\", "/");
};

export const build = async (
  config: StormConfig,
  {
    projectRoot,
    outputPath: _outputPath,
    jsOnly,
    skipTypes,
    skipInitialTypes: _skipInitialTypes,
    skipJS,
    skipMjs,
    bundle,
    bundleNodeModules,
    clean,
    cleanBuildOnly,
    watch,
    declarationToRoot,
    ignoreBaseUrl,
    minify,
    baseUrl,
    tsConfig: _tsConfig,
    exclude,
    verbose = false
  }: BuildOptions
) => {
  writeTrace("Running the Cyclone-Tamagui build...", config);

  const compilerOptions = readJSONSync(
    join(config.workspaceRoot ?? "./", "tsconfig.base.json")
  ).compilerOptions;
  registerTsConfigPaths(compilerOptions);
  process.chdir(config.workspaceRoot);

  const outputPath = _outputPath.replaceAll("\\", "/");
  // const projectRoot = join(config.workspaceRoot, _projectRoot);
  const tsConfig = _tsConfig.replaceAll("\\", "/");
  let skipInitialTypes = _skipInitialTypes;
  const pkg = readJSONSync(join(projectRoot, "./package.json"));
  const pkgMain = pkg.main;
  const pkgSource = projectRoot
    ? join(projectRoot, "src/index.ts")
    : pkg.source || process.cwd();
  const bundleNative = pkg.tamagui?.["bundle.native"];
  const bundleNativeTest = pkg.tamagui?.["bundle.native.test"];
  const pkgModule = pkg.module;
  const pkgModuleJSX = pkg["module:jsx"];
  const pkgTypes = Boolean(pkg.types || pkg.typings);
  const pkgRemoveSideEffects = pkg.removeSideEffects || false;

  const flatOut =
    [pkgMain, pkgModule, pkgModuleJSX].filter(Boolean).length === 1;

  const replaceRNWeb = {
    esm: {
      from: 'from "react-native"',
      to: 'from "react-native-web"'
    },
    cjs: {
      from: 'require("react-native")',
      to: 'require("react-native-web")'
    }
  };

  async function handleClean() {
    try {
      await Promise.allSettled([
        remove(outputPath),
        remove(join(projectRoot, ".turbo")),
        remove(join(projectRoot, ".ultra.cache.json")),
        remove(join(projectRoot, "dist")),
        remove(join(projectRoot, "types"))
      ]);
    } catch {
      // ok
    }
    if (cleanBuildOnly) {
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(0);
    }
  }

  async function handleBuild(opts?: { skipTypes: boolean }) {
    writeTrace(`Starting the "${pkg.name}" build...`, config);

    try {
      const start = Date.now();
      await Promise.all([opts?.skipTypes ? null : buildTsc(), buildJs()]);
      console.info("built", pkg.name, "in", Date.now() - start, "ms");
    } catch (error) {
      console.error("Error building:", error.message);
    }

    writeSuccess(`Completed the "${pkg.name}" build...`, config);
  }

  async function buildTsc() {
    writeTrace(`Starting the "${pkg.name}" TSC build...`, config);

    if (!pkgTypes) {
      return;
    }
    if (jsOnly ?? skipTypes) {
      return;
    }
    if (skipInitialTypes) {
      skipInitialTypes = false;
      return;
    }

    const targetDir = join(outputPath, "types").replaceAll("\\", "/");
    try {
      // typescripts build cache messes up when doing declarationOnly
      await remove(join(projectRoot, "tsconfig.tsbuildinfo"));
      await ensureDir(targetDir);

      const declarationToRootFlag = declarationToRoot
        ? " --declarationDir ./"
        : "";
      const baseUrlFlag = ignoreBaseUrl ? "" : ""; // ` --baseUrl "${baseUrl ? baseUrl : config.workspaceRoot}" `;
      const tsProjectFlag = tsConfig
        ? "" // ` --project "${join(config.workspaceRoot, tsConfig)}" `
        : "";
      const cmd = `npx tsc${baseUrlFlag}${tsProjectFlag} --rootDir "src" ${declarationToRootFlag} --outDir "types" --emitDeclarationOnly --declarationMap`;

      console.info("\u001B[2m$", cmd);

      await run(config, cmd, projectRoot);

      try {
        await move(join(projectRoot, "types"), targetDir, { overwrite: true });
      } catch {
        await copy(join(projectRoot, "types"), targetDir, { overwrite: true });
        await remove(join(projectRoot, "types"));
      }

      writeSuccess(`Completed the "${pkg.name}" TSC build...`, config);
    } catch (error_) {
      writeError(`Failed to complete the "${pkg.name}" TSC build...`, config);
      writeError(error_.message, config);

      if (!watch) {
        // eslint-disable-next-line unicorn/no-process-exit
        process.exit(1);
      }
    } finally {
      await remove(join(projectRoot, "tsconfig.tsbuildinfo"));
    }
  }

  async function buildJs() {
    writeTrace(`Starting the "${pkg.name}" JS build...`, config);

    if (skipJS) {
      return;
    }

    const files = bundle
      ? [pkgSource || "./src/index.ts"]
      : (
          await glob([
            join(projectRoot, "**/*.(m)?[jt]s(x)?"),
            join(projectRoot, "**/*.css")
          ])
        ).filter(
          x =>
            !x.includes(".d.ts") &&
            (exclude ? !new RegExp(exclude).test(x) : true) &&
            !new RegExp(join(projectRoot, ".tamagui/**/*")).test(x) &&
            !new RegExp(join(projectRoot, "dist/**/*")).test(x)
        );

    const externalPlugin = createExternalPlugin({
      skipNodeModulesBundle: true
    });
    const external = bundle ? ["@swc/*", "*.node"] : undefined;

    const esbuildBundleProps = (
      bundleNative || bundleNativeTest
        ? {
            entryPoints: [bundleNative],
            bundle: true,
            plugins: [
              alias({
                "@tamagui/web": require.resolve("@tamagui/web/native"),
                ...(!bundleNativeTest && {
                  "react-native": require.resolve("@tamagui/fake-react-native"),
                  "react-native/Libraries/Renderer/shims/ReactFabric":
                    require.resolve("@tamagui/fake-react-native"),
                  "react-native/Libraries/Renderer/shims/ReactNative":
                    require.resolve("@tamagui/fake-react-native")
                }),
                "react-native/Libraries/Pressability/Pressability":
                  require.resolve("@tamagui/fake-react-native"),
                "react-native/Libraries/Pressability/usePressability":
                  require.resolve("@tamagui/fake-react-native/idFn"),
                "react-native-safe-area-context": require.resolve(
                  "@tamagui/fake-react-native"
                ),
                "react-native-gesture-handler": require.resolve(
                  "@tamagui/proxy-worm"
                )
              })
            ],
            external: [
              "react",
              "react-dom",
              bundleNativeTest ? "react-native" : undefined
            ].filter(Boolean),
            resolveExtensions: [
              ".native.ts",
              ".native.tsx",
              ".native.js",
              ".ts",
              ".tsx",
              ".js",
              ".jsx"
            ],
            minify: Boolean(minify),
            define: {
              "process.env.TAMAGUI_IS_CORE_NODE": '"1"'
            }
          }
        : {}
    ) as ESBuildOptions;

    const stopwatch = getStopwatch("Javascript Build");

    const cjsConfig = {
      format: "cjs",
      entryPoints: files,
      outdir: flatOut ? "dist" : "dist/cjs",
      bundle,
      external,
      plugins: bundleNodeModules ? [] : [externalPlugin],
      minify: Boolean(minify),
      platform: "node"
    };

    const esmConfig = {
      format: "esm",
      entryPoints: files,
      outdir: flatOut ? "dist" : "dist/esm",
      bundle,
      external,
      allowOverwrite: true,
      minify: Boolean(minify)
    };

    if (pkgSource) {
      try {
        const contents = await readFile(pkgSource);
        if (contents.slice(0, 40).includes("GITCRYPT")) {
          // encrypted file, ignore
          console.info("This package is encrypted, skipping");
          return;
        }
      } catch {
        // ok
      }
    }

    await Promise.all([
      // web output to cjs
      pkgMain
        ? esbuildWriteIfChanged(cjsConfig as ESBuildOptions, {
            platform: "web"
          })
        : null,

      // native output to cjs
      pkgMain
        ? esbuildWriteIfChanged(cjsConfig as ESBuildOptions, {
            platform: "native"
          })
        : null,

      // for tests to load native-mode from node
      bundleNative
        ? esbuildWriteIfChanged(
            {
              ...esbuildBundleProps,
              outfile: "dist/native.js"
            } as ESBuildOptions,
            {
              platform: "native"
            }
          )
        : null,

      // for tests to load native-mode from node
      bundleNativeTest
        ? esbuildWriteIfChanged(
            {
              ...esbuildBundleProps,
              outfile: "dist/test.js"
            } as ESBuildOptions,
            {
              platform: "native",
              env: "test"
            }
          )
        : null,

      // web output to esm
      pkgModule
        ? esbuildWriteIfChanged(esmConfig as ESBuildOptions, {
            platform: "web",
            mjs: true
          })
        : null,

      // native output to esm
      pkgModule
        ? esbuildWriteIfChanged(esmConfig as ESBuildOptions, {
            platform: "native"
          })
        : null,

      // jsx web
      pkgModuleJSX
        ? esbuildWriteIfChanged(
            {
              // only diff is jsx preserve and outdir
              jsx: "preserve",
              outdir: flatOut ? "dist" : "dist/jsx",
              entryPoints: files,
              bundle,
              allowOverwrite: true,
              target: "esnext",
              format: "esm",
              minify: Boolean(minify),
              platform: "neutral"
            },
            {
              platform: "web",
              mjs: true
            }
          )
        : null,

      // jsx native
      pkgModuleJSX
        ? esbuildWriteIfChanged(
            {
              // only diff is jsx preserve and outdir
              jsx: "preserve",
              outdir: flatOut ? "dist" : "dist/jsx",
              entryPoints: files,
              bundle,
              allowOverwrite: true,
              target: "node16",
              format: "esm",
              minify: Boolean(minify),
              platform: "neutral"
            },
            {
              platform: "native"
            }
          )
        : null
    ]).then(() => {
      writeSuccess(`Completed the "${pkg.name}" JS build...`, config);
      stopwatch();
    });
  }

  async function esbuildWriteIfChanged(
    opts: ESBuildOptions,
    context: { platform: string; env?: string; mjs?: boolean }
  ) {
    writeTrace(`Starting the "${pkg.name}" ESBuild write...`, config);

    const mjs = context.mjs ?? false;
    const platform = context.platform ?? "web";
    const env = context.env ?? "production";

    if (!watch && !platform) {
      return esbuild.build(opts);
    }

    // const tsConfigs = await Promise.all([
    //   await readTSConfig(
    //     join(config.workspaceRoot, dirname(tsConfig)).replaceAll("/", "\\"),
    //     {
    //       cache: true
    //     }
    //   ),
    //   await readTSConfig(config.workspaceRoot, {
    //     cache: true
    //   })
    // ]);
    // const tsconfigRaw = merge(tsConfigs[0], tsConfigs[1]);
    // const tsconfigBaseRaw = await readTSConfig(config.workspaceRoot, {
    //   cache: true
    // });
    // const buildOutputPath = correctPaths(
    //   opts.outdir ? join(outputPath, opts.outdir) : outputPath
    // );

    const nativeEsbuildSettings = {
      target: "node16",
      supported: {
        "logical-assignment": false
      },
      jsx: "automatic",
      platform: "node"
    };

    const webEsbuildSettings = {
      target: "esnext",
      jsx: "automatic",
      platform: bundle ? "node" : "neutral",
      tsconfigRaw: {
        compilerOptions: {
          baseUrl: "./",
          paths: {
            "react-native": ["react-native-web"]
          }
        }
      }
    } as ESBuildOptions;

    const buildSettings = {
      ...opts,
      plugins: [
        ...(opts.plugins ?? []),
        ...(platform === "native"
          ? [
              es5Plugin({
                swc: {
                  jsc: {
                    preserveAllComments: true,
                    externalHelpers: false,
                    transform: {
                      react: {
                        runtime: "automatic",
                        development: false
                      }
                    }
                  }
                }
              })
            ]
          : [])
      ].filter(Boolean),

      treeShaking: true,
      minifySyntax: true,
      // minifyIdentifiers: true,
      write: false,
      color: true,
      allowOverwrite: true,
      keepNames: false,
      sourcemap: true,
      sourcesContent: false,
      logLevel: verbose ? "verbose" : "error",
      ...(platform === "native" && nativeEsbuildSettings),
      ...(platform === "web" && webEsbuildSettings),
      define: {
        ...(platform && {
          "process.env.TAMAGUI_TARGET": `"${platform}"`
        }),
        ...(env && {
          "process.env.NODE_ENV": `"${env}"`
        }),
        ...opts.define
      }
    } as SameShape<ESBuildOptions, ESBuildOptions>;

    const built = await esbuild.build(buildSettings);
    if (!built.outputFiles) {
      writeWarning(`No output files generated for "${pkg.name}"...`, config);
      return null;
    }

    writeTrace(
      `Writing files: \n${built.outputFiles.map(outputFile => outputFile.path).join(", \n")}\n`,
      config
    );

    const nativeFilesMap = Object.fromEntries(
      built.outputFiles.flatMap(p => {
        if (p.path.includes(".native.js")) {
          return [[p.path, true]];
        }

        return [];
      })
    );

    return Promise.all(
      built.outputFiles.map(async file => {
        let outPath = file.path;

        if (outPath.endsWith(".js") || outPath.endsWith(".js.map")) {
          const [_, extPlatform] =
            outPath.match(
              /(?<temp2>web|native|ios|android)\.js(?<temp1>\.map)?$/
            ) ?? [];

          if (platform === "native") {
            if (
              !extPlatform &&
              nativeFilesMap[outPath.replace(".js", ".native.js")]
            ) {
              // if native exists, avoid outputting non-native
              return null;
            }

            if (extPlatform === "web") {
              return null;
            }
            if (!extPlatform) {
              outPath = outPath.replace(".js", ".native.js");
            }
          }

          if (
            platform === "web" &&
            (extPlatform === "native" ||
              extPlatform === "android" ||
              extPlatform === "ios")
          ) {
            return null;
          }
        }

        await ensureDir(dirname(outPath));
        let outString = new TextDecoder().decode(file.contents);

        if (platform === "web") {
          const rnWebReplacer = opts.format
            ? replaceRNWeb[opts.format]
            : undefined;
          if (rnWebReplacer) {
            outString = outString.replaceAll(
              rnWebReplacer.from,
              rnWebReplacer.to
            );
          }
        }

        if (
          pkgRemoveSideEffects &&
          (buildSettings.target === "esm" || buildSettings.target === "esnext")
        ) {
          const allowedSideEffects = pkg.sideEffects || [];

          const result = [] as string[];
          const lines = outString.split("\n");
          for (const line of lines) {
            if (
              !line.startsWith("import ") ||
              allowedSideEffects.some(allowed => line.includes(allowed))
            ) {
              result.push(line);
            } else {
              result.push(line.replace(/import "[^"]+";/g, ""));
            }
          }

          // match whitespace to preserve sourcemaps
          outString = result.join("\n");
        }

        async function flush(contents, path) {
          if (watch) {
            if (
              !(await pathExists(path)) ||
              (await readFile(path, "utf8")) !== contents
            ) {
              await writeFile(path, contents);
            }
          } else {
            await writeFile(path, contents);
          }
        }

        return Promise.all([
          flush(outString, outPath),
          (async () => {
            const shouldDoMJS =
              !skipMjs &&
              (buildSettings.target === "esm" ||
                buildSettings.target === "esnext") &&
              mjs &&
              outPath.endsWith(".js");
            if (shouldDoMJS) {
              // if bundling no need to specify as its all internal
              // and babel is bad on huge bundled files
              await flush(
                bundle
                  ? outString
                  : transform(outString, {
                      filename: outPath.replace(".js", ".mjs"),
                      configFile: false,
                      plugins: [
                        [
                          require.resolve("babel-plugin-fully-specified"),
                          {
                            // this doesn't work because the files don't exist as you build in random orders
                            // ensureFileExists: true,
                            esExtensionDefault: ".mjs",
                            tryExtensions: [".mjs", ".js"],
                            esExtensions: [".mjs", ".js"]
                          }
                        ]
                        // pkg.tamagui?.build?.skipEnvToMeta
                        //   ? null
                        //   : require.resolve('./babel-plugin-process-env-to-meta'),
                      ].filter(Boolean)
                    }).code,
                outPath.replace(".js", ".mjs")
              );
            }
          })()
        ]);
      })
    );
  }

  if (clean ?? cleanBuildOnly) {
    writeTrace(`Cleaning the "${pkg.name}" package...`, config);
    await handleClean();
  }

  if (watch) {
    writeTrace(`Watching the "${pkg.name}" package...`, config);

    process.env.IS_WATCHING = true as any;
    process.env.DISABLE_AUTORUN = true as any;
    const rebuild = debounce(await handleBuild, 100);
    const chokidar = await import("chokidar");

    // do one js build but not types
    await handleBuild({
      skipTypes: true
    });

    chokidar
      // prevent infinite loop but cause race condition if you just build directly
      .watch("src", {
        persistent: true,
        alwaysStat: true,
        ignoreInitial: true
      })
      .on("change", rebuild)
      .on("add", rebuild);
  } else {
    writeTrace(`Building the "${pkg.name}" package...`, config);

    await handleBuild();

    writeSuccess(`Completed the "${pkg.name}" build...`, config);
  }
};
