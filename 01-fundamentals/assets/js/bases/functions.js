

const saludar = function(){ // de esta manera la variable saludar no se va a poder usar mas (seguridad)
    console.log('Hola Mundo Roger');
}

const saludarFlecha = () => { 
    console.log('Hola Mundo Flecha');
}

const sumarFlecha = (a,b) => a + b; // funcion flecha en 1 linea

function getRamdon(){
    return Math.random();
}
const getRamdonArrowFunction = () => Math.random();

console.log('Normal Function ' + getRamdon());
console.log('Arrow Function ' + getRamdonArrowFunction());

saludarFlecha();
console.log(sumarFlecha(5,5));