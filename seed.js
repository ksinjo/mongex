const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand',{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connection Open")
})
.catch(err => {
    console.log("Oh No error")
    console.log(err)
})


const seedProducts = [

    {
        name: 'fariy egglant',
        price:1.00,
        category:'vegetable'
    },

    {
        name: 'organic goddess melon',
        price:4.99,
        category:'fruit'
    },

    {
        name: 'organic mini seedless watermelon',
        price:3.99,
        category:'fruit'
    },

    {
        name: 'organic celery',
        price:1.50,
        category:'vegetable'
    },

    {
        name: 'chocolate whole milk',
        price:2.69,
        category:'dairy'

    }
]

Product.insertMany(seedProducts)
    .then(res =>{
        console.log(res)
    })
    .catch(e=> {
        console.log(e)
    })
//

// const p = new Product({
//     name: 'ruby grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save().then (p=> {
//    console.log(p)
// })
//     .catch(e => {
//         console.log(e)
//     })