const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const localEnv = process.env.NODE_ENV === 'local' && 'development';
const mode = localEnv || 'production';
const gitCommit = require('child_process').execSync('git rev-parse HEAD').toString().trim();
// todo:
// run lint ok
// show git commit ok
// uglyfy & mimify
//  check other plugins
//  https://github.com/jaketrent/html-webpack-template
// dev server with hot reload, define port and host ok

// TODO: use cache in eslint loader

const rootPath = path.resolve(__dirname, '../');
const srcPath = path.resolve(rootPath, 'src');

/* eslint-disable no-console */
console.log('');
console.log('BUILDING!');
console.log(`mode: ${mode} commit: ${gitCommit}`);
console.log('');
/* eslint-enable no-console */

module.exports = {
  mode,
  entry: path.resolve(srcPath, 'index.jsx'),
  output: {
    filename: 'bundle-[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.js|jsx$/, use: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.html'),
      filename: 'index.html',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true,
      }),
    ],
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    // contentBase: './dist',
    useLocalIp: true,
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 9000,
    host: '0.0.0.0',
    stats: 'errors-only',
  },
};
