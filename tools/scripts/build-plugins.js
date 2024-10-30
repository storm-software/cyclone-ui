/* eslint-disable no-undef */
import { build } from "esbuild";

build({
  entryPoints: ["tools/nx/src/plugins/components/index.ts"],
  outdir: "dist/plugins/components",
  tsconfig: "tools/nx/tsconfig.lib.json",
  packages: "external",
  logLevel: "silent",
  bundle: true,
  minify: false,
  outExtension: {
    ".js": ".js"
  },
  format: "cjs",
  platform: "node"
}).then(() => {
  console.log("Components plugin build completed...");

  build({
    entryPoints: ["tools/nx/src/plugins/storybook/index.ts"],
    outdir: "dist/plugins/storybook",
    tsconfig: "tools/nx/tsconfig.lib.json",
    packages: "external",
    logLevel: "silent",
    bundle: true,
    minify: false,
    outExtension: {
      ".js": ".js"
    },
    format: "cjs",
    platform: "node"
  }).then(() => {
    console.log("Storybook plugin build completed...");

    console.info("Cyclone-UI plugins built successfully");
  });
});
