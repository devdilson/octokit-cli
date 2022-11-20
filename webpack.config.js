const path = require("path");

module.exports = {
  entry: ["./cli.ts"],
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: 'source-map',
  output: {
    filename: "cli.js",
    path: path.resolve(__dirname, "dist"),
  },
  experiments: {
    topLevelAwait: true
  }
};
