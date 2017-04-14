const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: {
        like: path.resolve(__dirname, 'source/components/like/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'source/components/like'),
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
