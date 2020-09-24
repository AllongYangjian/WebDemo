const path = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const { NamedModulesPlugin } = require('webpack')

module.exports = {
    mode:'development',
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    module:{
        rules:[
            {test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},
        ]
    }
}