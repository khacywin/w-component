/* eslint-disable */
const path = require("path");
const glob = require("glob");

module.exports = {
  mode: "production",
  entry: glob.sync("components/**/**.tsx").reduce((acc, path) => {
    let entry = "index.js";

    if (path.includes("components")) {
      entry = path.slice(path.lastIndexOf("components/") + 11, -3) + "js";
    }

    acc[entry] = path;
    return acc;
  }, {}),
  output: {
    filename: "[name]",
    path: path.resolve(__dirname, "es"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".svg"],
    modules: ['node_modules'],
    symlinks: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|jpe?g)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images",
          emitFile: true,
          esModule: false,
        },
      },
    ],
  },
};
