
//objects
let car="bently";
console.log(car);

//assigning objects for rollsroyce
let car1="rollsroyce";
console.log(car1);

//using name.abc
const cars={type:"rollsroyce", model:"2023", color:"gold"};
console.log("The car name is "+cars.type+".And the car model is "+cars.model+" . ");


const names={first:"Likhith", middle:"Raj", last:"Shetty"};
console.log("My full name is "+names.first+" "+names.middle+" "+names.last);

//using name.[" abc "]
const names1={first:"Likhith", middle:"Raj", last:"Shetty"};
console.log("My full name is "+names1["first"]+" "+names1.middle+" "+names1["last"]);


//using this function
  const human1= {
    firstName: "sharukh",
    lastName: "khan",
    age: 40,
    skin: "fair",
    fullname: function() {
        return this.firstName +" "+this.lastName;

    }
  };
  console.log(human1.firstName + " is " + human1.age + " years old.");
  console.log(human1.fullname());

  const human2= {
    firstName: "rahul",
    lastName: "roy",
    age: 25,
    skin: "fair",
    fullname: function() {
        return this.firstName +" is "+this.skin;

    }
  };
  console.log(human2.firstName + " is elder and " + human2.age + " years old.");
  console.log(human2.fullname());


  //iterables

  const s = "google";
  for(const x of s) {
    console.log(x);
  }
 
//iterating using for loop
let str = "Hello, World!";
for(let i=0; i<str.length; i++) {
  console.log(str[i]);
}

//iterating over a map
const fruit = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
  for (let [key, value] of fruit) {
  console.log(key + " , " + value);
}

//getting value 
const fruit1 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruit1.get("apples"));

  


  