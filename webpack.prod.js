const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const common = require('./webpack.common.js');
const slsw = require('serverless-webpack');

console.log(slsw.lib.entries);

module.exports = merge(common, {
  devtool: 'source-map',
  entry: slsw.lib.entries,
  externals: [nodeExternals({})],
  mode: 'production',
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  plugins: [new CleanWebpackPlugin()]
});
