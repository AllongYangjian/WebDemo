const http = require('http')

http.createServer((req,res)=>{

    console.log(req.url);
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    if(req.ur ==='/' || req.url === '/index'){
        res.end('路径');
    }else if(req.url.endsWith('html')){
        res.end('html文件');
    }else{
        res.end('404');
    }
}).listen(8008,()=>{
    console.log('server start on http://localhost:8008')
})