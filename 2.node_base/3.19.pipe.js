const fs = require('fs');

const readStream = fs.createReadStream('./3.19.readme4.txt');
const writeStream = fs.createWriteStream('./3.19.writeme3.txt');

readStream.pipe(writeStream);

