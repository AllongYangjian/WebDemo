var fs = require('fs');

var filename = __dirname+"\\"+'hello.txt';

fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
        throw err;
    } else {
        console.log(data.toString());
    }
})