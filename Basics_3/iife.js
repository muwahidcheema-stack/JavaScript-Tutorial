// Immediately Invoked Function Expressions (IIFE)


// To prevent pollution from global scoped variables we use IIFE
// Must use semi-colon ; to end an IIFE function

//Named IIFE
(function one(){
    console.log("DB Connected");
    
})();
// one()

//Un-named IIFE
( (name) => {
    console.log(`Hello ${name}`);
    
})("Muwahid cheema")