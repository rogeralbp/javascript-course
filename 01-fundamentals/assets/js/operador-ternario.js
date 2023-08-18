/**
 * Logica para un sitio web para consultar la horaApertura de un restaurante
 * dependiendo del dia de la semana
 * dias:
 *      0:Domingo
 *      6:Sabado
 */

//const son datos que no cambian
const dia = 6;
const horaActual = 12;

// let son datos que eventualmente cambiaran 
let mensaje, horaApertura;

//entre semana se abre a las 9
//fin de semana se abre a las 11
horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;//uso de operados terneario para eso

mensaje = ( horaActual >= horaApertura ) ? 'Esta abierto' : `Esta Cerrado. hoy abrimos a las ${horaApertura}` 

console.log({horaApertura,mensaje, dia});
