const course ={
    name: "js-course",
    price: 999,
    welcomeMsg:function (){
        console.log(`${this.name} welcome to website`);
        
    }
}
// course.welcomeMsg()

function one(){
    console.log(this);
    
}

const two = () =>{
    console.log(this);
    
}
// two()

//Implicit Return => No need to write brackets and return keyword
const add = (num1,num2) => num1+num2
const multiply = (num1,num2) => (num1 * num2)

//To return objects implicitly you have to wrap that object in small brackets
const address = () => ({addr: "ewrtrvbnklxdcfgvbhjnk"})

const arr =[1,2,3,4,5,6]
arr.forEach(() => {/*This is function for array where you can write custom code */})