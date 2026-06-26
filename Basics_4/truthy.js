const userEmail = "mu@gmail.com"
if(userEmail){
    // console.log("has email");
}else {
    // console.log("don't have email");
}

// Falsy Values: false, zero(0), negative zero(-0), bigInt(0n), empty string(""), null, undefined, NaN
// Truthy Values: True, One(1), "0", "false", " ", Empty Array([]), Empty Object({}), Empty Function(function(){})

const arr =[]
if (arr.length === 0) {
    // console.log("Array is Empty");
    
}

const obj = {}
if(Object.keys(obj).length === 0){
    // console.log("Object is Empty");
    
}

// Nullsih Coalescing Operator (??) => It prevents the assiging of null and undefined to a variable from databse.

let val;
// val = 5 ?? 10;
// val = null ?? 10;
// val = undefined ?? 10 ;
// val = null ?? 10 ?? 20;
val = null ?? undefined ?? 10
// console.log(val);


// Terniary operator
const a = 10
a < 5 ? console.log("hello") : console.log("Hi");

