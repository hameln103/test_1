const fs = require('fs');

let files = fs.readdir('./', (err, files) => {
    if(err) {
        console.log(err);
    }
    console.log(files);
});

console.log('Code is done');

