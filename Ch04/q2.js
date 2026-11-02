const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);

    const {method, url} = req;

    if(method === 'GET' && url === '/home'){
        res.statusCode = 200;
        res.end('Welcome home');
    }
    else if (method === 'GET' && url === '/about'){
        res.statusCode = 200;
        res.end('About us');
    }
    else {
        res.statusCode = 400;
        res.end('Not Found');
    }

});

server.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});