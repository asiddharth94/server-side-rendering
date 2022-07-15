const path = require("path");

module.exports = {
  //   1. Inform webpack that we're building a bundle for nodeJS, rather than for the browser
  target: "node",

  //   2. Tell webpack the root file of our server application
  entry: "./src/index.js",

  //   3. Tell webpack where to put the output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  //   4. Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        // tells webpack to run babel only on files with extension .js || .jsx
        test: [/\.js?$/, /\.jsx?$/],
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
