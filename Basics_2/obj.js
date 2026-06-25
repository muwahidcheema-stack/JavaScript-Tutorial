const vari = Symbol("key")
//Literal Objects
const user={
    name:"muwahid",
    age: 20,
    loc: "lahore",
    [vari]: "key", 
    email: "muwahid@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["monday","saturday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(typeof([vari]));
// Object.freeze(user);

// console.log(user);

user.greeting = () => {
    console.log("Hello User!!")
}
user.greeting2 = () => {
    console.log(`Hello User ${this.name}`)
}
//console.log(user.greeting2());

// Singleton Objects
//const user1 = new Object();

const user1 = {}
user1.id="1234"
user1.name= "abdullah"
user1.isLoggedIn=true
//console.log(user1);

const user2 = {
    email:"some@gmail.com",
    fullName:{
        name: "Muhammad Muwahid Cheema",
    },
}
// console.log(user2.fullName.name);
const obj1 = {
    1:"a",
    2:"b",
}
const obj2={
    3:"c",
    4:"d",
}
//const obj3 = Object.assign(obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users=[
    {
        id: 1,
        email:"dfghj",
    },
    {
        id: 2,
        email:"dfghjpk",
    },
    {
        id: 3,
        email:"dfghjvb",
    },
    {
        id: 4,
        email:"dfghjuyt",
    },
]
// console.log(users[1].email)

// console.log(user1);
// returns all the keys
// console.log(Object.keys(user1));
// returns all the values stored
// console.log(Object.entries(user1));

// tells does user have this specific property
// console.log(user1.hasOwnProperty('name'));


// Object Deconstruction => helps in reducing the use of dot operator over and over again
const course ={
    name: "js-course",
    price: 999,
    inst: "fareed"
}

const {inst} = course
console.log(inst);
