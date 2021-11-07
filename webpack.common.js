/* eslint-disable */
const path = require("path");
const glob = require("glob");

module.exports = {
  mode: "production",
  entry: glob.sync("src/components/**/index.tsx").reduce((acc, path) => {
    const entry = path.replace("/index.tsx", "");
    acc[entry] = path;
    return acc;
  }, {}),
  output: {
    filename: "./[name]/index.js",
    path: path.resolve(__dirname),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".svg"],
    symlinks: true,
    modules: [__dirname, "node_modules"],
    alias: {
      __interfaces__: path.resolve(__dirname, "src/__interfaces__"),
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      css: path.resolve(__dirname, "src/css"),
      helps: path.resolve(__dirname, "src/helps"),
      hooks: path.resolve(__dirname, "src/hooks"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
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
