const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp',{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connection Open")
})
.catch(err => {
    console.log("Oh No error")
    console.log(err)
})


const movieSchema = new mongoose.Schema({
    title : String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie',movieSchema);
// const amadeus = new Movie({title: 'Amadeus', year:1986, score:9.2, rating:'R'});

// const blah = new Movie();
// blah.save()

// Movie.insertMany([
//     { title: 'Amlie', year:2001, score:8.3 , rating:'R' },
//     { title: 'Alien', year:1979, score:8.1 , rating:'R' },
//     { title: 'The Irom Giant', year:1999, score:7.5 , rating:'R' },
//     { title: 'Stand By Me', year:1986, score:8.6 , rating:'R' },
//     { title: 'Moonrise Kindom', year:2012, score:7.3 , rating:'PG-13' }
// ])

//     .then(data=> {
//         console.log("it worked");
//         console.log(data);
//     })

//     .catch(err=> {
//         console.log("OH no Error")
//         console.log(err)
//     })