const express = require("express");
const app = express()
const animesController = require("../Controllers/animes");
app.get('/', (req, res) => {
  response.send("Welcome to Anime-mania")
})

//CRUD

app.use("/animes", animesController)






module.exports = app;