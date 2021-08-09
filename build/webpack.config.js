const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const {merge} = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');
const path = require('path');

const commonConfig = {
  entry: {
    'main': './src/index.js'
  },
  target: "web",
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: '[name]_[hash:8].[ext]',
            outputPath: 'static/font/',
          }
        }
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: {
          loader: "url-loader",
          options: {
            name: '[name]_[hash:8].[ext]',
            outputPath: 'static/img/',
            limit: 10240
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, '../dist/public')
        }
      ]
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    usedExports: true,

  }
};

module.exports = (env) => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig)
  } else {
    return merge(commonConfig, devConfig)
  }
};
