// 몽구즈 로드
const mongoose = require('mongoose');
// 몽구즈 스키마 정의. productSchema 정의 
const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        require:true,
        min:0
    },
    category:{
        type:String,
        enum:['fruit','vegetable','dairy'],
        lowercase:true
    }
})
// 몽구즈 모델의 사용할 DB위치, 스키마 지정 모델변수 이름 첫글자 대문자
const Product = mongoose.model('Product',productSchema);
// 모듈 분리를 위한 익스포츠
module.exports = Product;