const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');
mongoose.connect("mongodb://localhost:27017/moviesdb",{useNewUrlparser: true, useUnifiedTopology:true})
.then (()=>console.log("sucess"))
.catch((err) =>console.log(err));

app.set('view engine', 'ejs');



const moviesSchema = {
   PROJECTtitle: String,
   
}

const Movie = mongoose.model('Movie', moviesSchema);

app.get('/', (req, res) => {
    Movie.find({}, function(err, movies) {
        res.render('index', {
            moviesList: movies
        })
    })
})

app.listen(3000, function() {
    console.log('server is running');
})