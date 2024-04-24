import type { BuildOptions } from "@cyclone-ui/build";
import type { AssetGlob } from "@nx/js/src/utils/assets/assets";

export type BuildExecutorSchema = Partial<BuildOptions> & {
  assets?: AssetGlob[];
  generatePackageJson?: boolean;
};
