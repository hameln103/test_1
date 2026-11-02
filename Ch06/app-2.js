// 모듈 불러오기
const express = require('express');

// 서버 생성
const app = express();  // 서버 생성
const port = 3000;      // 포트번호 지정

// json 파싱 미들웨어
app.use(express.json());

// 유저 정보 등록
let nextId = 4;

// q1
app.get('/', (req, res) => {
    res.status(200).send("Welcome!");
});

app.get('/about', (req, res) => {
    res.status(200).send("This is the about page.");
});

// q2
app.get('/square/:number', (req, res) => {
    const i = req.params.number
    const number = Number(i);

    if(i.trim() === "" ||!Number.isFinite(number)) {
        return res.status(400).json(
            {error : '유효한 숫자를 입력하세요.'}
        );
    }
    const square = number * number;
    res.status(200).json({ number, square });
});

// q3
let users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Carol"}
];

app.get('/users', (req, res) => {
    res.json(users);
});

// 특정 id에 해당하는 사용자 조회
app.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);   // 숫자로 변환
    const user = users.find(user => user.id === id);  // 해당 요소를 반환

    if(!user) {
        return res.status(404).json(
            {error : 'user not found.'}
        );
    }

    const name = req.body?.name;

    // 공백이거나 문자열이 아닌 경우 에러 메시지 표시
    if(typeof name !== 'string' || name.trim() === "") {
        return res.status(400).json(
            {error : '이름을 공백이 아닌 문자열로 입력하세요.'}
        );
    }

    user.name = name.trim();
    res.status(200).json(user);
});






// 서버 실행
app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중~~`);
});