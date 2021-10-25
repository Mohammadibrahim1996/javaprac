//show street
//show city zipcode 
//print adress
 
///normal Function

// let adress={
//  street:"a",
//  city:"b",
//  zipCode:"c"
// };

// function showAdress(adress){
//     for (let key in adress)
//     console.log(key,adress[key]);
// }
//  showAdress(adress);

 //Fatctory Function
 function createAdress(street,city,zipCode){
    return {
        street,
        city,
        zipCode
    };
}


//Constructor Function
let adress = new Adress( "a","b","c");
console.log(adress)

 function Adress(street,city,zipCode){
     this.street=street;
     this.city=city;
     this.zipCode=zipCode;
 } 