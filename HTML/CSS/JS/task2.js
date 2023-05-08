//array
const bikes = ["hero", "ktm", "ducati"]
console.log(bikes);

const numbers=[2,2,4]
console.log(numbers);

const cars = [];
cars[0]= "audi";
cars[1]= "Volvo";
cars[2]= "BMW";
console.log(cars);

//push
const number=[]
number.push(111)
console.log(number);
number.push(123,112)
number.push(02)
console.log(number);

const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.push("Kiwi");
console.log(fruit);
//

console.log(bikes[1]);
console.log(bikes[2]);
console.log(number[3]);

bikes[1]="frf";
console.log(bikes);

bikes[1]="ninja";
console.log(bikes);


//for loop
const ipl=["kkr","csk","mi","pjb","del","guj"];
console.log(ipl);
for(let i=0; i<ipl.length; i++){
console.log(ipl[i]);
}

for(let i=1; i<ipl.length; i++){
    console.log(ipl[i]);
    }

//for each
cars.forEach((cars)=>{
    console.log(cars);

})
    
number.forEach((number)=>{
    console.log(number);

})

//join

const cars1=["audi","Volvo","BMW"];
const str=cars1.join(",");
console.log(str);
 
const cars2=["audi","Volvo","BMW"];
const str1=cars2.join(" and ");
console.log(str1);

//concat
const x=["ten","twenty","thirty"];
const y=[10,20,30];
const z=x.concat(y);
console.log(z);

//reverse
const p=['a','b','f','d'];
p.reverse();
console.log(p);

//map
const test=[10,15,18];
const newArr=test.map((x)=>x * 2);
console.log(newArr);

const a=[10,15,18];
const newArr1=a.map((x)=>x * 5);
console.log(newArr1);

//filter
const b=[12,18,8,0,40,39,14];
const l=b.filter((x) => x > 14);
console.log(l);


const c=[12,18,8,0,40,39,14];
const j=c.filter((x) => x < 14);
console.log(j);

//some
const e=[23,22,27,28,44,46,49,50];
const k=e.some((x)=>x%2==0);
console.log(k);

const f=[23,21,27,31,33,45,49];
const m=f.some((x)=>x%2==0);
console.log(m);

const g=[23,21,27,31,33,45,49];
const n=g.some((x)=>x%5==0);
console.log(n);