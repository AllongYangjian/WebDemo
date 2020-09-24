var http = require('http');
var urlModule = require('url');
const server = http.createServer();

server.on('request',function(req,res){
    const {pathname:url,query} = urlModule.parse(req.url,true);
    if(url === '/getscript'){

        var data = {
            name:'sb',
            age:18
        }

        var scriptStr =`${query.callback}(${JSON.stringify(data)})`;
        res.end(scriptStr);
    }else{
        res.end('404');
    }
});

server.listen('3003',function(){
    console.log('server start');
})