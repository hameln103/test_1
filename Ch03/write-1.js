const fs = require('fs');
//동기식 처리 방식
const data = fs.readFileSync('example.txt', 'utf8');
if (fs.existsSync('text-1.txt')) {
    console.log('File already exist');
} else {
    fs.writeFileSync('text-1.txt', data);
}



// let newdata = '\n내용을 추가합니다. \n잘 쓰여졌나요?';
// fs.writeFile('example.txt', newdata, { flag: 'a' }, (err) => {
//     if (err) console.log(err);
//     console.log('내용이 추가되었습니다.');
// });