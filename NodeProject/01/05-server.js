const http = require('http')
const url = require('url')
var server = http.createServer();

server.on('request',(req,res)=>{
    res.write(Date.now()+":Hello");
    res.end();
});

server.listen(8080,()=>{
    console.log('服务器启动了');
})