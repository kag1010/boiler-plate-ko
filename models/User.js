//스키마와 모듈
//스키마 : 객체의 속성값 설정
//모듈 : 스키마를 DTO 해준것(객체화 해줌)

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //스페이스 없어줌
        unique: 1
    },
    password : {
        type: String,
        maxlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type:Number
    }
})

const User = mongoose.model('User', userSchema)   //모듈화
module.exports = { User }  //다른 파일에서도 사용가능하도록 export