const fs = require('fs');

const writeData = (path, data) => {
    fs.writeFile(path, data, (err) => {
        if(err) {
            console.log("파일 쓰기 실패:", err);
            return;
        }
        console.log("파일 쓰기 완료");
    });
};

module.exports = writeData;
