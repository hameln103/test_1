const path = require('path');

const fullPath = path.join('some', 'work', 'ex.txt');
console.log(fullPath); 

const dir = path.dirname(fullPath);
console.log(dir);

const dir2 = path.dirname(__filename);
console.log(dir2);

const fn = path.basename(__filename);
const fn2 = path.basename(__filename, '.js');

console.log(`파일 이름: ${fn}`);
console.log(`파일 이름(확장자 제외): ${fn2}`);

const fn3 = path.extname(__filename);
console.log(fn3);

const fn4 = path.extname('path.hwp');
console.log(fn4);

const ext = path.extname(__filename);
console.log(path.basename(__filename, ext));

const parsedPath = path.parse(__filename);
console.log(parsedPath);
console.log(parsedPath.name);
console.log(parsedPath['name']);