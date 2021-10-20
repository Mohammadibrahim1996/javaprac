class Patient {
    constructor(fname,lname){
        this.firstName=fname;
        this.lastName=lname;
    }
    getPatient(){
        return `Name: ${this.firstName} ${this.lastName}`
    }
}
 class Add extends Patient {
     constructor(fname,lname,address){
         super(fname,lname);
         this.address=address
     }
     getAdd(){
         return `Address: ${this.address}`
     }
 }

 class City extends Add {
     constructor(fname,lname,address,city){
         super(fname,lname,address);
         this.city=city
     }
     getCity(){
         return `City: ${this.city}`
     }
 }

 class Contact extends City {
    constructor(fname,lname,address,city,contact){
        super(fname,lname,address,city);
        this.contact=contact
    }
    getContact(){
        return `cell:${this.contact}`
    }
 }
 const patientDetails = new Contact ("jhon","wick","peerBurhan","Nanded",8983134798);

 console.log(patientDetails.getPatient(),patientDetails.getAdd(),patientDetails.getCity(),patientDetails.getContact());




