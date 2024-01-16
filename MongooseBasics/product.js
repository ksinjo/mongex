const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp',{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connection Open")
})
.catch(err => {
    console.log("Oh No error")
    console.log(err)
})


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength:[20,"이름은 20자 내로하라고 말했어 안했어?"]
    },
    price: {
        type:Number,
        required: true,
        min: [0,'음수 따위 넣치 말라고 이건 전방주시하지 않고 운전하는 김여사같은 짓인걸 알아 몰라?!']
    },
    onSale : {
        type:Boolean,
        default:false
    },
    categories:[String],
    qty: {

        online: {
            type:Number,
            default: 10
        },
        instore: {
            type:Number,
            default: 0
        }
    },
    size: {
        type:String,
        enum: ['S','s','M','m','L','XL','XXL']
    }

});



    productSchema.methods.sayHi= function() {
        console.log(`${this.name} HI`);
    }


    productSchema.methods.increasePrice = function() {
       const increasePriceitem = this.price * 1.2;
       console.log(increasePriceitem);
      
    }

    productSchema.methods.discountsummer = function() {
        const discountitem = this.price * 0.5;
        console.log(discountitem);
    }

    productSchema.methods.toggleOnsale = function() {
     
        if(this.sale = false) {
            this.sale = true;
        } else{
            this.sale = ture;
    
    }
}

// productSchema.methods.greet = function() {
//     console.log('Welcome!');
//     console.log(`-previous by item: ${this.name} price: ${this.price}` );
// }

// productSchema.methods.toggleOnSale = function() {
//     this.onSale = !this.onSale;
//     return this.save();
// }

// productSchema.methods.addCategory = function (newCat) {
//     this.categories.push(newCat);
//     return this.save;
// }

const product = mongoose.model('Product',productSchema);
// const summer = new product({name:"ss_red",price:40,categories:"summer"});
// summer.save();
// const Product = mongoose.model('Product', productSchema);
// const ware = new Product({ name:"Mountain pants", price:21,size:'m'});
// ware.save() 

// const sayhitarget = async() => {
//     const hitarget = await product.findOne({name:"s1_blueP01"});
//     hitarget.sayHi();
// }

// sayhitarget();

const inc = async() => {
        const priceupitem = await product.updateMany({"categories":"summer"}, {$set: {price:99}});
        console.log(priceupitem);
      
 }

 inc();




// const bigDiscounter = async() => {
//     const bigdisitem = await product.findOne({"categories":"summer"});
//     console.log(`before discount price: ${bigdisitem}`);
//     bigdisitem.discountsummer();
//     console.log(`after discount price: ${bigdisitem}`);
// }

// bigDiscounter();

// inc();

// const onSale = async() => {
//     const saleItem = await Product.findOne({name:"Mountain pants"});
//     console.log(`origianl sale State:${saleItem}`);
//     saleItem.toggleOnSale();
//     console.log(saleItem);
//     await saleItem.addCategory('Outdoors');
//     console.log(saleItem);
// }

// onSale();

// const findProduct = async() => {
//     const foundProduct = await Product.findOne({name:"bike"});
//     foundProduct.greet();
// }

// findProduct();

// Product.findOneAndUpdate({name:'Tire pump k91452126421234'},{price: 19.99},{new :true, runValidators:true})

// //  bike.save() 
//     .then(data=> {
//         console.log("it worked")
//         console.log(data)
//     }) 
//     .catch(err => {
//         console.log("Error Ouccr")
//         console.log(err)
//     })
    