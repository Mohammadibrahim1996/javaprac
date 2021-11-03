function creatPerson(fname,lname){
    return{
        fname: fname,
        lname: lname,
        getFullName(){
            return fname + ' ' + lname;
        }
    }
}

const  Person = new creatPerson("sahil","Mustafa");
// console.log(Person);
console.log(Person.getFullName());
