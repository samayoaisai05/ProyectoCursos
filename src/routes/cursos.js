const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const { validProgramacion } = require('../utils/validaciones') 

const fileCursos = path.join(__dirname, '../data/cursos.json')

// funcion reutilizable de leer el archivo
const leerCursos = async () => {
    try{
        const data = await fs.promises.readFile(fileCursos, 'utf-8')
        return JSON.parse(data)
    } catch (error){
        throw new Error('Error al leer el archivo')
    }
}

const escribirCurso = async (data) => {
    if(typeof data !== 'object' || data === null){
        throw new Error('Tipos de datos invalidos')
    }

    try{
        await fs.promises.writeFile( // cuando utilizamos async es necesario utilizar fs.promises
            fileCursos, JSON.stringify(data, null, 4), 'utf-8' 
        )
    } catch (error){
        throw new Error('Error al escribir el archivo de curso')
    }
}

// metodo para listar todos los cursos
router.get('/', async (req, res) => {
    try{
        const cursos = await leerCursos()
        res.json(cursos)
    } catch (err){
        return res.status(500).json({error: 'Error al leer los cursos'})
    }
})

// metodo para crear un nuevo curso
router.post('/:area', async (req, res) => {
    const area = String(req.params.area)
    const nuevoCurso = req.body

    try{
        const cursos = await leerCursos()

        // crear validaciones para los datos ingresados en el body y params
        if(!cursos[area]){
            return res.status(404).json({error: 'Area no encontrada'})
        }

        const validaciones = validProgramacion(nuevoCurso, cursos[area], 'POST')
        if(!validaciones.isValid){
            return res.status(400).json({error: validaciones.error})
        }

        cursos[area].push(nuevoCurso)
        await escribirCurso(cursos)
        return res.status(201).json({
            message: 'Curso creado exitosamente',
            curso: nuevoCurso
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Error en el servidor'
        })
    }
})

// metodo para actualizar un curso
router.put('/:area/:id', async (req, res) => {
    const area = String(req.params.area)
    const idCurso = parseInt(req.params.id)
    const updateCurso = req.body

    try{
        const cursos = await leerCursos()

        if(!cursos[area]){
            return res.status(404).json({
                error: 'No se encontró esa area'
            })
        }
        
        cursos[area] = cursos[area].map(
            curso => curso.id === idCurso ? {...curso, ...updateCurso} : curso
        )

        await escribirCurso(cursos)
        return res.status(200).json({
            message: 'Curso actualizado exitosamente'
        })

    } catch (error){
        console.log(error)
        return res.status(500).json({
            error: 'Error en le servidor'
        })
    }
})


router.delete('/:area/:id', async (req, res) => {
    const area = String(req.params.area)
    const idCurso = parseInt(req.params.id)

    try{
        const cursos = await leerCursos()

        cursos[area] = cursos[area].filter(curso => curso.id !== idCurso)

        await escribirCurso(cursos)
        return res.status(200).json({
            message: 'Curso eliminado con exito'
        })

    } catch(error) {
        console.log(error)
        return res.status(500).json({
            error: 'Error en el servidor'
        })
    }
})


module.exports = router