const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp',{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connection Open")
})
.catch(err => {
    console.log("Oh No error")
    console.log(err)
})


const personSchema = new mongoose.Schema({
    first: String,
    last: String});

personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`
})

personSchema.pre('save',async function() {
  this.first ='be';
  this.last='nom';
  console.log('ABOUT TO SAVE!!');
})
personSchema.post('save',async function(){
  console.log('just save');
})

const Person = mongoose.model('Person', personSchema);