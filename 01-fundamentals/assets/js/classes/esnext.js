


class Rectangle{

    #area = 0;

    constructor(base = 0, alt = 0 ){

        this.base = base;
        this.alt  = alt;

        this.area = base * alt;

    }

    calcultateArea(){
        console.log(`${this.area} mupltiplicado por 2 es =`,this.area * 2);
    }
}


const rectangle = new Rectangle(10, 15);
console.log(rectangle);
rectangle.calcultateArea();