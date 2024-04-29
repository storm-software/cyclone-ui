// @ts-nocheck

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require("@nx/next");
const { withTamagui } = require("@tamagui/next-plugin");
const { join } = require("path");
const withTM = require("next-transpile-modules"); // pass the modules you would like to see transpiled
const { i18n } = require("./next-i18next.config");

const disableExtraction =
  {
    true: true,
    false: false
  }[process.env["DISABLE_EXTRACTION"]] ??
  process.env.NODE_ENV === "development";

if (disableExtraction) {
  console.log("Disabling static extraction in development mode for better HMR");
}

const extrasPlugins = [
  "@cyclone-ui/themes",
  "@cyclone-ui/config",
  "@cyclone-ui/button",
  "@cyclone-ui/input"
];

const transpilePackages = [
  "solito",
  "react-native-web",
  "react-native",
  "expo-linking",
  "expo-constants",
  "expo-modules-core",
  "expo-document-picker",
  "expo-av",
  ...extrasPlugins
  // '@expo/vector-icons',
];

const plugins = [
  withNx(),
  withTM(transpilePackages),
  withTamagui({
    appDir: true,
    config: "./tamagui.config.ts",
    components: ["tamagui", ...extrasPlugins],
    importsWhitelist: ["constants.js", "colors.js"],
    outputCSS:
      process.env.NODE_ENV === "production" ? "./public/tamagui.css" : null,
    logTimings: true,
    excludeReactNativeWebExports: [
      "Switch",
      "ProgressBar",
      "Picker",
      "CheckBox",
      "Touchable"
    ]
  })
];

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  i18n,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {},
  transpilePackages: transpilePackages,
  experimental: {
    scrollRestoration: true
  }
};

module.exports = composePlugins(...plugins)(nextConfig);
