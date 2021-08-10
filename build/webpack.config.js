const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const {merge} = require('webpack-merge');

const path = require('path');

const commonConfig = {
  entry: {
    'main': './src/index.js'
  },
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
    splitChunks: {
      chunks: 'all',
      maxSize: 409600,
      cacheGroups: {
        reactbundle: {
          name: 'reactbundle',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom")[\\/]/,
          priority: -10,
          chunks: 'all',
          enforce: true,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      }
    }
  }
};

module.exports = (env) => {
  if (env && env.production) {
    return merge(commonConfig, require('./webpack.prod'))
  } else {
    return merge(commonConfig, require('./webpack.dev'))
  }
};
