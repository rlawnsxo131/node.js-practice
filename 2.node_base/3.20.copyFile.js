const fs = require('fs');

fs.copyFile('./3.19.readme4.txt', '3.20.writeme4.txt', (error) => {
    if(error) {
        return console.error(error);
    }
    console.log('복사 완료');
});
