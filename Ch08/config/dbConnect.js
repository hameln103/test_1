// 모듈 불러오기
const mongoose = require('mongoose');

require("dotenv").config();

// DB 연결 
const dbConnect = async () => {
    try{
        const connect = await mongoose.connect(process.env.DB_CONNECT);
        console.log("DB connected");

    }catch(err){
        console.log("DB connected");
    }
};

module.exports = dbConnect;