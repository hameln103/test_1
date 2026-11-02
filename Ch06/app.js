const express = require('express');

const app = express();

// 홈화면 표시
app.get('/', (req, res) => {
    res.status(200).send("Hello Client!");
});

// 모든 연락처 표시
app.get('/contacts', (req, res) => {
    res.status(200).send("All Contacts Page")
});

// 새 연락처 추가화면 표시
app.post('/contacts', (req, res) => {
    res.status(201).send("Create Contacted")
});

// id에 해당 상세 화면 표시
app.get('/contacts/:id', (req, res) => {
    res.status(200).send(`ID: ${req.params.id}인 연락처 상세화면`)
});

// id에 해당 수정 화면 표시
app.put('/contacts/:id', (req, res) => {
    res.status(200).send(`ID: ${req.params.id}인 연락처 수정화면`)
});

// id에 해당 삭제 화면 표시
app.delete('/contacts/:id', (req, res) => {
    res.status(200).send(`ID: ${req.params.id}인 연락처 삭제화면`)
});

app.listen(3000, () => {
    console.log('3000번 포트에서 서버 대기 중');
});

