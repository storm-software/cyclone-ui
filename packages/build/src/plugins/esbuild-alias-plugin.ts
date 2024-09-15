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

const plugin = (config: any) => {
  const alias = config && Object.keys(config);
  return {
    name: "path-alias",

    setup(build) {
      if (!alias || alias.length === 0) {
        return;
      }
      const main = (k, args) => {
        const targetPath = config[k].replace(/\/$/, "");
        return {
          path: targetPath
        };
      };

      for (const k of alias) {
        build.onResolve({ filter: new RegExp(`^.*${k}$`) }, args => {
          return main(k, args);
        });
        build.onResolve({ filter: new RegExp(`^.*\\/${k}\\/.*$`) }, args => {
          return main(k, args);
        });
      }
    }
  };
};

export default plugin;
