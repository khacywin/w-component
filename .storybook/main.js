const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["components/stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/preset-typescript",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
        },
      ],
    });

    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.plugins = [new TsconfigPathsPlugin({})];
    return config;
  },
};
