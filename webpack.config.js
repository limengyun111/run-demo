const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: '../run-demo/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
     {
     test: /\.css$/,
     use: [
     'style-loader',
     'css-loader'
   ]
    }
  , {
    test: /\.(js|jsx)$/,
    use: ['babel-loader'],
    exclude: /node_modules/,
  }]},


};
