// 모듈 불러오기
const express = require("express");
const Contact = require("../models/contactModel");

// 라우터 생성 
const router = express.Router();

// http://localhost:3000/contacts
router.route("/")
.get((req, res)=>{
    res.status(200).send('Contact Page');
})
.post(async (req, res)=>{
    console.log(req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        return res.status(400).send('필수 값이 입력되지 않았습니다.');
    }
    // DB에 데이터 저장
    const contact = await Contact.create({
        name, email, phone
    });

    res.status(200).send(contact);
});

// http://localhost:3000/contacts/1
router.route("/:id")
.get((req, res)=>{
    res.status(200).send(`View Contact for ID : ${req.params.id}`);
})
.put((req, res)=>{
    res.status(200).send(`Update Contact for ID : ${req.params.id}`);
})
.delete((req, res)=>{
    res.status(200).send(`Delete Contact for ID : ${req.params.id}`);
});

module.exports = router;