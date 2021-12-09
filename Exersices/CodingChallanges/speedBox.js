function outer (){
    var a = 10;
    
    function inner (a){
        console.log(a)
    }
    return inner;
}
let xyz = outer();

console.log(xyz())