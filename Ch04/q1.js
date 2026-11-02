const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    res.setHeader('content-Type', 'text/plain');
    res.end('Hello, World!');

});

server.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});