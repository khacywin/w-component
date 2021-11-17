/* eslint-disable */
const path = require("path");
const glob = require("glob");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
    path: path.resolve(__dirname, "lib"),
    library: {
      type: "module",
    },
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".svg"],
    modules: ["node_modules"],
    symlinks: true,
    alias: {
      components: path.resolve(__dirname, "components"),
    },
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
          outputPath: "image",
          emitFile: true,
          esModule: false,
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.resolve(__dirname, "lib"),
      ],
    }),
  ],
};
