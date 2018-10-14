const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputDir = path.join(__dirname, "build/");

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/Index.bs.js',
  mode: isProd ? 'production' : 'development',
  output: {
    path: outputDir,
    publicPath: '',
    filename: '[name]-[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: true
    })
  ]
};
