const express = require("express");
const app = express()

app.use(express.json())


const soal3controller = require('../controllers/soal3controller')

// disini
app.post("/decimal", soal3controller.decimal)
app.post("/biner", soal3controller.biner)
app.post("/octal", soal3controller.octal)
app.post("/hexadecimal", soal3controller.hexadecimal)

module.exports = app