const path = require("path");
const webpack = require("webpack");
var node_modules_dir = path.join(__dirname, "node_modules");

module.exports = {
  devtool: "cheap-module-source-map",
  entry: {
    app: path.resolve(__dirname, "jsx/main.jsx")
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "static/dist"),
    sourceMapFilename: "[name].map"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader?modules", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  devServer: {
    port: 7777,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
//    publicPath: publicPath
  }
};
