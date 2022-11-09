const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const devConfig = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "./dist",
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = merge(common, devConfig);
