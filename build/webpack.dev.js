const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require("path");
const fs = require("fs");
const open = require("open");

let cookie = '';
let timerId = null;

if (fs.existsSync(path.resolve('./cookie.txt'))) {
  cookie = fs.readFileSync(path.resolve('./cookie.txt'), 'utf8');
  fs.watch(path.resolve('./cookie.txt'), function (event) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      cookie = fs.readFileSync(path.resolve('./cookie.txt'), 'utf8')
        .replace(/^[\s\n\t]+/g, "")
        .replace(/[\s\n\t]+$/g, "");
      open("http://localhost:3000");
      timerId = null
    }, 200)
  })
}

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
          req.headers.cookie = 'JSESSIONID=' + cookie;
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
