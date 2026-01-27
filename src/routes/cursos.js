const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')

const fileCursos = path.join(__dirname, '../data/cursos.json')

// funcion reutilizable de leer el archivo
const leerCursos = () => {
    const data = fs.readFileSync(fileCursos, 'utf-8')
    return JSON.parse(data)
}

// listar todos los cursos
router.get('/', (req, res) => {
    try{
        const cursos = leerCursos()
        res.json(cursos)
    } catch (err){
        return res.status(500).json({error: 'Error al leer los cursos'})
    }
})



module.exports = router