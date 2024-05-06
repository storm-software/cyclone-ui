import { create } from "@storybook/theming/create";

const theme: any = create({
  base: "dark",

  colorPrimary: "#1fb2a6",
  colorSecondary: "#6366f1",

  // UI
  appBg: "#22272E",
  appContentBg: "#22272E",
  appBorderColor: "#1fb2a6",
  appBorderRadius: 2,

  // Text colors
  textColor: "#1fb2a6",
  textInverseColor: "#1fb2a6",

  // Toolbar default and active colors
  barTextColor: "#1fb2a6",
  barSelectedColor: "#1fb2a6",
  barBg: "#22272E",

  // Form colors
  inputBg: "#22272E",
  inputBorder: "#1fb2a6",
  inputTextColor: "#1fb2a6",
  inputBorderRadius: 2,

  brandTitle: "Storm Software",
  brandUrl: "https://stormsoftware.com",
  brandImage:
    "https://pub-761b436209f44a4d886487c917806c08.r2.dev/transparent.svg",
  brandTarget: "_self"
});

export default theme;
