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

import { getStormConfig } from "@storm-software/eslint";

export default getStormConfig({
  name: "cyclone-ui",
  rules: {
    // "unicorn/no-null": 0,
    // "unicorn/no-useless-switch-case": 0,
    "no-undef": 0,
    "no-unused-vars": "warn",
    // "unicorn/consistent-function-scoping": 0,
    "class-methods-use-this": 0,
    "operator-linebreak": 0,
    "indent": 0,
    "function-paren-newline": 0,
    "space-before-function-paren": 0
  },
  markdown: false,
  react: true,
  tsConfigType: "recommended",
  useUnicorn: true
});
