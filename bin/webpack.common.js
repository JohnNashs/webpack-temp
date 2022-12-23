const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyRightWebkitPlugin = require("../plugins/copyright-webpack-plugin")
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')


module.exports = {
  entry: {
    app: "./src/index.js"
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 2
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.js/,
        use: [
          path.resolve(__dirname, '../loader/replaceLoader.js')
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              outputPath: "img/",
              limit: 10240
            }
          }
        ]
      }
    ]
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyRightWebkitPlugin({
      name: "Rainy"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new WindiCSSWebpackPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist")
  }
};
