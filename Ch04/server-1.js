const http = require("http");
const fs = require('fs');

const port = 3000;
//서버 생성
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    
    const readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    readStream.pipe(res);


});
//서버 대기
server.listen(port, () => {
    console.log(`${port}번 포트에서 서버 대기중~`);
});

