// unique and only instance of a class
/**
 * se usa para instanciar un dato para todos los objetos de una clase
 * comparte un dato a lo largo de una aplicacion se ahorra memoria, etc
 */
class Singleton {

    static instance;//sino se asigna valor, se setea a null or undefined
    name = '';


    constructor(name = ''){
        /**sino se instancia se tomara el nombre como instancia */
        if(!! Singleton.instance){
            return Singleton.instance;
        }

        Singleton.instance = this;
        this.name = name;
    }

}

const instance1 = new Singleton('Rogercito');
const instance2 = new Singleton('Robin');

console.log(`Instance 1 Name is  ${instance1.name}`);
console.log(`Instance 2 Name is  ${instance2.name}`);
