var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: './app/static/js/src/app.js',
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, './app/static/js/dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        } 
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};