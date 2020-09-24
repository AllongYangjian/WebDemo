
const path= require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //在内存中自动生成index页面的插件
module.exports = {
    mode:'development',
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'), //源文件
            filename:'index.html' //内存中首页名称
        })
    ] 
}