const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.join(__dirname, 'src/index.tsx')
    },
    output: {
        filename: '[name][hash].js',
        path: path.join(__dirname, 'dist'),
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true,
        })
    ]
}
