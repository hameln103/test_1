// 모듈 불러오기
const express = require("express");
const dbConnect = require("./config/dbConnect");

// 서버 생성 
const app = express();
const port = 3000;

// 서버 DB 연결
dbConnect();

// 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/contacts", require("./routes/contactRoutes"));

// 서버 실행 
app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중~~`)
}); 