const { merge } = require("webpack-merge");
const { EnvironmentPlugin } = require("webpack");
const commonConfig = require("./webpack.common.js");
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

const devConfig = {
  mode: "development",
  plugins: [
    new EnvironmentPlugin({
      API_SEARCH: process.env.API_SEARCH,
      API_RANDOM: process.env.API_RANDOM,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
