const obj = {
    js:"JavaScript",
    cpp: "C++",
    rb: "Ruby",
    py: "python",
}
for (const key in obj) {
    
    console.log(`${key} is shortcut of ${obj[key]}`);
 
}