// proyecto donde estudiaremos crud con express
const express = require('express')
const app = express()

app.use(express.json)
app.use(express.Router())

const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send("<h1>Practica de Nodejs, Express y Git</h1>")
})

app.listen(PORT, () => {
    console.log('Servidor corriendo: http://localhost:' + PORT)
})