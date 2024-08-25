const express = require("express");
const app = express()

app.use(express.json())


const soal4controller = require('../controllers/soal4controller')

// disini
app.post("/bmi", soal4controller.bmicalculator)

module.exports = app