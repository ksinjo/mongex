const mongoose = require('mongoose');
mongoose.connect = ('monbodb://localhost:27017/shop2App',{useNewparse:true,useunifiedtoplogy:true})

.then(()=>{
    console.log('conneted')
})
.catch((err)=> {
    console.log('err occur')
    console.log(err)
})

const product = mongoose.model('product1',product1Shema);

const 