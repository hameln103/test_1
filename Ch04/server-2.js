const http = require('http');
const fs = require('fs');

// 서버 생성
const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);

    const {method, url} = req;
    if (method === 'GET' && url === '/') {
        res.statusCode = 200;
        const readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
        readStream.pipe(res);
    }
    else if (method === 'GET' && url === '/contact'){
        res.statusCode = 200;
        const readStream = fs.createReadStream(__dirname + '/contact.html', 'utf-8');
        readStream.pipe(res);
    }
    else if (method === 'GET' && url === '/about'){
        res.statusCode = 200;
        const readStream = fs.createReadStream(__dirname + '/about.html', 'utf-8');
        readStream.pipe(res);
    }
    else {
        res.statusCode = 404;
        res.end('NOT FOUND');  
    }

});

// 서버 대기
server.listen(3000, () => {
    console.log('3000번에서 서버 대기 중');
});

