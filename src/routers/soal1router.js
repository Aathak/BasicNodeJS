const express = require("express");
const app = express()

app.use(express.json())


const soal1controller = require('../controllers/soal1controller')

app.post("/kubus", soal1controller.kubus)
app.post("/balok", soal1controller.balok)
app.post("/bola", soal1controller.bola)
app.post("/tabung", soal1controller.tabung)

module.exports = app