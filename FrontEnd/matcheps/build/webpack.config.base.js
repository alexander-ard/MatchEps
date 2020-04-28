'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
var path = require('path');

const utils = require('./utils');

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@utils': utils.resolve('src/utils'),
      '@router': utils.resolve('src/router'),
      '@components': utils.resolve('src/components'),
      '@css': utils.resolve('src/css'),
      '@images': utils.resolve('src/assets'),
      vue: 'vue/dist/vue.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('media/[name].[hash:7].[ext]'),
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', 
          'css-loader?url=false', 
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: [
          path.resolve('src/assets', './node_modules'),
        ],
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name]-[hash].[ext]',
            outputPath: '../',
            publicPath: '/dist',
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: utils.resolve('static/img'),
        to: utils.resolve('dist/static/img'),
        toType: 'dir',
      },
    ]),
  ],
};
