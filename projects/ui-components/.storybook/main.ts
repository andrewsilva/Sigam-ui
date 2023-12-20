import type { StorybookConfig } from "@storybook/angular";
const path = require('path');


const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
   /*  webpackFinal: async (config) => {
    (config.module as any).rules.push({
      exclude: /node_modules/,
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: path.resolve(__dirname, '../../../node_modules/primeng/resources')
    });

    // Return the altered config
    console.log('andref', config.module!.rules)

    // Return the altered config
    return config;
  }, */
};
export default config;
