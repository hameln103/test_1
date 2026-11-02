// 패키지와 모듈 불러오기
const express = require('express');
const errorhandler = require('./middlewares/errorhandler');

// ------------------------------
// app 객체 생성
// ------------------------------
const app = express();
const port = 3000;


// 시작화면 표시
app.get('/', (req, res) => {
    console.log('요청 발생');
    res.status(200).send('Hello Node!');
});


// json, url 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// ------------------------------
// router 미들웨어 등록
// ------------------------------
app.use('/contacts', require('./routes/contactRoutes'));


// 테스트용 에러 발생
app.get('/test', (req, res, next) => {
    const error = new Error('테스트용 에러');
    error.status = 401;
    next(error);
});

// ------------------------------
// 에러 처리 미들웨어 등록
// ------------------------------
app.use(errorhandler);

// ------------------------------
// 서버(app) 실행
// ------------------------------ 
app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중~~`)
});
