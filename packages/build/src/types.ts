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
