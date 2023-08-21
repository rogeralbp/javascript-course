function crearPersona(nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

//function flecha
const crearPersona2 = (nombre, apellido) =>{
    return {
        nombre: nombre,
        apellido: apellido
    }
}

// en una sola linea
const crearPersona3 = (nombre, apellido) => ({nombre, apellido})


const test = crearPersona('Roger','Oporta');

console.log(test);
