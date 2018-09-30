const fs = require('fs');

setInterval(() => {
    fs.unlink('./abcdefg.js', (err) => {
        console.log(err);
    });
},1000);