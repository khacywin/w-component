/* eslint-disable */
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, "src/index.tsx"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".svg"],
    symlinks: true,
    alias: {
      __interfaces__: path.resolve(__dirname, "src/__interfaces__"),
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      css: path.resolve(__dirname, "src/css"),
      helps: path.resolve(__dirname, "src/helps"),
      hooks: path.resolve(__dirname, "src/hooks")
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
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
