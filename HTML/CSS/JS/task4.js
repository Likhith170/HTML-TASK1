//js classes
class object {
    constructor(name, model) {
      this.name = name;
      this.model = model;
    }
  }
  const myobject1 = new object("monitor", 2016);
  const myobject2 = new object("keyboard", 2017);
  console.log(myobject1.name+","+myobject2.name);
  console.log(myobject1.model+","+myobject2.model);
  console.log(myobject1.name+","+myobject1.model);

  console.log("");


 //class inheritance- constructor method
 class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
  
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;     //new Date().getFullYear()=current year
    }
  }
  
  const myCar = new Car("Ford", 2015);
  console.log("my car is "+ myCar.age()+" years old");

  

  class Car7 {
    constructor(name7, year7) {
      this.name7 = name7;
      this.year7 = year7;
    }
    age(x) {
      return x - this.year7;
    }
  }
  
  const date = new Date();
  let year7 = date.getFullYear();
  
  const myCar7 = new Car7("Bently", 2014);
  console.log("my car is "+myCar7.name7+" and is "+myCar7.age(year7)+" years old");
   
  console.log("");

class object7{
    constructor(height, width, radius){
        this.height=height;
        this.width=width;
        this.radius=radius;
    }
    getArea(){
        return this.height * this.width;
    }
    getPerimeter(){
        return 2 * (this.height + this.width);
    }
    getDiameter(){
        return this.radius * 2;
    }
}
    const myobject7= new object7(6, 9, 7);
    console.log(myobject7.getArea()); // Output: 54
console.log(myobject7.getPerimeter());
console.log(myobject7.getDiameter());

console.log("");

class CAR {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  class Model extends CAR {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  const myCAR = new Model("Ford", "Mustang");
  console.log(myCAR.show());


//using get and set
  class Car11 {
    constructor(brand) {
      this.carname1 = brand;
    }
    get cnam() {
      return this.carname1;
    }
    set cnam(x) {
        this.carname1 = x;
      }
  }
  
  const aCar = new Car11("Ford");
  //aCar.cnam = "Volvo";
  console.log(aCar.cnam);

  //class hosting
  class car0 {
    constructor(brand) {
      this.carname0 = brand;
    }
  }
  const newCar = new car0("Maruthi");
  console.log(newCar.carname0);
  
console.log("");

//class static
class place {
    constructor(city) {
      this.placename = city;
    }
    static hello() {
        return "Hello!!";
  }
}
  const myplace = new place("Mangalore");
  console.log(myplace.placename);
  console.log(place.hello());


  class Car77 {
    constructor(name77) {
      this.name77 = name77;
    }
    static hello(x) {
      return "Hello " + x.name77;
    }
  }
  
  const myCar77 = new Car77("Mangalore");
  console.log(Car77.hello(myCar77));