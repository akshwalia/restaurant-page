const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: "development",
    entry: {
        index: './src/index.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.(png|jpg)$/i,
                type: 'asset/resource',
            }, 

            {
                test: /\.(woff|woff2|otf|ttf)$/i,
                type: 'asset/resource',
            }
        ]
    },

    devtool: 'inline-source-map',

    devServer: {
        static: './dist',
    },

    plugins: [
        new HTMLWebpackPlugin({
            title: 'APJ Restaurant',
        })
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
        clean: true
    },

    optimization: {
        runtimeChunk: 'single',
    },

}