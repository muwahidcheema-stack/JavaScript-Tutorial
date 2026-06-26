const arr = [1,2,3,4,5]
// for of Loop
for (const i of arr) {
    //console.log(i);
}
// for in loop in array prints indexes
for (const key in arr) {
    //console.log(key);
    console.log(arr[key]);   
}

const greet = "Hello World"
for (const i of greet) {
    // console.log(i);
    
}


// Maps

const map = new Map()
map.set('Pak',"Pakistan")
map.set('SA', "South Africa")
map.set('Fr',"france")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, value);
    
}
// map is not iterateable soo it doesn't print anything
for (const key in map) {
    console.log(key);   
}



