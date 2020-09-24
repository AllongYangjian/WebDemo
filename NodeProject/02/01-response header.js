const http = require('http');
const { resolveSoa } = require('dns');

const server = http.createServer();

server.on('request',(req,res)=>{
    //设置响应报文头,解决请求乱码问题
    // res.setHeader('Content-Type','text/plain;charset=utf-8');
    // res.write('hello 杨建');

    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.write('<h1>呵呵</h1>')
    res.end();
})

server.listen(8008,()=>{
   console.log('server start on:http://localhost:8008'); 
})