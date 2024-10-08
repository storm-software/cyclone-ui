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

import Build from "./commands/build";
import Get from "./commands/registry/get";
import Clean from "./commands/theme/clean";
import Init from "./commands/theme/init";
import initHook from "./hooks/init/init";

export const hooks = {
  init: initHook
}

export const commands = {
  build: Build,
  theme: {
    clean: Clean,
    init: Init
  },
  registry: {
    get: Get
  }
};
