function add(a, b){
    return a + b;
}
// module.exports = add;


const person = {
    name: "Anshu Mittal",
    age: 19,
    email: "Example200421@gmail.com",
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years.`);
    },
    updateAge(newAge){
        this.age = newAge;
    }
}

// module.exports = person;


function add(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
function multi(a, b){
    return a * b;
}
function div(a, b){
    if(b == 0){
        throw new Error('Cannot divide by zero.');
    }
    return a / b;
}

// module.exports = {
//     add,
//     sub,
//     multi,
//     div,
// }

function greet(name){
    return `Hello, ${name}`;
}

module.exports = greet;


const pi = 3.141;
const E = 2.718;

function addition(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    if(b == 0){
        throw new Error('Cannot divide by zero.');
    }
    return a / b;
}

module.exports = {
    pi,
    E,
    addition,
    subtract,
    multiply,
    divide,
}