import { getStormConfig } from "@storm-software/eslint";

export default getStormConfig({
  name: "cyclone-ui",
  rules: {
    "unicorn/no-null": 0,
    "unicorn/no-useless-switch-case": 0,
    "no-undef": 0,
    "no-unused-vars": "warn",
    "unicorn/consistent-function-scoping": 0,
    "class-methods-use-this": 0,
    "operator-linebreak": 0,
    "indent": 0,
    "function-paren-newline": 0,
    "space-before-function-paren": 0
  },
  markdown: false
});
