// ======================================== Day 16 : Recursion ======================================

// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases. 
function factorial(n){
    if(n < 0) return undefined;
    if(n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(`Factorial of 5: ${factorial(5)}`); 
console.log(`Factorial of 6: ${factorial(6)}`); 
console.log(`Factorial of 7: ${factorial(7)}`); 
console.log(`Factorial of 0: ${factorial(0)}`);
console.log(`Factorial of 1: ${factorial(1)}`); 
console.log(`Factorial of -3: ${factorial(-3)}`);

// Task 2: Write a recursive function to calculate the nth Fibonacci number. log the result for a few test cases. 
function Fibonacci(n){
    if(n < 0) return undefined;
    if(n === 0) return 0;
    if(n === 1) return 1;
    return Fibonacci(n -1) + Fibonacci(n - 2); 
}

console.log(`Fibonacci of 0: ${Fibonacci(0)}`);
console.log(`Fibonacci of 1: ${Fibonacci(1)}`);
console.log(`Fibonacci of 2: ${Fibonacci(2)}`);
console.log(`Fibonacci of 3: ${Fibonacci(3)}`);
console.log(`Fibonacci of 5: ${Fibonacci(5)}`);
console.log(`Fibonacci of -1: ${Fibonacci(-1)}`);

// OUTPUT:
// Factorial of 5: 120
// Factorial of 6: 720
// Factorial of 7: 5040
// Factorial of 0: 1
// Factorial of 1: 1
// Factorial of -3: undefined
// Fibonacci of 0: 0
// Fibonacci of 1: 1
// Fibonacci of 2: 1
// Fibonacci of 3: 2
// Fibonacci of 5: 5
// Fibonacci of -1: undefined


// Activity 2: Recursion With Array
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumArray(arr) {
    if (arr.length === 0) return 0; 
    return arr[0] + sumArray(arr.slice(1)); 
}

console.log(`Sum of [1, 2, 3, 4, 5]: ${sumArray([1, 2, 3, 4, 5])}`);
console.log(`Sum of [7, -3, 2, 5]: ${sumArray([7, -3, 2, 5])}`);
console.log(`Sum of []: ${sumArray([])}`);

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function findMax(arr){
    if(arr.length === 1) return arr[0];
    const restMax = findMax(arr.slice(1));
    return arr[0] > restMax ? arr[0] : restMax;
}

console.log(`Max of [1, 2, 3, 4, 5]: ${findMax([1, 2, 3, 4, 5])}`);
console.log(`Max of [7, -3, 2, 5]: ${findMax([7, -3, 2, 5])}`);
console.log(`Max of [-10, -20, -30]: ${findMax([-10, -20, -30])}`); 

// OUTPUT:
// Sum of [1, 2, 3, 4, 5]: 15
// Sum of [7, -3, 2, 5]: 11
// Sum of []: 0

// Max of [1, 2, 3, 4, 5]: 5
// Max of [7, -3, 2, 5]: 7
// Max of [-10, -20, -30]: -10


// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseStr(str){
    if(str.length === 0) return '';
    return str[str.length - 1] + reverseStr(str.slice(0, -1));
}

console.log(`Reverse of "hello": ${reverseStr("hello")}`);
console.log(`Reverse of "JavaScript": ${reverseStr("JavaScript")}`);

//  Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str){
    if(str.length <= 1) return true;
    if(str[0] != str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

console.log(`Is racecar a palindrome? ${isPalindrome("racecar")}`);
console.log(`Is noon a palindrome? ${isPalindrome("noon")}`);
console.log(`Is "hello" a palindrome? ${isPalindrome("hello")}`);

// OUTPUT:
// Reverse of "hello": olleh
// Reverse of "JavaScript": tpircSavaJ
// Is racecar a palindrome? true
// Is noon a palindrome? true
// Is "hello" a palindrome? false


// Activity 4: Recursive Search
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, left=0, right = arr.length - 1){
    if(left > right){
        return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if(arr[mid] === target){
        return mid;
    }
    if(arr[mid] > target){
        return binarySearch(arr, target, left, mid-1);
    }
    if(arr[mid] < target){
        return binarySearch(arr, target, mid+1, right);
    }
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 15];

console.log(`Index of 7: ${binarySearch(sortedArray, 7)}`);
console.log(`Index of 15: ${binarySearch(sortedArray, 15)}`);
console.log(`Index of 14: ${binarySearch(sortedArray, 14)}`);

// Task 8: Write a recursive function to count the occurrences of a target element in a array. Log the result for a few test cases.
function countOccurrences(arr, target, index = 0){
    if(index >= arr.length){
        return 0;
    }
    let count = (arr[index] === target) ? 1 : 0;

    return count + countOccurrences(arr, target, index + 1);
}

const array1 = [1, 2, 3, 4, 1, 1, 5, 6, 1];
const array2 = [7, 8, 9, 7, 10, 7, 11, 7, 12, 7];

console.log(`Occurrences of 1 in array1: ${countOccurrences(array1, 1)}`); 
console.log(`Occurrences of 7 in array2: ${countOccurrences(array2, 7)}`);

// OUTPUT:
// Index of 7: 6
// Index of 15: 10
// Index of 14: -1
// Occurrences of 1 in array1: 4
// Occurrences of 7 in array2: 5
