const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        news: path.resolve(__dirname, 'source/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].debug.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),

        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),

        new webpack.LoaderOptionsPlugin({minimize: true}),

        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')})
    ],

    resolve: {
        alias: {
            zepto: path.resolve(__dirname, 'source/lib/zepto/zepto'),
            cookie: path.resolve(__dirname, 'source/lib/cookie/cookie'),
            user: path.resolve(__dirname, 'source/lib/user/user'),
            area: path.resolve(__dirname, 'source/lib/area/area'),
            tip: path.resolve(__dirname, 'source/lib/tip/Tip'),
            interval: path.resolve(__dirname, 'source/lib/interval/Interval'),
            ajaxform: path.resolve(__dirname, 'source/lib/ajaxform/ajaxform')
        }
    }
};
