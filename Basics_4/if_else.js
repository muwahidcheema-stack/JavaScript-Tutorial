// === (triple equal) checks for the type of value at the time of comparison
// !== opposite to triple equal

const temp = 40
if(temp < 50){
    // console.log("Less than 50");
} else{
    // console.log("Temp is greater than 50");
}

const score = 200
if(score > 100){
    const power = "fly"
    // console.log(`User's power: ${power}`);
}

// short hand for single line inside if
const bal = 1000
if(bal > 500); //console.log("test");

if(bal < 500){
    // console.log("less than");
} else if(bal < 750){
    // console.log("less than 750");
}else if(bal < 900){
    // console.log("less than 900");
}else{
    // console.log("less than 1200");
    
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard ) {
    // console.log("allowed to buy");
}
if(loggedInFromEmail || loggedInFromGoogle)
{
    // console.log("Login Successful");
    
}

const week = 3
switch (week) {
    case 1:
        // console.log("monday");
        break;
    case 2:
        // console.log("tuesday");
        break;
    case 3:
        // console.log("wednesday");
        break;
    case 4:
        // console.log("thursday");
        break;
    case 5:
        // console.log("friday");
        break;
    case 6:
        // console.log("saturday");
        break;
    case 7:
        // console.log("sunday");
        break;
    default:
        // console.log("Not a week day");
        break;
// can also match string values
}



