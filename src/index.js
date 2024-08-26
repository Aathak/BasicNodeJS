const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


// import routers 
// menggunakan 1 titik karena masih 1 folder (src)
const praktikum = require('./routers/praktikumRouters')
const soal1 = require('./routers/soal1router')
const soal2 = require('./routers/soal2router')
const soal4 = require('./routers/soal4router')

// implementasi routers & basic router. Ditulis sebelum end point.
// . dipakai untuk memanggil file lain. Tidak ada titik karena ia membuat url, bukan memanggil sesuatu.
app.use('/praktikum', praktikum)
app.use('/soal1', soal1)
app.use('/soal2', soal2)
app.use('/soal4', soal4) //basic endpoint

app.get("/test", (req,res) => {
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }

    res.json(response)
})

app.listen(4000, () => {
    console.log("Server run on port 4000");
})