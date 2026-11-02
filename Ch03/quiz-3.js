const fs = require('fs');
const path = require("path");

fs.readdir('./', (err, files)=>{
    if(err){
        console.log('폴더 읽기 실패: ',err);
        return;
    }

    let count = 0;
    for (let i=0; i < files.length; i++){
        const ext = path.extname(files[i]);

        if(ext === '.txt') {
            count++;
        }
    }
    console.log(`txt 파일의 개수: ${count}`);
});