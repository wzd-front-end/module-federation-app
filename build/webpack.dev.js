const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require("path");

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    watchContentBase: true,
    overlay: false,
    open: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    publicPath: '/',
    proxy: {
      '/jf-platform-api/mng/*': {
        target: 'http://test.jiajihua.163.com:7709',
        bypass: function (req, res) {
          req.headers.cookie = 'JSESSIONID=' + 'F6B859922D1EF6DCF19388C2D31AAA3E';
        },
      },
    }
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(js|mjs|jsx)$/,
        include: /src/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: [
              require.resolve('react-refresh/babel')
            ]
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ],
  output: {
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  }
};