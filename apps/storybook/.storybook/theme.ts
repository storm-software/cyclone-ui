import { create } from "@storybook/theming/create";

const theme: any = create({
  base: "dark",

  colorPrimary: "#1fb2a6",
  colorSecondary: "#6366f1",

  // UI
  appBg: "#1d232a",
  appContentBg: "#1d232a",
  appBorderColor: "#6366f1",
  appBorderRadius: 2,

  // Text colors
  textColor: "#6366F1",
  textInverseColor: "#1fb2a6",

  // Toolbar default and active colors
  barTextColor: "#1fb2a6",
  barSelectedColor: "#1fb2a6",
  barBg: "#3f434a",

  // Form colors
  inputBg: "#1d232a",
  inputBorder: "#6366f1",
  inputTextColor: "#6366f1",
  inputBorderRadius: 2,

  brandTitle: "Storm Software",
  brandUrl: "https://stormsoftware.com",
  brandImage: "https://pub-761b436209f44a4d886487c917806c08.r2.dev/logo.svg",
  brandTarget: "_self"
});

export default theme;
