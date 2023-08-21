const elMayor = (a,b) => (a > b) ? a : b;
const tieneMembresia = (esMiembro) => (esMiembro) ? '10 $': '500$';

console.log(elMayor(9,73));
console.log(tieneMembresia(false));

const amigo = false;

const amigosArray = [
    'Peter',
    'Chad',
    'Chiwa',
    amigo ? 'Jofe' : 'MaritoSOBO'
]

console.log(amigosArray);



/**
 * Se recomienda encerrar entre corchetes la condicion
 * para que sea mas limpio el codigo
 */
const nota = 85;
const calificacion = (nota >= 95) ? 'A+':
                     (nota >= 90) ? 'A':
                     (nota >= 85) ? 'B+':
                     (nota >= 80) ? 'A':
                     (nota >= 75) ? 'C+':
                     (nota >= 70) ? 'C': 'F';

console.log({nota, calificacion});
