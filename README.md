
# webpack-clear-console
Webpack-clear-console plugin clears console by replacing console functions during bundling
## Installation
The plugin is available via npm:

```js
$ npm i webpack-clear-console
```

## Examples

You can see an example at demo/webpack.config.js.

### Basic

```js
var WebpackClearConsole = require("webpack-clear-console").WebpackClearConsole;

module.exports = {
 plugins: [
    // Other plugins.
    // WebpackClearConsole plugin removes all statements beginning with console.
    new WebpackClearConsole();
  ]
}
```
