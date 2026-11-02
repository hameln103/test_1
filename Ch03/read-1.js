const fs = require('fs');
// let files = fs.readFileSync('example.txt', 'utf8');
// console.log(files);

fs.readFile("example.txt", 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
} );