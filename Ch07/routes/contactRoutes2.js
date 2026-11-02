const express = require("express");
const router = express.Router();

// 임시 데이터 (메모리)
let nextId = 3;
let contacts = [
    { id: 1, name: "Kim", email: "kim@aaa.bbb", phone: "010-1111-2222" },
    { id: 2, name: "Lee", email: "lee@aaa.bbb", phone: "010-3333-4444" },
];

// [GET] /contacts 전체 조회 / [POST] /contacts 생성
router
.route("/")
.get((req, res) => {
    res.json({ count: contacts.length, data: contacts });
})
.post((req, res, next) => {
    const { name, email, phone } = req.body;
    if (!name || !email) {
        const err = new Error("name과 email은 필수 항목입니다.");
        err.status = 400;
        return next(err);
    }
    const contact = { id: nextId++, name, email, phone: phone || "" };
    contacts.push(contact);
    res.status(201).json(contact);
});

// [GET] /contacts/:id 단건 조회 / [PUT] /contacts/:id 수정(덮어쓰기) / [DELETE] /contacts/:id 삭제
router
.route("/:id")
.get((req, res, next) => {
    const id = Number(req.params.id);
    const found = contacts.find(c => c.id === id);
    if (!found) {
        const err = new Error("Contact not found");
        err.status = 404;
        return next(err);
    }
    res.json(found);
})
.put((req, res, next) => {
    const id = Number(req.params.id);
    const i = contacts.findIndex(c => c.id === id);
    if (i === -1) {
        const err = new Error("contact not found");
        err.status = 404;
        return next(err);
    }
    const { name, email, phone } = req.body;
    if (!name || !email) {
        const err = new Error("name과 email은 필수 항목입니다.");
        err.status = 400;
        return next(err);
    }
    contacts[i] = { id, name, email, phone: phone || "" };
    res.json(contacts[i]);
})
.delete((req, res, next) => {
    const id = Number(req.params.id);
    const i = contacts.findIndex(c => c.id === id);
    if (i === -1) {
        const err = new Error("Contact not found");
        err.status = 404;
        return next(err);
    }
    const deleted = contacts.splice(i, 1)[0];
    res.json({ deleted });
});

module.exports = router;