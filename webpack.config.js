const webpack = require('webpack');
const path = require('path');

const config = {

    entry: {
        header: path.resolve(__dirname, 'source/components/header/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'source/components/header'),
        filename: '[name].debug.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    // plugins: [],

    resolve: {
        alias: {
            zepto: path.resolve(__dirname, 'source/lib/zepto/zepto'),
            cookie: path.resolve(__dirname, 'source/lib/cookie/cookie'),
            user: path.resolve(__dirname, 'source/lib/user/user'),
            area: path.resolve(__dirname, 'source/lib/area/area')
        }
    }
};

module.exports = config;
