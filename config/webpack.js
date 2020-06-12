const development = process.env.NODE_ENV === 'development' && 'development';

// todo:
// run lint
// show git commit
// uglyfy & mimify
//  check other plugins
// dev server with hot reload, define port and host


module.exports = {
  entry: '.\\src\\index.jsx',
  mode: development || 'production',
  output: {
    filename: 'bundle-[hash].js',
    publicPath: '.\\build',
    // path: '.\\build',
  },
  module: {
    rules: [
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: 'css-loader' },
    ],
  },
  // devServer: {
  //   contentBase: './dist',
  //   hot: true,
  // },
};
