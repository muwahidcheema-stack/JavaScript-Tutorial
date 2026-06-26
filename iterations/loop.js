// For Loop

for (let index = 0; index < 10; index++) {
    if (index == 5) {
        // console.log("hello");
    }
    // console.log(index);
}
for (let i = 0; i <= 3; i++) {
    // console.log(`outer loop ${i}`)
    for (let j = 0; j <= 3; j++) {
        // console.log(`inner loop ${j}`);
    }
}
const arr = ["flash", "batman", "superman"]
for (let index = 0; index < arr.length; index++) {
    // console.log(arr[index]);    
}


// Break and Continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log("5 Detected");
        break;
    }
    // console.log(index);
    
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log("Five Detected");
        continue;
    }
    // console.log(index);
    
}

// While Loop
let i = 1 
while (i <= 10) {
    // console.log(i);
    i++;
}
let j = 0
while (j < arr.length) {
    //console.log(arr[j]);
    j++;
}

// Do while Loop
let k = 1
do {
    // console.log(k);
    k++
} while (k <= 10);

