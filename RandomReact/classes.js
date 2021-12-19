
//parentClass
class Person {
    constructor(fname,lname){
        this.FirstName= fname;
        this.LastName = lname;
    }
    greetings(){
        return`Welcome ${this.FirstName}${this.LastName}`;
    }
}

// const details = new Person("jhon","Wick");
// console.log(details);
// console.log(details.greetings());

///subClass
 class Contact extends Person {
     constructor (fname,lname,phone,city){
         super(fname,lname);
         this.number=phone;
         this.shaher=city;
     }
     getContact (){
        return `Contact: ${this.number} city:${this.shaher}`;
     }
 }
//     const deatils = new Contact("jhon","wick",8983134798,"newYork")

// console.log(deatils.greetings(),deatils.getContact());

class Country extends Contact{
    constructor(fname,lname,phone,city,country){
    super(fname,lname,phone,city)
    this.countryName= country;
}
getCountry(){
    return `From: ${this.countryName}`;
}
};
const fullDetails= new Country("jhon","wick",8983134798,"Nanded","India");
console.log(fullDetails.greetings(),fullDetails.getContact(),fullDetails.getCountry());


