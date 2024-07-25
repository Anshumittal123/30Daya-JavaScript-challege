// ================================================ Day 13 Modules ======================================

// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
const add = require('./exportsModules');

const result = add(5, 7);
console.log(`The result of adding 5 and 7 is: ${result}`);

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = require('./exportsModules');

console.log(`Name is : ${person.name} `);
console.log(`Age is: ${person.age}`);
person.greet();
person.updateAge(20);
console.log(`Updated age is: ${person.age}`);

// OUTPUT:
// Task 1:
// The result of adding 5 and 7 is: 12

// Task 2: 
// Name is : Anshu Mittal 
// Age is: 19
// Hello, my name is Anshu Mittal and I am 19 years.
// Updated age is: 20


// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
const {add, multi, sub, div} = require('./exportsModules');

const num1 = 5;
const num2 = 3;

console.log(`Addition of ${num1} and ${num2} is: ${add(num1, num2)}`);
console.log(`Subtraction of ${num1} and ${num2} is: ${sub(num1, num2)}`);
console.log(`Multiplication of ${num1} and ${num2} is: ${multi(num1, num2)}`);

try{
    console.log(`Division of ${num1} and ${num2} is: ${div(num1, num2)}`);
}catch(err){
    console.error(err.message);
}

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
const greet = require('./exportsModules');
console.log(greet("Deepak"));

// OUTPUT:
// Task 3
// Addition of 5 and 3 is: 8
// Subtraction of 5 and 3 is: 2
// Multiplication of 5 and 3 is: 15
// Division of 5 and 3 is: 1.6666666666666667

// Task 4
// Hello, Deepak


// Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
const utility = require('./exportsModules');

console.log(`Value of PI: ${utility.pi}`);
console.log(`Value of E: ${utility.E}`);

console.log(`Addition of ${num1} and ${num2} is: ${utility  .addition(num1, num2)}`);
console.log(`Subtraction of ${num1} and ${num2} is: ${utility.subtract(num1, num2)}`);
console.log(`Multiplication of ${num1} and ${num2} is: ${utility.multiply(num1, num2)}`);

try{
    console.log(`Division of ${num1} and ${num2} is: ${utility.divide(num1, num2)}`);
}catch(err){
    console.error(err.message);
}

// OUTPUT:
// Task 5:
// Value of PI: 3.141
// Value of E: 2.718
// Addition of 5 and 3 is: 8
// Subtraction of 5 and 3 is: 2
// Multiplication of 5 and 3 is: 15
// Division of 5 and 3 is: 1.6666666666666667


// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
const _ = require('lodash');

const number = [1, 2, 3, 4, 5];
const suffledNumbers = _.shuffle(number);

console.log(`Origanl numbers: ${number}`);
console.log(`Shuffled numbers: ${suffledNumbers}`);

// Tast 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
const { default: axios } = require("axios")

async function fetchData(){
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log(`Data: ${JSON.stringify(response.data, null, 2)}`);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchData();


// OUTPUT:
// Task 6:
// Origanl numbers: 1,2,3,4,5
// Shuffled numbers: 3,1,5,4,2

// Task 7:
// Data: {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati
//    excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequ
//   untur expedita et cum\nreprehenderit molestiae ut ut qua
//   s totam\nnostrum rerum est autem sunt rem eveniet archit
//   ecto"
//   }
