const express = require('express');
const app = express();
const path = require('path');
const Product = require('./models/product');

app.listen(3333,()=>{
    console.log("App is Listening on port");
})

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// app.get('/dog',(req,res)=>{
//     res.send('wooo');
// })

app.get('/products', async (req,res)=> {
    const products = await Product.find({})
    console.log(products)
    res.render('products/index',{products})
})

app.get('/products/:id', async(req,res)=>{
    const { id } = req.params;
    const product = await Product.findById(id)
    console.log(product);
    res.render('products/show',{product})
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmStand',{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connection Open")
})
.catch(err => {
    console.log("Oh No error")
    console.log(err)
})


