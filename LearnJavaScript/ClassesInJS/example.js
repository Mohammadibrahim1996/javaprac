class Students{
  constructor(name,age,cls){
    this.myName=name;
    this.myAge=age;
    this.myCls=cls;
  }
  //instance method i will allow child to inherit parent properties
  bioData(){
      return `Hi I am ${this.myName} my age is ${this.myAge} and i am studying in ${this.myCls}`
  }
}

class Player extends Students{
    constructor(name,age,cls,game){
        super(name,age,cls);
        this.myGame=game;
    }
    player_bioData(){
        return `${super.bioData()}. i am player of ${this.myGame}`;
    }
}
var student1 = new Player('sahil',25,'devloper','soccer')
console.log(student1.player_bioData());




