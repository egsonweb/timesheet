'use strict';

var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var config;
var paths = {
  app: path.join(ROOT_PATH, 'app')
};

var common = {
  entry: path.resolve(paths.app, 'scripts/index'),

  resolve: {
    extensions: ['', '.js', '.less'],
  }
};

if (TARGET === 'start' || !TARGET) {
  config = start();
}

function start() {
  const IP = '0.0.0.0';
  const PORT = 4000;

  return merge(common, {
    ip: IP,
    port: PORT,
    devtool: 'eval-source-map',

    entry: [
      'webpack-dev-server/client?http://' + IP + ':' + PORT,
      'webpack/hot/only-dev-server',
      path.join(paths.app, 'scripts/index'),
    ],

    output: {
      path: __dirname,
      filename: 'bundle.js'
    },

    node: {
    	console: true,
    	fs: "empty",
    	net: "empty",
    	tls: "empty",
    },

    module: {
      preLoaders: [
        {
          test: /\.js$/,
          loaders: ['eslint'],
          include: [paths.app],
        }
      ],
      loaders: [
        {
          test: /\.js?$/,
          loaders: ['react-hot', 'babel?stage=0'],
          include: [paths.app],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loaders: ['style', 'css', 'sass'],
        },
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
	      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
	      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
	      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
	      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
      ]
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development'),
        }
      }),
      new webpack.NoErrorsPlugin(),
    	new webpack.HotModuleReplacementPlugin()
    ],
  });
}

module.exports = config;
