
# webpack-remove-log
Console log,error,debug,info stiuations removes from source code during bundling 
#Installation
The plugin is available via npm:

$ npm install webpack-remove-log-plugin

#Examples

You can see lots of examples at demo/webpack.config.js.

#Basic

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

