const express = require("express");
const app = express()

app.use(express.json())


const soal2controller = require('../controllers/soal2controller')

// disini
app.post("/celcius", soal2controller.celcius)
app.post("/reamur", soal2controller.reamur)
app.post("/kelvin", soal2controller.kelvin)
app.post("/fahrenheit", soal2controller.fahrenheit)

module.exports = app