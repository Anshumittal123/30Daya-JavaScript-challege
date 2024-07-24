// ========================================== Day 12 Error Handling ============================================

// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError(){
    throw new Error('This is an intentional error.');
}

try{
    throwError();
}catch(error){
    console.error('An error occurred: ', error.message);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error. 
function divideNumber(numerator, denominator){
    if(denominator === 0){
        throw new Error('Cannot divide by zero.');
    }
    return numerator / denominator;
}

try {
    const result = divideNumber(20, 0);
    console.log("Results: ", result);
} catch (error) {
    console.error('An error occurred: ', error.message);
}

// OUTPUT:
// An error occurred:  This is an intentional error.
// An error occurred:  Cannot divide by zero.


// Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function executionWithError(){
    throw new Error('This is an intentional error.');
}

try{
    executionWithError();
}catch(error){
    console.error('An error occurred: ', error.message);
}finally{
    console.log('Entering finally block');
}
console.log('Execution continues after try-catch-finally');

// OUTPUT:
// An error occurred:  This is an intentional error.
// Entering finally block
// Execution continues after try-catch-finally


// Activity 3: Custom Error Objects 
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error{
    constructor(message){
        super(message);
        this.name = 'CustomError';
    }
}

function throwErrorFromCustom(){
    throw new CustomError('This is a custom error.');
}

try {
    throwErrorFromCustom();
    console.log('This message will not be loged');
} catch (error) {
    if (error instanceof CustomError) {
        console.log('Entering catch block');
        console.error('Caught a custom error:', error.message);
    } else {
        console.error('Caught an unexpected error:', error);
    }
}finally{
    console.log('Entering finally block');
}

// Task 5: Write a function that validates user input(e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class VaildationError extends Error{
    constructor(message){
        super(message);
        this.name = 'ValidationError';
    }
}

function checkStr(input){
    if(typeof input !== 'string' || input.trim() === ''){
        throw new VaildationError('Input cannot be empty and must be string');
    }
    return true;
}

try {
    const userInput = '';
    checkStr(userInput);
    console.log('Input is valid');
} catch (error) {
    if(error instanceof VaildationError){
        console.error('Validation Error: ', error.message);
    }else{
        console.error('Unexpected Error: ', error);
    }
}finally{
    console.log('Vaildation process completed.');
}

// OUTPUT:
// Task : 4
// Entering catch block
// Caught a custom error: This is a custom error.
// Entering finally block

// Task 5:
// Validation Error:  Input cannot be empty and must be string
// Vaildation process completed.


// Activity 4: Error Handling in Promise
// Task 6: Create a promise that randomly resole or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const newPromise = new Promise((res, rej)=>{
    const randomNumber = Math.random();
    if(randomNumber < 0.5){
        res('Promise resolved successfully!');
    }else{
        rej('Promise was rejected.');
    }
});

newPromise
.then((message)=>{
    console.log(message);
}).catch((err)=>{
    console.log("Error: ", err);
});

// Task 7: Use try-catch within an async function to handle error from a promise that randomly resolves or rejects, and log the error message. 
async function ErrorHandling(){
    return await new Promise((res, rej)=>{
        const randomNumber = Math.random();
        if(randomNumber < 0.5){
            res('Promise resolved successfully!. From asyn/await function');
        }else{
            rej('Promise was rejected. From asyn/await function');
        }
    })
}

ErrorHandling()
.then(message =>{
    console.log(message);
}).catch(err=>{
    console.error("Error: ",err);
});

// OUTPUT:
// Task 6:
// Promise resolved successfully!

// Task 7:
// Error:  Promise was rejected. From asyn/await function


// Activity 5: Graceful Error Handling in fetch 
// Task 8: Use the fetch Api to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
function fetchData(){
    fetch('https://invalidurl.example.com/data')
    .then(response =>{
        if(!response.ok){
            throw new Error('Network response was not ok:'+response.statusText);
        }
        return response.json();
    })
    .then(data=>{
        console.log('Data: ', data);
    })
    .catch(error=>{
        console.error('Fetch error:', error.message);
    });
}

fetchData();

// Task 9: Use the fetch API to request data from an invalid URL withing an async function and handle  the error using try-catch. Log an appropriate error message.  

async function fetchDataFromAsync(){
    try{
        const response = await fetch('https://invalidurl.example.com/data');
        if(!response.ok){
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        const data = await response.json();
        console.log('Data: ', data);
    }catch(error){
        console.error('Fetch error:', error.message);
    }
}

fetchDataFromAsync();

// OUTPUT:
// Task: 8
// Fetch error: fetch failed

// Task: 9
// Fetch error: fetch failed