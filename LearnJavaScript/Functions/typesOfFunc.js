//there are three types of scope 
//1 = Global Scope
//2= local Scope or Functional Scope
//3= Block Scope nd its types are lexical nd nested Scope


/// GLOBAL SCOPE ///

var greeting= "Hello World";
function greet (){
    console.log(greeting);
}
 let hello= greet();

 //in global scope we can access the varible from anywhere from the programme


 ////LOCAL SCOPE OR FUNCTIONAL SCOPE

 function salam(){
     var salami="asslam o alikum"
     console.log(salami)
 }
 let salam1 = salam();
 //in local scope we can only access the varible inside function only


 ////BLOCK SCOPE 

 {let name="sahil"
    var lang="english"
    console.log(name);}
    console.log(lang);
   // console.log(name);/////we cant access this cz its access already we cant access it anymore here

    ////NESTED SCOPE 
  var naam="peter",
  function hola(){
      var namaste="namskar"
      {
          let bhasa="Marathi"
          console.log(`${bhasa} : ${namaste} : ${naam}`)
      }
  }
 let sahil = hola();


