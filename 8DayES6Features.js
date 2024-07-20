// ==================================================== Day 8 : ES6 + Features ==========================

// Activity 1: Template Literal
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the sonsole.
const Name = "Anshu";
const age = 19;
console.log(`Hello everyone, my name is ${Name} and ${age} year age.`);

// Task 2: Create a multi-line string using template literals and log it to the console.
const multiLineString = `
This is a multi-line string.
It spans multiple lines.
You can include variables, like this: ${new Date().toLocaleDateString()}.
You can also include expressions, like this: ${2 + 2}.
`;

console.log(multiLineString);

// OUTPUT:
// Task: 1
// Hello everyone, my name is Anshu and 19 year age.

// Task: 2
// This is a multi-line string.
// It spans multiple lines.
// You can include variables, like this: 20/7/2024.
// You can also include expressions, like this: 4.


// Activity 2: Destructuring 
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const arr = [1, 2, 3, 4, 5];
const [firstElement, secondElement] = arr;
console.log(`Fisrt Element ${firstElement} and Second Element ${secondElement}.`);

// Task 4: Use object destructing to extract the title and author from a book object and log them to the console. 
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
};

const {title, author} = book;
console.log(`title of a book is ${title} and written by ${author}.`);

// OUTPUT:
// Task:3
// Fisrt Element 1 and Second Element 2.

// Task:4
// title of a book is The Great Gatsby and written by F. Scott Fitzgerald.


// Activity 3: Spread and Rest Operators 
// Task 5: Use the spread operator to create a new array that includes all a elements of an existing array plus additional elements, and log the new array to the console. 
const newArr = [...arr, 6, 7, 8];
console.log(newArr);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sumAll(...number){
    return number.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(sumAll(1, 2, 3, 4, 5));

// OUTPUT:
// Task: 5
// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
// ]

// Task: 6
//   15


// Activity 4: Defult parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function sumOfNumbers(num1, num2 = 5){
    return num1 + num2;
} 

console.log('Default parameter',sumOfNumbers(8));

// OUTPUT:
// Task: 7
// Default parameter 13


// Activity 5: Enhanced object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let person ={
    name: "Anshu",
    age: 19,

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} year old.`);
    }
}

console.log(person);

// Task 9: Create an object with computed property names based on variables and log the object to the console.
person ={
    name: "Anshu",
    age: 19,

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} year old.`);
    },

    // Computed property name
    [`is${age}YearOld`] : true,

    updateAge(newAge){
        this.age = newAge;
        console.log(`My new age is ${this.age}`);
    }
}

person.greet();
person.updateAge(20);

// OUTPUT:
// Task: 8
// { name: 'Anshu', age: 19, greet: [Function: greet] }

// Task: 9
// Hello, my name is Anshu and I am 19 year old.
// My new age is 20