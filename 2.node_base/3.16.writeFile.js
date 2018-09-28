const fs = require('fs');

fs.writeFile('./3.16.writeme.txt','글이 입력됩니다',(err) => {
    if(err){
        throw err;
    }
    fs.readFile('./3.16.writeme.txt', (err,data) => {
        if(err){
            throw err;
        }
        console.log(data.toString());
    });
});