import eslintPlugin from "eslint-plugin-storm-software";

export default [
  ...eslintPlugin?.configs?.base,
  {
    plugins: {
      "storm-software": eslintPlugin
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        project: "./tsconfig.json"
      }
    }
  }
];
