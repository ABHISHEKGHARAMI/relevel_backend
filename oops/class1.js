//class
class laptop{
    make ;
    model;
    ram;
    //constructer
    constructor(make,model,ram){
        this.make= make;
        this.model = model;
        this.ram =ram;
    }
    //method
    print(){
        console.log(this);
    }
}

class rectangle{
    he;
    wi;
    constructor(he,wi){
        this.he = he;
        this.wi = wi;
    }
    get area(){
        return this.calculatearea();
    }
    calculatearea(){
        return this.he * this.wi;
    }
}


//objects
//class is the blue print of the objects.
let lap = new laptop('Dell','Inspiron',16);
console.log(lap);
console.log(lap.print());
let te1  = new rectangle(3,4);
console.log(te1.area);

