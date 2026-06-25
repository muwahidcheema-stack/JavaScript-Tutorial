function sayMyName(){
    console.log("Muwahid Cheema");
}

// sayMyName()
function sum(num1,num2){
    console.log(num1+num2);
}
function sum1(num1,num2){
    let result = num1+num2
    return result
}
// console.log(sum1(3,4))
function logInMsg(name){
    return `${name} just logged In`
}
// console.log(logInMsg("Muwahid"));

// rest operator for multiple parameters
function calcCart(...num){
    return num
}
// console.log(calcCart(200,400,800));

const user ={
    name: "js",
    price: 999,
}
function handleObj(obj) {
    console.log(`username is ${obj.name} and price is ${obj.price}`);
    
}
// console.log(handleObj(user));

const arr =[2,3,4,5,6]
function ret2ndVal(array){
    return array[1]
}
console.log(ret2ndVal(arr));
