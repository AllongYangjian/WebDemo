const http = require('http')
const fs = require('fs')
const path = require('path')


http.createServer((req,res)=>{

    var url = req.url;
    res.setHeader('Content-Type','text/html;charset=utf-8');
    if(url === '/'){
        console.log(req);
        getHtmlFile('login',res);
    }else if(url === '/login'){
        getHtmlFile('login',res);
    }else if(url === '/register'){
        getHtmlFile('register',res);
    }else{
        getHtmlFile('404',res);
    }
}).listen(8008,()=>{
    console.log('server start on http://localhost:8008')
})

function getHtmlFile(file,res){
    var filename = path.join(__dirname,'03html',file+".html");
    fs.readFile(filename,(err,data)=>{
        if(err){
            throw err;
        }
        res.end(data);
    });
}