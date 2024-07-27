// ========================================= Day 15: Closures ======================================

// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. call the inner function and log the result. 
function outerFunc(){
    console.log("This is from Outer Function");
    let a = 5;
    function innerFunc(){
        console.log("This is from Inner Function");
        console.log("Outer variable is: ", a);
    }
    return innerFunc();
}

outerFunc();

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function closrue(){
    let counter = 0;
    return {
        increment : function(){
            counter++;
        },
        getCounter : function(){
            return counter;
        }
    }
}
const mycounter = closrue();
mycounter.increment();
mycounter.increment();
console.log('Counter value is: ',mycounter.getCounter());

// OUTPUT:
// Task 1:
// This is from Outer Function
// This is from Inner Function

// Task 2:
// Outer variable is:  5
// Counter value is:  2


// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closures to keep track of the last generated ID and increment it with each call. 
function GenerateUniqueID(){
    let uniqueID = Math.round(Math.random() * 10000);
    return{
        trackID : function(){
            uniqueID++;
            return uniqueID;
        }
    }
}
const myUniqueID = GenerateUniqueID();
console.log("Unique ID is: ", myUniqueID.trackID());
console.log("Unique ID is: ", myUniqueID.trackID());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function user(){
    let name = "Deepak";
    function greeting(){
        console.log(`Good morning ${name}`);
    }
    greeting();
}
user();

// OUTPUT:
// Task 3:
// Unique ID is:  5843
// Unique ID is:  5844

// Task 4:
// Good morning Deepak


// Activity 3: Closures in loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. use a clousre to ensure each function logs the correct index.
function createFunctionArray(){
    const functions = [];

    for(let i = 0; i < 10; i++){
        functions.push((function(i){
            return function(){
                console.log(`Index of function is: ${i}`);
            };
        })(i));
    }
    return functions;
}

const functionsArray = createFunctionArray();
functionsArray.forEach(fn=> fn());

// OUTPUT:
// Task 5:
// Index of function is:  0
// Index of function is:  1
// Index of function is:  2
// Index of function is:  3
// Index of function is:  4
// Index of function is:  5
// Index of function is:  6
// Index of function is:  7
// Index of function is:  8
// Index of function is:  9

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function createItemManager(){
    let items = [];
    
    return {
        addItem : function(item){
            items.push(item);
        },
        removeItem : function(item){
            let index = items.indexOf(item);
            if(index > -1){
                items.splice(index, 1);
            }
        },

        listItem : function(){
            return items.slice();
        }
    };
}

const itemManager = createItemManager();

itemManager.addItem("Apple");
itemManager.addItem("Banana");
itemManager.addItem("Cherry");

console.log('List of items is : ', itemManager.listItem());
itemManager.removeItem("Banana");
console.log('List of items is : ', itemManager.listItem());

// OUTPUT:
// Task 6:
// List of items is :  [ 'Apple', 'Banana', 'Cherry' ]
// List of items is :  [ 'Apple', 'Cherry' ]


// Activity 5: Memoization
// Task 7: Write a function that memorize the results of another function. Use a closure to store the results of previous computations. 
function memorize(fn){
    const cache = {};

    return function(...args){
        const key = JSON.stringify(args);
        if(cache[key] !== undefined){
            console.log(`Fetching from cache for arguments: ${args}`);
            return cache[key];
        }else{
            console.log(`Calculating result for arguments: ${args}`);
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

function add(a, b){
    return a+b;
}

// const memorizeAdd = memorize(add);

// console.log(memorizeAdd(1, 2));
// console.log(memorizeAdd(1, 2));
// console.log(memorizeAdd(2, 3));
// console.log(memorizeAdd(2, 3));
// console.log(memorizeAdd(1, 2));

// Task 8: Create a memorized version of a function that calculates the factorial of a number. 

function factorial(n){
    if(n < 0) return undefined;
    if(n === 0) return 1;
    return n * factorial(n - 1);
}

const memorizeFactorial = memorize(factorial);

console.log(memorizeFactorial(5));
console.log(memorizeFactorial(6));
console.log(memorizeFactorial(5));
console.log(memorizeFactorial(7));
console.log(memorizeFactorial(6));
console.log(memorizeFactorial(7));

// OUTPUT:
// Task 7:
// Calculating result for arguments: 1,2
// 3
// Fetching from cache for arguments: 1,2
// 3
// Calculating result for arguments: 2,3
// 5
// Fetching from cache for arguments: 2,3
// 5
// Fetching from cache for arguments: 1,2
// 3

// Task: 8
// Calculating result for arguments: 5
// 120
// Calculating result for arguments: 6
// 720
// Fetching from cache for arguments: 5
// 120
// Calculating result for arguments: 7
// 5040
// Fetching from cache for arguments: 6
// 720
// Fetching from cache for arguments: 7
// 5040