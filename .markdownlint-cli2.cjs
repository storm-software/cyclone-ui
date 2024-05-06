const options =
  require("./node_modules/@storm-software/markdownlint/index.js").init({
    default: true,
    "line-length": false
  });

module.exports = {
  config: options,
  customRules: ["./node_modules/@storm-software/markdownlint/index.js"]
};
