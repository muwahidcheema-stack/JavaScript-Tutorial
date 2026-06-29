const promiseOne = new Promise(function(resolve,reject) {
    // DO an DB calls, crypography related calls, network related calls
    setTimeout(function(){
        console.log("Async Task is Complete ");
        resolve();
    },1000)
});
promiseOne.then(()=>{
    console.log("Promise Consumed");
})

new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Async Task 2 Completed");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

// Data handling in promises
const PromiseThree = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve({user: "Muwahid", email: "cheema@gmail.com"});
    },1000)
})
PromiseThree.then((user) => {
    console.log(user);
})



// Reject & Finally 
const promiseFour = new Promise((resolve,reject) => {
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username: "Muwahid", email: "muwahid@gmail.com"})
        }else{
            reject("Something went Wrong !!")
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
})
.then((name)=>{
    console.log(name);  
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("The promise is either resolved or rejected");
})



// Async Syntax
let promiseFive = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error1 = true
        if(!error1){
            resolve({username: "Muwahid Cheema", email:"muwahidcheema@gmail.com"})
        }else{
            reject("Error One Incoming !!")
        }
    },1000)
})
async function consumePromiseFive () {
    try {
        let response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// Fetching API Data using Async Coding which basically halts the all the code until data is received from github server
async function getAllUsers() {
    
    try {
        const response = await fetch('https://api.github.com/users/muwahidcheema-stack')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()


// Simple Fetch Syncronuously which doesn't halt all the process but it runs all the tasks until response comes from github server and when response arrives evrything is ready it just attaches and pop-up the output  
fetch('https://api.github.com/users/muwahidcheema-stack')
.then((response) => {
    return response.json()
})
.then((res) => {
    console.log(res);
})
.catch((error) => {
    console.log(error);
})