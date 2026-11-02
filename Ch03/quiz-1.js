const fs = require('fs');

if(fs.existsSync('./mine')) {
    console.log('folder already exists.');
} else {
    fs.mkdir('./mine', { recursive: true }, (err) => {
        if(err) console.log(err);
        console.log('folder created');
    });
}