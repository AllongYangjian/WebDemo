const path = require('path')
const fs = require('fs')

var filename = path.join(__dirname,'hello.txt');

fs.readFile(filename,'utf-8',(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data.toString());
})
