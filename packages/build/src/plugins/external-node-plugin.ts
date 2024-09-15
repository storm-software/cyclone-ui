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

// Must not start with "/" or "./" or "../"
const NON_NODE_MODULE_RE = /^[^./]|^\.[^./]|^\.\.[^/]/;

const plugin = ({
  patterns,
  skipNodeModulesBundle,
  disabled
}: {
  patterns?: string[] | RegExp[];
  skipNodeModulesBundle?: boolean;
  disabled?: boolean;
}) => {
  return {
    name: "external",
    setup(build) {
      if (disabled) return;
      if (skipNodeModulesBundle) {
        build.onResolve({ filter: NON_NODE_MODULE_RE }, args => ({
          path: args.path,
          external: true
        }));
      }

      if (!patterns || patterns.length === 0) return;
      build.onResolve({ filter: /.*/ }, (args: { path: string }) => {
        const external = patterns.some(p => {
          if (p instanceof RegExp) {
            return p.test(args.path);
          }
          return args.path === p;
        });

        if (external) {
          return { path: args.path, external };
        }

        return { path: args.path, external: undefined };
      });
    }
  };
};

export default plugin;
