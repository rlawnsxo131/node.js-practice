const http = require('http');

const server = http.createServer((req,res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server<p>');
});
server.listen(3000);
server.on('listening', () => {
    console.log('3000 포트에서 서버 대기 중입니다.');
});
server.on('error', (error) => {
    console.log(error);
});