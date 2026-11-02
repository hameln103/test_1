const express = require("express");
const app = express();
const contactRouter = require("./routes/contactRoutes2.js");
const aboutRouter = require("./routes/about.js");
const port = 3000;

//Body 파서
app.use(express.json());

//라우터 마운트
app.use("/contacts", contactRouter);
app.use("/", aboutRouter);

//404
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// 에러 핸들러
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({
        title: status === 500 ? "Internal Server Error" :
            "Error",
        message: err.message || "Unknown error",
    });
});

app.listen(port, () => {
    console.log(`${port}번포트에서 서버 실행 중...`);
});
