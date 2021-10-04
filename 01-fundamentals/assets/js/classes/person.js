

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

const spiderman =  new Person('Peter PARKER', 'SpiderMan', 'I am your friendly superheroe');
const ironman =  new Person('tONY STARC', 'IronMan', 'I am your friendly metal');

console.log(spiderman);
console.log(ironman);

//spiderman.whoIam();
//ironman.whoIam();
//spiderman.myPhrase();
//ironman.myPhrase();
//spiderman.setFavoriteFood = 'Pie of Aunt May';
//console.log(spiderman.getFavoriteFood);

console.log('static count of this Object', Person._count);
console.log(Person.personsCount);
Person.message();