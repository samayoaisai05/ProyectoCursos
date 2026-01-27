// proyecto donde estudiaremos crud con express
const express = require('express')
const app = express()
const cursosRouter = require('./routes/cursos')


app.use(express.json())

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('<h1>Proyecto de CRUD con cursos</h1>')
})


// metodo get para obtener todos los cursos
app.use('/cursos', cursosRouter)


app.listen(PORT, () => {
    console.log('Servidor corriendo: http://localhost:' + PORT)
})