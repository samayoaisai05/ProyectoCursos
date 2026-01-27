// proyecto donde estudiaremos crud con express
const express = require('express')
const app = express()
const cursosRouter = require('./routes/cursos')

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('<h1>Proyecto de CRUD con cursos</h1>')
})

app.use(express.json())
app.use('/cursos', cursosRouter)


app.listen(PORT, () => {
    console.log('Servidor corriendo: http://localhost:' + PORT)
})