let markMass= 95 ;
let markHeight=1.88 ;
let jhonMass= 85 ;
let jhonHeight=1.76;

bmiOfMark=markMass/markHeight**2;
bmiOfJhon=jhonMass/(jhonHeight*jhonHeight);

//  markHigherBmi=(bmiOfMark>bmiOfJhon);

//  console.log(bmiOfMark,bmiOfJhon,markHigherBmi);

if(bmiOfMark > bmiOfJhon){
    console.log(`marks bmi ${bmiOfMark} is higher than jhon bmi ${bmiOfJhon}`);
} else{
    console.log(`jhon ${bmiOfJhon} bmi is higher than marks bmi ${bmiOfMark}`);
}



