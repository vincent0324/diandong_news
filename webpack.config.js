const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: {
        newsList: path.resolve(__dirname, 'source/components/newsList/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'source/components/newsList'),
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
            area: path.resolve(__dirname, 'source/lib/area/area'),
            tip: path.resolve(__dirname, 'source/lib/tip/Tip'),
            interval: path.resolve(__dirname, 'source/lib/interval/Interval'),
            ajaxform: path.resolve(__dirname, 'source/lib/ajaxform/ajaxform')
        }
    }
};
