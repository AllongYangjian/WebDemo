var fs = require('fs');
var msg = 'Hello World，你好世界';

fs.writeFile("./hello.txt",msg,'utf-8',err=>{
    if(err){
        console.log('写文件出错了'+err);
    }else{
        console.log('ok');
    }
})