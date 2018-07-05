const path = require('path');

const webpack = require('webpack');

const HTMLPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BUILD_DIR = path.join(__dirname, 'dist');

const publicPath = '/';

module.exports = {
  mode: 'development',
  entry: {
    index: './index.jsx',
    r: [
      'react',
      'react-dom',
      'react-router',
    ],
    vendor: [
      'react-loadable',
    ]
  },
  output: {
    filename: '[name]-[chunkhash]-bundle.js',
    path: BUILD_DIR,
    publicPath,
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.jsx?$/,
        options: {
          plugins: ['transform-decorators-legacy', 'transform-class-properties'],
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: true,
              importLoader: 2,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HTMLPlugin({
      title: 'Google-keep',
      filename: 'index.html',
      inject: true,
      hash: true,
      xhtml: true,
      template: './src/templates/index.ejs',
      chunks: ['r', 'vendor', 'index'],
    }),
    new CleanWebpackPlugin([BUILD_DIR], {
      verbose: true,
      exclude: ['json'],
    }),
    new webpack.optimize.SplitChunksPlugin({
      name: ['react', 'vendor'],
      filename: '[name]-[chunkhash].bundle.js',
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
    }),
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
};
