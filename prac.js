
 
for (let i=0; i <= 5 ; i++) {
    console.log("hello World",i);
};

let i = 0 ;
while(i<=10){
    if (i % 2 === 0) console.log (i);
    i++;
};

let i = 0 ;
while(i<=10){
    if (i % 2 !== 0) console.log (i);
    i++;
};

for in helps you iterate over an object targetting the keys
it can also iterate over an array but that is not good practise

const colors = [ "red","green","blue"];
 
for (let items in colors){
    console.log (colors[items]);
};

const person = {
    name: Mak" ,
    age: 25 ,
};

for (let key in person ){
    console.log (key,person[key]);
};

for of type

const numbers = [10,20,30,40];
for (let anything of numbers ){
    console.log(anything+5);
};

console.log("Hello World")
 
let a='red';
let b='blue';

let c=a;
 a=b;
 b=c;
console.log(a);
console.log(b);

const a = function(x,y){
    return x+y;
}
const b = a(15, 10);
console.log(b)

function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  reverseString("hello");
   console.log(reverseString());