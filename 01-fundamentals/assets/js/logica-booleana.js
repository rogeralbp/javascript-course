const returnTrue = () =>{
    console.log('returning TRUE');
    return true;
}

const returnFalse = () =>{
    console.log('returning false');
    return false;
}

console.warn('NOT o la negacion')

console.log(true);//true
console.log(!true);//false
console.log(!false);//true
console.log(!returnFalse());//true


console.warn('Condicion AND')
console.log( true && true);//true
console.log( true && false);//false
console.log( true && !false);//true

console.log('==========&&==========');

/**
 * en validaciones AND es recomendable definir
 * la posible condicion true al inicio ya que si fuese false lo demas no se evaluara
 */
console.log(returnFalse() && returnTrue());//false
console.log(returnTrue() && returnFalse());//false
console.log(returnTrue() && !returnFalse());//true
console.log('Cuatro condiciones', true && true && true && false ); // en la validacion AND todas la variables debe ser true para que el resultado sea true

console.warn('Condicion OR')
console.log('========== || ==========');

console.log(true || false);//true
console.log(false || true);//true
console.log('Cuatro condiciones', true || true || true || false ); // en la validacion OR AL MENOS 1 variable debe ser true para que el resultado sea true
