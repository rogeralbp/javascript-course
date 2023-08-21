const carros = ['Mercedes-Benz','Toyota','Mazda','ZS-Miedo','BMW'];
let i = 0;

//while en general funcionando
// while(i < carros.length ){
//     console.log(carros[i]);
//     // i = i + 1
//     i++;
    
// }
//usando un diferente approach en la condicion del while
// se salta el valor con el indice 2
console.warn('WHILE')
while(carros[i]){
    if(i ===2){
        i++;
        continue;
    }

    console.log(`valor ${carros[i]} indice ${i}`);
    i++;
    
}

console.warn('DO-WHILE')
// va realizar todo al menos una sola vez
let j= 0;
do{

    console.log(carros[j]);
    j++;
    
}while(carros[j]);