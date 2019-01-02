/**
 * Webpack configuration for plugin
 */
var path = require("path");
var WebpackClearConsole = require("../index").WebpackClearConsole;

module.exports = {
    cache: true,
    mode: "development",
    context: __dirname,
    entry: "./main.js",
    output: {
        path: path.join(__dirname, "build"),
        filename: "demo.main.js"
    },
    plugins: [
        // Try various defaults and options.
        new WebpackClearConsole()
    ],
    optimization: {
      minimize: false
    }
};
