
let a = 5;

if( a >= 10)
{
    console.log('a is greater or equal than 10');
}
else{
    console.log('a is less than 10');
}
console.log('end of program');

const today = new Date();

console.log(today);
//Ejercicio para acceder a un elemento de un array mediante el index
// Dia de la semana 

dia = 22;
//usando objeto literal
const diaSemana = {
    0:  'domingo',
    1:    'lunes',
    2:   'martes',
    3:    'miercoles',
    4:   'jueves',
    5:  'viernes',
    6:   'sabado'
}

//usando un array
const diaSemana2 = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']

//console.log('Dia de la semana es: ', diaSemana[dia] || `NO EXISTE ESE DIA con el index=${dia}`);
console.log('Dia de la semana2 es: ', diaSemana2[dia] || `NO EXISTE ESE DIA con el index=${dia}`);
