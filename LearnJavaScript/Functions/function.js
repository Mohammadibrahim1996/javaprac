function fruitProcessor(apples,oranges){
 const juice=`Juice with ${apples} apples and juice with ${oranges}`
 return juice;
}
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const orangeAppleJuice = fruitProcessor(5,3);
console.log(orangeAppleJuice);