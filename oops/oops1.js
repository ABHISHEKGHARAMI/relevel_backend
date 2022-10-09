//constructer -it is a way to create objects.
// first create the class
  const laptop={
    make : 'Apple',
    model : 'Macbook pro',
    memory : ['SSD','HDD'],
    cores : 8,
    memorySiz : [256,512],
  };
  console.log(laptop.make,laptop.cores,laptop.memory,laptop.memorySiz);
  console.log(laptop)
  //constructers
  //The constructer method/function is a special method of class
  //inoked for creating and instance of the class
 /*function Laptop(){
    this.make = 'Dell';
    this.model = 'Inspiron 1509C';
    this.cores = 10;
};*/
//const myLaptop = new laptop();
function Laptop(type,ram){
    this.make = type;
    this.ram = ram;
    this.addcore = function(core){
      this.core = core;
    }
}
const lap1 = new Laptop('DELL',8);
const lap2 = new Laptop('Apple',16);
console.log(lap1.make,lap1.ram,lap2.make,lap2.ram);