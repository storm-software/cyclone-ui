import * as baseConfig from "@storm-software/linting-tools/syncpack/config.json";

/** @type {import("syncpack").RcFile} */
export const config = {
  ...baseConfig,
  source: [...baseConfig.source, "components/*/package.json"],
  versionGroups: [
    ...baseConfig.versionGroups,
    {
      label:
        "Always use the versions of react/react native brought in by the workspace root",
      dependencies: ["react", "react-dom", "react-native"],
      snapTo: ["@cyclone-ui/monorepo"]
    },
    {
      dependencies: ["@tamagui/**", "tamagui"],
      pinVersion: "1.116.15",
      label: "Tamagui Dependencies should all use the same version"
    }
  ]
};
