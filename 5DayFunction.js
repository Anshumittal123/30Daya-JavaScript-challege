// ==================================================== Day 5 : FUNCTION =============================

// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function OddOrEven(num){
    if(num % 2 === 0){
        console.log(`${num} is a even`);
    }else{
        console.log(`${num} is a odd`);
    }
}

OddOrEven(5);

// Task 2: Write a function to calculate the square of a number and return the result.
function squareOfNumber(num){
    return num * num;
}
console.log(`Square of a number is: ${squareOfNumber(10)}`);

// OUTPUT:
// 5 is a odd
// Square of a number is: 100

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result.
const maxNum = Math.max(10, 50);
console.log(`Maximum number is : ${maxNum}`);

// Task 4: Write a function to concatenate two strings and return the result.
let Name = "Anshu";
let lastNameConcat = Name.concat(" Mittal");
console.log(`Full Name by using of concat expression function: ${lastNameConcat}`);

// OUTPUT:
// Maximum number is : 50
// Full Name by using of concat expression function: Anshu Mittal


// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and result the result.
const sumOfNums = (num1, num2) => {
    return num1 + num2;
}

console.log(`Sum of numbers is : ${sumOfNums(5, 6)}`);

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value. 
const hasSpecificChar = (str, char) =>{
    return str.includes(char);
}

console.log(`Check that string has a specific char (true / false) : ${hasSpecificChar('Anshu', 's')}`);

// OUTPUT:
// Sum of numbers is : 11
// Check that string has a specific char (true / false) : true


// Activity 4: Function Parameters and Default Values
// Task 7: Write afunction that takes two parameters and returns their product. Provide a default value for the second parameter.
function productOfNums(num1, num2 = 5){
    return num1 + num2;
}

console.log(`Products of two number is : ${productOfNums(8)}`);

// Task 8: Write a function that takes a person's name and age and returns a greeting message. provide a default value for the age.
function greeting(name, age = 19){
    return `Hello, ${name} Welcome to a world of endless possibilities.`;
}

console.log(greeting('Anshu'));

// OUTPUT:
// Products of two number is : 13
// Hello, Anshu Welcome to a world of endless possibilities.


// Activity 5: Higher-order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const callFunctionNTimes  = (func, time) =>{
    for(let i = 0; i < time; i++){
        func();
    }
}

const sayHello = () =>{
    console.log("Hello!");
}

callFunctionNTimes(sayHello, 5);

// Task 10: Write a higher-order function that takes two functins and a value, applies the first function that many times. 
const applyFunctionNTimes = (func1, func2, value, time) =>{
    let result = value;
    for(let i = 0; i < time; i++){
        result = func1(result);
    }
    return func2(result);
}

const increment = x => x + 1;
const double = x => x * 2;

console.log('Higher of order function to pass two func, value and time to run n times: ',applyFunctionNTimes(increment, double, 5, 3));

// OUTPUT:
// Hello!
// Hello!
// Hello!
// Hello!
// Hello!
// Higher of order function to pass two func, value and time to run n times:  16
