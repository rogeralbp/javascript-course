/**
 * Dependiendo del valor de la variable se tomara un 
 * caso y se hara lo que ahi este presente
 */
const dia = 10;

switch(dia){
    case 0:
        console.log('Domingo');
        break;

    case 1:
        console.log('Lunes');
        break;

    case 2:
        console.log('Martes');
        break;

    case 3:
        console.log('Miercoles');
        break;

    case 4:
        console.log('Jueves');
        break;

    case 5:
        console.log('Viernes');
        break;

    case 6:
        console.log('Sabado');
        break;
    
    default:
        console.log('No existe este dia');
        
}