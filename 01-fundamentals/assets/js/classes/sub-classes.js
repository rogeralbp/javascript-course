

class Person {
 
    static _count = 0;
    
    static get personsCount() {
        return Person._count + ' instances of this Object';
    }

    static message(){
        console.log('Hi everyone I am an Static Method');
    }

    name = '';
    codeName = '';
    phrase = '';
    food = '';

    constructor(name = 'no name', codeName = 'no codeName', phrase = 'no phrase'){

        this.name = name;
        this.codeName = codeName;
        this.phrase = phrase;
        Person._count++;
    }

    set setFavoriteFood ( food ){ // example of setter
        this.food = food.toUpperCase();
    }

    get getFavoriteFood (){ // example of get
        return `Favorite food of ${this.codeName} is ${this.food}`;
    }

    whoIam(){
        console.log(`I am ${this.name} and my codeName name is ${this.codeName}`);
    }

    myPhrase(){
        this.whoIam();
        console.log(`${this.codeName} says ${this.phrase}`);
    }
}

//Inheritance of the Person Object
class Heroe extends Person{

    //unica propiedad que refiere a la clase 'Persona' es la clave
    clan = 'no clan';

    constructor(name, codeNamem, phrase){
        /**
         * Cuando se trabaja con una clase padre
         * se debe usar el metodo super super(name, codeNamem, phrase);
         * en el constrcutor
         * para que pueda heredar todo lo relacionado
         * al constructor de la clase padre
         */
        super(name, codeNamem, phrase);

        this.clan = 'Saprissa' ;
    }

    whoIam(){
        console.log(`${this.codeName} plays with the clan ${this.clan} jeje`);
        super.whoIam();//accesing this method from the Parent class
    }
}

//const spiderman =  new Heroe();
const spiderman =  new Heroe('Peter PARKER', 'SpiderMan', 'I am your friendly superheroe');
spiderman.setFavoriteFood = 'CHIFRIJO';
console.log(spiderman);
spiderman.whoIam();