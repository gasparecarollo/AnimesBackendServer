const express = require("express");
const animesArr = require("../data/animes")
const animes = express.Router();

animes.get("/animes", (req, res) => {
    console.log(animesArr)
    res.status(200).json(animesArr);
})


module.exports = animes; 