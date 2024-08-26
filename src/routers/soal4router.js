// express untuk membuat end point
const express = require("express");
const app = express()

app.use(express.json())

//mengimpor controller ke route
const soal4controller = require('../controllers/soal4controller')

// disini adalah endpoint
app.post("/bmi", soal4controller.bmicalculator)

module.exports = app