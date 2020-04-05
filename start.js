// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require("@babel/register")({
    presets: ["@babel/preset-env"]
});

require("@babel/core").transform("code", {
    plugins: ["@babel/plugin-proposal-class-properties"]
});

require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-proposal-throw-expressions"]
});

module.exports = require('./app/index.js')