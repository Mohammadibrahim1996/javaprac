function fruitProcessor(apples,oranges){
 const juice=`Juice with ${apples} apples and juice with ${oranges}`
 return juice;
}
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const orangeAppleJuice = fruitProcessor(5,5);
console.log(orangeAppleJuice);

function mixer(cement,sand){
    const mixtureRatio=`quantity of cement ${cement} quantity of sand ${sand}`
    return mixtureRatio;
}
const mixerSample1 = mixer(5,3)
console.log(mixerSample1);

function producer(plastic,lead){
    const quantity=`percenatge of plastic ${plastic}% and percentage of ${lead}%`
    return quantity;
}
const producer2= producer()
console.log(producer(5,5));
