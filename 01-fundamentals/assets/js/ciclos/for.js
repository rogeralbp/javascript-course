const heroes = ['SuperMan','Spider-Man','Aqua-Man','DeadPoll']

//ciclo for normal, necesita de una inicializacion, la condicion y el incremento
console.warn('--------Ciclo for-----------')
for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
    
}

//ciclo for in, directamente analiza el lenght del iterable
console.warn('------Ciclo for-in--------')
for(let j in heroes){
    console.log(heroes[j]);
    
}

// ciclo for of, retorna el item iterador
console.warn('------Ciclo for-of--------')
for(let v of heroes){
    console.log(v);
    
}