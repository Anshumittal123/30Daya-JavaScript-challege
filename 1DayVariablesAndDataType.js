//======================================= Day 1: Variables and Data Types ====================================== 

// Activity 1: Variable Declaration
// Test 1: Declare a variable using var, assign it a number, and log the value to the console.
var num = 5;
console.log(`Number is: ${num}`); // Number is: 5

// Test 2:  Declare a variable using let, assign it a string, and log the value to the console.
let str = "Anshu";
console.log(`String is: ${str}`); //String is: Anshu


// Activity 2: Constant Declaration 
// Test 3: Declare a variable using const, assign it a boolean, and log the value to the console.
const bool = true;
console.log(`Boolean is: ${bool}`); // Boolean is: true


// Activity 3: Data Types
// Test 4: create variables of different data types(number, string, boolean, object, array) and log each variable's type using the typeof operator. 
const number = 5;
const string = "Day 1: test is funtastic.";
const boolean = true;
const array = [2, 4, 6];
const object = {
    userName: "Anshu Mittal",
    challegeDay: 1,
    isCompleted: true,
};
console.log(`Number variable dataType is: ${typeof number}`);
console.log(`String variable dataType is: ${typeof string}`);
console.log(`Boolean variable dataType is: ${typeof boolean}`);
console.log(`Object variable dataType is: ${typeof object}`);
console.log(`Array variable dataType is: ${typeof array}`);

//  OUTPUT:
// Number variable dataType is: number
// String variable dataType is: string
// Boolean variable dataType is: boolean
// Object variable dataType is: object
// Array variable dataType is: object


// Activity 4: Re-assigning Variables
// Test 5: Declare a variable using let, assign it an initial value, reassign a new value, log both values to the console.
let reassign = 5;
console.log(`Before reassign a value: ${reassign}`);
reassign = 10;
console.log(`After reassign a value: ${reassign}`);

// OUTPUT:
// Before reassign a value: 5
// After reassign a value: 10 


// Activity 5: Understanding const
// Test 6: Try reassignment a variable declared with const and observe the error.
const nameReassign = "Anshu";
console.log(`Before reassign of a const variable value is: ${nameReassign}`);
nameReassign = "Anshu Mittal";
console.log(`After reassign of a const variable value is: ${nameReassign}`);

// OUTPUT: 
// Before reassign of a const variable value is: Anshu
// c:\Htlm and css code\JavaScript 30Days challenge\1DayVariablesAndDataType.js:57
// nameReassign = "Anshu Mittal";
//              ^
// TypeError: Assignment to constant variable. const variable value never reassign. 