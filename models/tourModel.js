const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    movieName:{
        type: String,
        required: [true, 'A movie should have a title'],
        unique: true
    },
    movieGenre:{
        type: String,
        required: [true, 'A movie should have a genre'],
        unique: true
    },
    movieDirector:{
        type: String,
        required: [true, 'A movie should have a director']
    }
})

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie