const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;

// q1
router.get("/about", (req, res) => {
    res.status(200).send("This is the About page");
});

// q2
const users = [
    {id : 1, name : "Kim"},
    {id : 2, name : "Lee"},
    {id : 3, name : "Park"},
];

router.get("/users", (req, res) => {
    res.json(users);
});


// q3
router.get('/users/search/:name',(req, res, next) => {
    const user = users.find(u => u.name === req.params.name);
    if (!user) {
        const err = new Error("사용자를 찾을 수 없습니다.");
        err.status = 404;
        return next(err);
    }
    res.json(user);
});


app.use(router);

app.use((err, req, res, next) => {
    res.status(err.status).json({
        message: err.message
    });
});

app.listen(port, () => {
    console.log(`${port}번포트에서 서버 실행 중...`);
});
