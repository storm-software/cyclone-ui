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

import ColorsClean from "./commands/colors/clean";
import ColorsGenerate from "./commands/colors/generate";
import Get from "./commands/components/get";
import ThemesClean from "./commands/themes/clean";
import ThemesGenerate from "./commands/themes/generate";

export const commands = {
  colors: {
    clean: ColorsClean,
    generate: ColorsGenerate
  },
  themes: {
    clean: ThemesClean,
    generate: ThemesGenerate
  },
  components: {
    get: Get
  }
};
