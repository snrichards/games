const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: ['babel-loader', 'eslint-loader'],
        },
      },
    ],
  },
};
