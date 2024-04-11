exports.default = {
  name: "cyclone-ui",
  namespace: "cyclone-ui",
  repository: "https://github.com/storm-software/cyclone-ui",
  organization: "storm-software",
  ci: true,
  owner: "cyclone-ui",
  timezone: "America/New_York",
  locale: "en-US",
  logLevel: "debug",
  externalPackagePatterns: ["@storm-software/"],
  colors: {
    primary: "#1fb2a6",
    background: "#1d232a",
    success: "#087f5b",
    info: "#0ea5e9",
    warning: "#fcc419",
    error: "#990000",
    fatal: "#7d1a1a",
  },
  extensions: {
    telemetry: {
      fileName: "storm",
      fileExtension: "log",
      path: "tmp/storm/logs",
      stacktrace: true,
    },
  },
};
