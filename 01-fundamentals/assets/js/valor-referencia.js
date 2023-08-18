//Variables Primitivas
let a = 10;
let b = a;
//estas pueden ser re-asignadas sin problema
a = 30;

console.log({ a, b });

//Objetos Literales 
/**
 * Estos no puede solo re-asignarse como los primitivos
 * deben de ser des-estructurados
 */
let juan = { nombre: 'Juan' };
let ana  = { ...juan };// ejemplo de des-estructuracion
ana.nombre = 'Ana';

console.log({ juan, ana });


const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony  = cambiaNombre( peter );


console.log({ peter, tony });

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();// ejemplo de des-estructuracion
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];// ejemplo de des-estructuracion
console.timeEnd('spread');


otrasFrutas.push('Mango');
otrasFrutas.push('Kiwi');
console.table({ frutas, otrasFrutas });