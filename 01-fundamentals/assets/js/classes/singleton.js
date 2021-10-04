// unique and only instance of a class

class Singleton {

    static instance;
    name = '';


    constructor(name = ''){
        
        if(!! Singleton.instance){
            return Singleton.instance;
        }

        Singleton.instance = this;
        this.name = name;
    }

}

const instance1 = new Singleton('BatMan');
const instance2 = new Singleton('Robin');

console.log(`Instance 1 Name is  ${instance1.name}`);
console.log(`Instance 2 Name is  ${instance2.name}`);
