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

function validIdioma(idioma){
    const listaIdiomas = ['ingles', 'frances', 'mandarin', 'japones']

    if(typeof idioma === 'string'){
        return listaIdiomas.includes(idioma.toLocaleLowerCase())
    }

    return false
}

function validTema(tema){
     return typeof tema === 'string' && tema.length >= 5
}

// validaciones para area programacion
function validProgramacion(curso, cursosArea, metodo){
    const {id, titulo, tecnologia, inscritos, tiempo, nivel} = curso

    if(!validId(id, cursosArea, metodo)){
        return {
            isValid: false,
            error: 'Problemas con el Id'
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
function validIdiomas(curso, cursosArea, metodo){
    const {id, titulo, idioma, inscritos, tiempo, nivel} = curso

    if(!validId(id, cursosArea, metodo)){
        return {
            isValid: false,
            error: 'Problemas con el Id'
        }
    }

    if(!validTitulo(titulo)){
        return {
            isValid: false,
            error: 'Problemas en el titulo'
        }
    }

    if(!validIdioma(idioma)){
        return {
            isValid: false,
            error: 'Problemas con el idioma'
        }
    }

    if(!validInscritos(inscritos)){
        return {
            isValid: false,
            error: 'Problemas con la cantidad de inscritos'
        }
    }

    if(!validTiempo(tiempo)){
        return {
            isValid: false,
            error: 'Problemas en el tiempo'
        }
    }

    if(!validNivel(nivel)){
        return {
            isValid: false,
            error: 'Problemas en el nivel'
        }
    }

    return { isValid: true}
}

// validaciones para matematicas
function validMatematicas(curso, cursosArea, metodo){
    const {id, titulo, tema, inscritos, tiempo, nivel} = curso

    if(!validId(id, cursosArea, metodo)){
        return {
            isValid: false,
            error: 'Problemas con el Id'
        }
    }

    if(!validTitulo(titulo)){
        return {
            isValid: false,
            error: 'El titulo no es acorde'
        }
    }

    if(!validTema(tema)){
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


module.exports = {
    validProgramacion,
    validIdiomas,
    validMatematicas
}