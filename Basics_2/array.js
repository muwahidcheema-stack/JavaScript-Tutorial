const arr = [0,1,2,3,4,5]

//Array Methods

// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr);

// includes, index of , position of , shift, unshift
const newArr = arr.join();
//console.log(newArr);


// slice, splice

// console.log(arr.slice(1,3));

// console.log(arr.splice(1,3));
// console.log(arr);
// splice changes the original array

const heros = ["ironman","thor","spiderman"]
const dc = ["superman","flash","batman"]
// heros.push(dc)
// console.log(heros);

//heros.concat(dc)
//console.log(heros.concat(dc));


//spread operator
const all = [...heros, ...dc]
//console.log(all);

const array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const another = array.flat();
//console.log(another);


//Array.isArray => checks if given is an array or not
// Array.from => converts the given to an array
// Array.of => converts the given variables into array
//console.log(Array.from("Muwahid"));

let one = 100;
let two = 200;
let three=300;
//console.log(Array.of(one,two,three));



