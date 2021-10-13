//PASCAL NOTATION:indicates the CONSTRUCTOR//

function Circle(radius) {
    this.radius=radius;
    this.pi = 3.14;
    //     console.log("draw");
    // this.draw=function() {}
    this.area = function(){
        return this.pi * this.radius * this.radius;
        };
    }



const result = new Circle(4); ////method

console.log(result.area());

