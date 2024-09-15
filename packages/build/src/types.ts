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

export type BuildOptions = {
  projectRoot: string;
  outputPath: string;
  jsOnly?: boolean;
  skipTypes?: boolean;
  skipInitialTypes?: boolean;
  skipJS?: boolean;
  skipMjs?: boolean;
  bundle?: boolean;
  bundleNodeModules?: boolean;
  clean?: boolean;
  cleanBuildOnly?: boolean;
  watch?: boolean;
  declarationToRoot?: boolean;
  ignoreBaseUrl?: boolean;
  minify?: boolean;
  baseUrl?: string;
  tsConfig: string;
  exclude?: string | RegExp;
  verbose?: boolean;
};
