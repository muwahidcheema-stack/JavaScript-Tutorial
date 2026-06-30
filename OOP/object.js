function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(name,score){
    this.name = name
    this.score = score
}
createUser.prototype.increment = function (){
    this.score++
}
createUser.prototype.print = function (){
    console.log(`score is ${this.score}`);   
}
const chai = new createUser("chai",25)
const tea = new createUser("tea",200)
chai.print()