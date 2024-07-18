// ============================================== Day 6 : Arrays ====================================

// Activite 1 : Array Creation and Access
// Task 1: Create an array of number from 1 to 5 and log the array to the console.
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2: Access the first and last elements of the array and log them to the console.
console.log(`First element of an array is : ${arr[0]}`);
console.log(`Last element of an array is: ${arr[4]}`);

// OUTPUT:
// [ 1, 2, 3, 4, 5 ]
// First element of an array is : 1
// Last element of an array is: 5


// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array. 
const pushElement = arr.push(6);
console.log(`Push an element at the end of an array is : ${pushElement}`);

// Task 4: Use the pop method to remove the last element from the array and lg the updated array.
const removeLastElement = arr.pop();
console.log(`Remove last element from an array and updated array is : ${removeLastElement}`);

// Task 5:  Use the shift method to remove the first element from the array and log the updated array. 
const removeFirstElement = arr.shift();
console.log(`Remove First element from an array and updated array is : ${removeFirstElement}`);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
const addFirstElement = arr.unshift(8);
console.log(`Add an element at first position and updated array is : ${arr}`);

// OUTPUT:
// Push an element at the end of an array is : 6
// Remove last element from an array and updated array is : 6
// Remove First element from an array and updated array is : 1
// Add an element at first position of an array is : 8,2,3,4,5


// Activite 3: Array Methods (Intermediate)
// Task 7: Use  the map method to create a new array where each number is doubled and log the new array. 
const squareElements = arr.map((el) =>{
   return el * el;
});
console.log(`Double the elemest of an array and print updated array is : ${squareElements}`);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array;
const evenElements = arr.filter((el)=>{
    if(el % 2 === 0){
        return el;
    }
});

console.log(`Filter an element of even number and updated array is : ${evenElements}`);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sumOfElements = arr.reduce((accumulator, currentvalue) =>{
    return accumulator + currentvalue;
});

console.log(`Sum of all elements of an array is : ${sumOfElements}`);

// OUTPUT:
// Double the elemest of an array and print updated array is : 64,4,9,16,25
// Filter an element of even number and updated array is : 8,2,4
// Sum of all elements of an array is : 22


// Activite 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to console.
for(let i = 0; i < arr.length; i++){
    console.log(`Element of an array at ${i} index is : ${arr[i]}`);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr.forEach(element => {
    console.log(`Iterate of an element by forEach loop. So, Element is : ${element}`);
});

// OUTPUT:
// Element of an array at 0 index is : 8
// Element of an array at 1 index is : 2
// Element of an array at 2 index is : 3
// Element of an array at 3 index is : 4
// Element of an array at 4 index is : 5

// Iterate of an element by forEach loop. So, Element is : 8
// Iterate of an element by forEach loop. So, Element is : 2
// Iterate of an element by forEach loop. So, Element is : 3
// Iterate of an element by forEach loop. So, Element is : 4
// Iterate of an element by forEach loop. So, Element is : 5


// Activity 5 : Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entrie array to the console. 
let twoDimensionalArr = [[1, 2, 3, 4], [5, 6, 7, 8]];

for(let i =0; i < twoDimensionalArr.length; i++){
    for(let j = 0; j < twoDimensionalArr[i].length; j++){
        console.log(`Two-Dimensional array is :${twoDimensionalArr[i][j]}`);
    }
}

// Task 13: Access and log a specific element from the two-dimensional array.
const AccessTwoDimArrEle = twoDimensionalArr[1][2];
console.log(`Access an element of two-Dimensional array column 2 and row 3 is : ${AccessTwoDimArrEle}`);

// OUTPUT:
// Two-Dimensional array is :1
// Two-Dimensional array is :2
// Two-Dimensional array is :3
// Two-Dimensional array is :4
// Two-Dimensional array is :5
// Two-Dimensional array is :6
// Two-Dimensional array is :7
// Two-Dimensional array is :8

// Access an element of two-Dimensional array column 2 and row 3 is : 7