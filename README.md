
# webpack-remove-log
Webpack remove log plugin  removes Console log,error,debug,info stiuations from source code during bundling
#Installation
The plugin is available via npm:

$ npm install webpack-remove-log-plugin

#Examples

You can see an example at demo/webpack.config.js.

#Basic

var WebpackRemoveLog = require("webpack-remove-log").WebpackRemoveLog;

module.exports = {
  plugins: [
    // Other plugins.

    // WebpackRemoveLog plugin removes all statements beginning with console.
    new WebpackRemoveLog();
  ]
}

