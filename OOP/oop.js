// const User = {
//     username: "Muwahid",
//     logInCnt: 10,
//     signedIn: true,
// }

// function User(name, logInCnt, isloggedIn){
//     this.username = name
//     this.logInCnt = logInCnt
//     this.signedIn = isloggedIn
//     return this
// }

// const user1 = new user("hello",12,true)
// console.log(user1);





const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne);
// console.log(userTwo);