const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/naruApp',{useNewUrlParser: true, useUnifiedTopology: true})

  .then(()=> {
    console.log("connection Actived");

  })

  .catch(err => {
    console.log("Error Ocurr")
    console.log(err)
  })


const desSchema = new mongoose.Schema({
   name : String,
   damage : Number,
   attackSpeed: Number,
   attackTarget: String
})


const DesChild = mongoose.model('DesChild',desSchema);
const emir =new DesChild({name:"emir", damage: 65, attackspeed: 1,attackTarget:"제일 앞의 몬스터 "});

const add_1 = new DesChild();
add_1.save() 

DesChild.insertMany([
  {name:"리자" ,damage: 44,attackSpeed: 1.4 ,attackTarget:"제일 앞의 몬스터" },
  {name:"잔다리크" ,damage:67 ,attackSpeed:1.5 ,attackTarget:"제일 앞의 몬스터" },
  {name:"오로라밈" ,damage:42 ,attackSpeed:1 ,attackTarget:"제일 앞의 몬스터" }

])

.then(data=>{
  console.log("Additional work has been completed");

})

.catch(err=>{
  console.log("Error Occur");
  console.log(err);
})