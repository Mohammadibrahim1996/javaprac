// Factory Function = camelCase , 'keyName'
//Constructor Function = Pascal Notation, 'KeyName'

// FactoryFunction

function factFun (radius) {
    return{
            radius: radius,
        
            //function key word and key name is not neccessary 
            getCircleArea(){
                return 3.14 * radius * radius
            }
    };
}
const circle1 = factFun(10)
console.log(circle1.getCircleArea());