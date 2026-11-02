const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);

    const {method, url} = req;

    if(method === 'GET' && url === '/user'){
        res.statusCode = 200;
        res.end('User Information');
    }
    else if (method === 'POST' && url === '/user'){
        res.statusCode = 201;
        res.end('User created');
    }
    else {
        res.statusCode = 404;
        res.end('Not Found');
    }

});

server.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});