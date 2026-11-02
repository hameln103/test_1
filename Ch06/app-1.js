// 모듈 불러오기
const express = require('express');

// 서버 생성
const app = express();  // 서버 생성
const port = 3000;      // 포트번호 지정

// json 파싱 미들웨어
app.use(express.json());

// 유저 정보 등록
let nextId = 4;
let users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Carol"}
];

// 서버 라우팅 설정
// 1) 전체 데이터 조회
app.get('/users', (req, res) => {
    res.json(users);
});

// 특정 id에 해당하는 사용자 조회
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);   // 숫자로 변환
    const user = users.find(user => user.id === id);  // 해당 요소를 반환

    if(!user) {
        return res.status(404).json(
            {error : 'user not found.'}
        );
    }
    res.json(user);
});

// 사용자 추가
app.post('/users', (req, res) => {
    const name = (req.body?.name).trim();

    if(!name) return res.status(400).json(
        {error : 'name is required'}
    );

    const user = {id : nextId++, name};
    users.push(user);
    res.status(201).json(user);

});

// 특정 id 사용자 삭제
app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);  // 해당 요소를 반환

    if(!user) {
        return res.status(404).json(
            {error : 'user not found.'}
        );
    }

    users = users.filter(user => user.id !== id); // 해당 배열을 반환
    res.status(200).json(users);
});x``

// 서버 실행
app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중~~`);
});