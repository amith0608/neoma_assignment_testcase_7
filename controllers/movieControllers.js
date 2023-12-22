const Movie = require("./../models/tourModel")

exports.getAllMovies = async (req,res)=>{
    try{
        const movies = await Movie.find()
        res.status(200).json({
            status: "ok",
            data:{
                movies
            }
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message: "ERROR=>"+err
        })
    }
}

exports.createMovie = async(req,res)=>{
    try{
        const newMovie = await Movie.create({
            movieName: req.body.movieName,
            movieGenre: req.body.movieGenre,
            movieDirector: req.body.movieDirector
        })
        res.status(201).json({
            status: "ok",
            data:{
                movie: newMovie
            }
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message: "ERROR=>"+err
        })
    }
}

exports.deleteMovie = async(req,res)=>{
    try{
        await Movie.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: "ok",
            data: null
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message: "ERROR=>"+err
        })
    }
}

exports.movieDirector = async(req,res)=>{
    try{
        const stats = await Movie.aggregate([
            {
                $match: {"movieDirector" :req.body.movieDirector}
            }
            
        ])
        res.status(200).json({
            status: "ok",
            data:{
                stats
            }
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message: "ERROR=>"+err
        })
    }
}

exports.movieName = async(req,res)=>{
    try{
        const stats = await Movie.aggregate([
            {
                $match: {"movieName" :req.body.movieName}
            }
            
        ])
        res.status(200).json({
            status: "ok",
            data:{
                stats
            }
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message: "ERROR=>"+err
        })
    }
}
