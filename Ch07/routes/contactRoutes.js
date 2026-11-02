// 패키지 불러오기
const express = require('express');

// ------------------------------
// router 객체 생성
// ------------------------------
const router = express.Router();

// ------------------------------
// 동작 함수 정의
// ------------------------------

// 연락처 화면 표시 / 생성
router
.route('/')
.get((req, res) => {
    res.status(200).send('Contacts Page');
})
.post((req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;

    if (!name || !email || !phone){
        return res.status(400).send('필수값이 입력되지 않았습니다.');
    }
    res.status(201).send('Create Contacts');
});

// 특정 id 연락처 조회 / 수정 / 삭제
router
.route('/:id')
.get((req, res) => {
    res.status(200).send(`View Contact for ID :  ${req.params.id}`);
})
.put((req, res) => {
    res.status(200).send(`Update Contact for ID :  ${req.params.id}`);
})
.delete((req, res) => {
    res.status(200).send(`Delete Contact for ID :  ${req.params.id}`);
});

module.exports = router;