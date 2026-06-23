// Primitive
// 7 Types : string,null,undefined,boolean,symbol,bigint,


const id = Symbol('1234')
const anId = Symbol('1234')
//console.log(id == anId);


const num = 2345676543458765434567876543n


//Reference Types(Non-Primitive)
//Arrays,Objects,functions

const heros = ["ironman","cpt america"];
let myObj = {
    name: "muwahid",
    age: 20,
}

const myFun = () => {
    console.log("Muwahid Cheema");
};


console.log(typeof num)
console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFun)