const fs = require('fs');

//만들기
// if(fs.existsSync('./test2/test3/test4')) {
//     console.log('folder already exists.');
// } else {
//     fs.mkdir('./test2/test3/test4', { recursive: true }, (err) => {
//         if(err) console.log(err);
//         console.log('folder created');
//     });
// }

//삭제하기
fs.rm("./test2", { recursive: true }, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('folder deleted');
    }
});