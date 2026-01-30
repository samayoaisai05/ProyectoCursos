// validaciones para los datos que recibimos en la solicitud (req)

function validId(id, cursos, metodo){
    if(metodo === 'POST'){
        // Para crear un curso, el id no debe existir en la lista de cursos
        return typeof id === 'number' && !cursos.some(curso => curso.id === id)
    } else if (metodo === 'PUT') {
        // Para actualizar un curso, el id sí debe existir en la lista de cursos
        return typeof id === 'number' && cursos.some(curso => curso.id === id)
    } else {
        return 'Error de metodo'
    }
}

function validTitulo(titulo){
    return typeof titulo === 'string' && titulo.length > 15
}

function validTecnologia(tecnologia){
    return typeof tecnologia === 'string' && tecnologia.length >= 3
}

function validInscritos(inscritos){
    return typeof inscritos === 'number' && inscritos > 0
}

function validTiempo(tiempo){
    return typeof tiempo === 'number' && tiempo >= 3
}

function validNivel(nivel){
    const listaNiveles = ['basico', 'intermedio', 'avanzado']

    if(typeof nivel === 'string'){
        return listaNiveles.includes(nivel.toLocaleLowerCase())
    }

    return false
}
// validaciones para area programacion

function validProgramacion(curso, cursosArea, metodo){
    const {id, titulo, tecnologia, inscritos, tiempo, nivel} = curso

    if(!validId(id, cursosArea, metodo)){
        return {
            isValid: false,
            error: 'El id ya existe'
        }
    }

    if(!validTitulo(titulo)){
        return {
            isValid: false,
            error: 'El titulo no es acorde'
        }
    }

    if(!validTecnologia(tecnologia)){
        return {
            isValid: false,
            error: 'La tecnologia no es acorde'
        }
    }

    if(!validInscritos(inscritos)){
        return {
            isValid: false,
            error: 'Error en el campo inscritos'
        }
    }

    if(!validTiempo(tiempo)){
        return {
            isValid: false,
            error: 'Error en el tiempo del curso'
        }
    }

    if(!validNivel(nivel)){
        return {
            isValid: false,
            error: 'Error en el nivel del curso'
        }
    }

    return { isValid: true}
}

// validacioes para idiomas



// validaciones para matematicas



module.exports = {
    validProgramacion
}