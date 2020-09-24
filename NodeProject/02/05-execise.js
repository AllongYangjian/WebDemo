const http = require('http')
const path = require('path')
const mime = require('mime')
http.createServer((req,res)=>{

    var index  = req.url.lastIndexOf('.');
    var type = req.url.substring(index);
    console.log(mime.getType(type));

}).listen(8008,()=>{
    console.log('server staret on http://localhost:8008');
})