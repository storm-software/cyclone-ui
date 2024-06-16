import eslintPlugin from "@storm-software/eslint-plugin";

export default [
  ...eslintPlugin.configs.recommended,
  ...eslintPlugin.configs.react,
  {
    plugins: {
      "@storm-software": eslintPlugin
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        project: "./tsconfig.json"
      }
    },
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/tmp/**",
      "**/.nx/**",
      "**/.tamagui/**"
    ]
  }
];
