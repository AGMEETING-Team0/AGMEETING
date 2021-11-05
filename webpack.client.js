const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js');
const CURRENT_WORKING_DIR = process.cwd()
const HTMLWebpackPlugin = require("html-webpack-plugin");


const config = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: './client/main.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "helper/index.html"
        }),
    ],
    //   resolve: {
    //     modules: [__dirname, "src", "node_modules"],
    //     extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    //   },

};

// module.exports = config
module.exports = merge(baseConfig, config)