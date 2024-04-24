import type { type BuildOptions } from "@cyclone-ui/build";

export type BuildExecutorSchema = Partial<BuildOptions> & {
  assets?: AssetGlob[];
  generatePackageJson?: boolean;
  includeSrc?: boolean;
};
