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
  console.log("Cyclone-UI plugins built successfully");
});
