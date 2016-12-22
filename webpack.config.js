var debug = process.env.NODE_ENV !== "production";
var path = require("path");
var webpack = require('webpack');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
       test: /\.json?/,
       include: SRC_DIR,
       loader: "json-loader"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.(jpe?g|png|gif|svg)(\?v=\d+\.\d+\.\d+)?$/i,
        loader: 'file-loader?name=[path][name].[ext]?[hash:10]',
         exclude: /(node_modules|bower_components)/
      }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({})
  ]
};

module.exports = config;
