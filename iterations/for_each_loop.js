const lang = ["js","cpp","py","rb","swift"]
// 3 Ways to iterate the loop using forEach prototype
// call back functions are the 
lang.forEach(function () {
    
})

lang.forEach((item) => {
    //console.log(item);

})

function print(item) {
    // console.log(item);
    
}

// lang.forEach(print)


// Each time forEach has access of 1. value inside the array, 2. index of every element of array, 3. whole array
lang.forEach((k,j,i) => {
    //console.log(k,j,i);
    
})


const mylang = [
    {
        nm: "javascript",
        file: ".js",
    },
    {
        nm: "cpp",
        file: ".cpp"
    },
    {
        nm: "python",
        file:".py"
    }
]

mylang.forEach((item) => {
    // console.log(item.nm);
    // console.log(item.file);
})

// For each loop doesn't return any values
const value = lang.forEach((item) => {
    return item
})
//console.log(value);


