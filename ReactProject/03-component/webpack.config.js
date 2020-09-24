const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
            // {test:/\.css$/,use:['style-loader','css-loader?modules']}, //为普通样式表启用模块化s
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.ttf|woff|woff2|eot|svg$/,use:'url-loader'},//处理字体文件的loader
            {test:/\.scss$/,use:['style-loader','css-loader?modules','sass-loader']} //为scss文件启用模块化   &localIdentName=[path]-[name]-[local]-[hash:5]
        ]
    },
    resolve:{
        //配置扩展名，在导入的时候不需要写后缀名
        extensions:[
            '.js','.jsx','.json'
        ],
        alias:{
            //配置根路径简写
            '@':path.join(__dirname,'./src') 
        }

    }
}