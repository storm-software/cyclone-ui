import { config } from "../../packages/config/src/tamagui.config";
import { createTamagui } from "../../packages/theme-helpers/src/create-tamagui";

const tamaguiConf = createTamagui(config);

export type Conf = typeof tamaguiConf;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConf;
