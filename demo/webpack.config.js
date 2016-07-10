/**
 * Webpack configuration
 */
var path = require("path");
var WebpackRemoveLog = require("../index").WebpackRemoveLog;

module.exports = {
    cache: true,
    context: __dirname,
    entry: "./main.js",
    output: {
        path: path.join(__dirname, "build"),
        filename: "[hash].main.js"
    },
    plugins: [
        // Try various defaults and options.
        new WebpackRemoveLog()
    ]
};
