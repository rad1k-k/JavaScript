//1

console.log("Hello World");

let a = 10; //Asign a value of 10 to variable a
console.log(a); //This will output 10 into the console
/*
This is a multi-line comment
*/



//2


let str1 = "cat";
let str2 = "dog";
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(typeof(str1));
console.log(typeof(str2));
console.log(typeof(val1));
console.log(typeof(val2));
console.log(typeof(myNum));


const myName = "Radka";
const myAge = 33;
const coder = true;
const message = "Hello, my name is " + myName + ", I am " + myAge + " years old and I can code JavaScript: " + coder + "."
console.log(message);


// JSON
let user= {
    firstName: "Radka",
    age: 33
}

let userJSON = JSON.stringify(user)
console.log(userJSON)
localStorage.setItem("user", userJSON)

let userFromLS = localStorage.getItem("user")
let myUser = JSON.parse(userJSON)
console.log(myUser)

console.log(`Hi, I am ${myUser.firstName} and I am ${myUser.age} years old`)

