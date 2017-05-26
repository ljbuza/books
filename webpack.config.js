const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: './client/static/index.html',
//   filename: 'index.html',
//   inject: 'body',
// });
const APP_DIR = path.resolve(__dirname, 'client/components');
const BUILD_DIR = path.resolve(__dirname, 'client/static');

module.exports = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    // path: path.resolve('dist'),
    path: BUILD_DIR,
    // filename: 'index_bundle.js',
    filename: 'bundle.js',
  },

  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.js*/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  node: {
    dns: 'mock',
    net: 'mock',
  },
  // plugins: [HtmlWebpackPluginConfig],
};

