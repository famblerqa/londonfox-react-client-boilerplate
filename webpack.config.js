const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const path = require('path');

const moduleObj = {
  rules: [
    // JavaScript/JSX Files
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    // CSS Files
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }
  ]
}

const client = {
  entry: {
    'client': './src/client/index.js'
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/public')
  },
  module: moduleObj,
  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  // Reload On File Change
  watchOptions: {
    ignored: /node_modules/
  },
  // Development Tools (Map Errors To Source File)
  devtool: 'source-map'
}

const server = {
  entry: {
    'server': './src/server/index.js'
  },
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: [nodeExternals()]
}

module.exports = [client, server]
