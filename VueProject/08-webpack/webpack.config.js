const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: { //webpack-dev-server 配置的第二种方式
        // --open --port 3000 --contentBase src --hot
        open: true,
        port: 8000,
        contentBase: 'src',
        hot: true //启用热更新
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [ //定义css匹配规则，调用规则为从右到左
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    }
}