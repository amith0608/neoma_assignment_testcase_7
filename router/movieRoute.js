const express = require("express")

const movieController = require("./../controllers/movieControllers")

const router = express.Router()
router.route("/").get(movieController.getAllMovies).post(movieController.createMovie)
router.route("/:id").delete(movieController.deleteMovie)
router.route("/movieDirector").get(movieController.movieDirector)
router.route("/movieName").get(movieController.movieName)

module.exports = router