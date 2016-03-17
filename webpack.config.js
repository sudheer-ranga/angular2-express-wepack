'use strict';

var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: './bootstrap.ts',
    output: {
        path: path.resolve('build/'),
        publicPath: '/public/assets/',
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin("bundle.css")
    ],
    module: {
        loaders: [
            {
                test: /\.json/,
                loader: 'json-loader',
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css!postcss")
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                loader: ExtractTextPlugin.extract("style", "css!sass?outputStyle=expanded")
            }
        ]
    },
    postcss: function(webpack) {
        return [
            autoprefixer({browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']})
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "node_modules")]
    },
    resolve: {
        extensions: ['', '.ts', '.webpack.js', '.web.js', '.js', '.json', 'es6']
    },
    devtool: 'source-map'
}