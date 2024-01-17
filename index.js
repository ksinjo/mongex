const express = require('express');
const app = express();
const path = require('path');
const Product = require('./models/product');
const methodoverride = require('method-override');



app.listen(3333,()=>{
    console.log("App is Listening on port");
})

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodoverride('_method'));
// app.get('/dog',(req,res)=>{
//     res.send('wooo');
// })

app.get('/products', async (req,res)=> {
    const products = await Product.find({})
    res.render('products/index',{products})
})

app.get('/products/new',(req,res)=>{
    res.render('products/new')
})

app.post('/products', async (req,res)=>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`);
})

app.get('/products/:id', async(req,res)=>{
    const { id } = req.params;
    const product = await Product.findById(id)
    console.log(product);
    res.render('products/show',{product})
})

app.get('/products/:id/edit', async(req,res)=>{
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit',{product})
})

app.put('/products/:id', async (req,res)=> {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators:true});
    console.log(req.body);
    res.redirect(`/products/${product._id}`);
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


