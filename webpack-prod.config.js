const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const isProduction = process.env.NODE_ENV == "production";
const stylesHandler = "style-loader";
const ASSET_PATH = process.env.ASSET_PATH || '/';

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
    static: { 
      directory: path.resolve(__dirname, './src/static'), 
      publicPath: '/assets'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
    new webpack.BannerPlugin({
      banner: `
        Author: Kamil Pieczyk | for Sherwen Studios - www.sherwen.com
        email: kamil@sherwen.com
        Title: CRO-TEST---SCSNI-1553---pdp-comfort-rating
        git repository: https://github.com/kamilpieczyk/CRO-TEST---SCSNI-1553---pdp-comfort-rating
      `
    })
  ],
  resolve: { 
    alias: { 
      "@components": path.resolve(__dirname, "src", "components"),
      "@controllers": path.resolve(__dirname, "src", "controllers"),
      "@helpers": path.resolve(__dirname, "src", "helpers"),
      "@style": path.resolve(__dirname, "src", "style"),
      "@store": path.resolve(__dirname, "src", "store"),
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|wasm)$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', 'solid']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", {loader: "sass-loader", options: { implementation: require.resolve("sass") }}],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  optimization: {
    minimize: true,
    chunkIds: 'named',
    moduleIds: 'named'
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
