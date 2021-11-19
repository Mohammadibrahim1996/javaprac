 function outerFunc(){
     var outervar=5;
     function innerFunc(){
         console.log(outervar++)
     }
      return innerFunc;
 }
 var a = outerFunc();
 a();