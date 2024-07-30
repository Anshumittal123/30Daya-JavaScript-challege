// ==================================================== Day 18 : Algorithms =====================================

// Activity 1: Sorting Algorithm
// Task 1: ccc
function bubbleSort(array){
    let len = array.length;

    for(let i = 0; i < len; i++){
        for(let j = 0; j < len-1-i; j++){
            if(array[j] > array[j + 1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

const arr = [15, 16, 6, 8, 5];
console.log(`Unsorted array is: ${arr}`);

const sorted = bubbleSort(arr);
console.log(`Sorted array: ${sorted}`);

// OUTPUT:
// Unsorted array is: 15,16,6,8,5
// Sorted array: 5,6,8,15,16


// Task 2: Implement the selection sort algorith to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(array){
    let len = array.length;
    for(let i = 0; i < len - 1; i++){
        let min = i;
        for(let j = i + 1; j < len; j++){
            if(array[j] < array[min]){
                min = j;
             }
        }

        if(min !== i){
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }

    return array;
}

const array = [7, 4, 10, 8, 3, 1];
console.log(`Unsorted Array is: ${array}`);

const selectSort = selectionSort(array);
console.log(`Sorted array is: ${selectSort}`);

// OUTPUT:
// Unsorted Array is: 7,4,10,8,3,1
// Sorted array is: 1,3,4,7,8,10


// Task 3: Implement the quickSort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quickSort(array){
    let len = array.length;
    if(len <= 1){
        return array;
    }

    const pivot = array[len - 1];
    const left = [];
    const right = [];

    for(let i = 0; i<len - 1; i++){
        if(array[i] < pivot){
            left.push(array[i]);
        }else{
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr1 = [64, 25, 12, 22, 11];
console.log(`Unsorted array: ${arr1}`);

const sortedArray = quickSort(arr1);
console.log(`Sorted Array: ${sortedArray}`);

// OUTPUT:
// Unsorted array: 64,25,12,22,11
// Sorted Array: 11,12,22,25,64


// Activity 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(array, num){
    for(let i =0; i < array.length; i++){
        if(array[i] === num){
            return i;
        }
    }
    return -1;
}

const arr2 = [64, 25, 12, 11, 22];
const num = 22;

const index = linearSearch(arr2, num);

if(index !== -1){
    console.log(`Target value ${num} found at index ${index}`);
}else{
    console.log(`Target value ${num} not found at index ${index}`);
}

// OUTPUT:
// Target value 22 found at index 4


// Task 5:  Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(arr, num){
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === num){
            return mid;
        }else if(arr[mid] < num){
            left = mid+1;
        }else{
            right = mid - 1;
        }
    }

    return -1;
} 

const arr3 = [11, 12, 25, 22, 64];
const num3 = 64;

const index3 = binarySearch(arr3, num3);

if(index !== -1){
    console.log(`Target value ${num3} found at index ${index3}`);
}else{
    console.log(`Target value ${num3} not found at index ${index3}`);
}

// OUTPUT:
// Target value 64 found at index 4


// Activity 3: String Algorithms
// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

function countCharOccurrences(str){
    const charCounts = {};

    for(const char of str){
        if(charCounts[char]){
            charCounts[char]++;
        }else{
            charCounts[char] = 1;
        }
    }

    for(const char in charCounts){
        console.log(`${char}: ${charCounts[char]}`);
    }
}
countCharOccurrences("Hello World");

// OUTPUT:
// H: 1
// e: 1
// l: 3
// o: 2
//  : 1
// W: 1
// r: 1
// d: 1

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function lengthOfLongestSubString(s){
    let maxLength = 0;
    let start = 0;
    const charIndexMap = {};

    for(let end = 0; end < s.length; end++){
        const currentChar = s[end];
        if(charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start){
            start = charIndexMap[currentChar] + 1;
        }
        charIndexMap[currentChar] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    console.log(`Lenght of the longest substring without repeating charaters: ${maxLength}`);
}

const str = "abcabcbb";
lengthOfLongestSubString(str);

// OUTPUT:
// Lenght of the longest substring without repeating charaters: 3

// Activity 4: Array Algorithms
// Task 8:  write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k){
    const n = arr.length;

    k = k % n;

    if(k === 0){
        console.log(`Rotated Array: ${arr}`);
        return;
    }

    const rotatedArray = arr.slice(-k).concat(arr.slice(0, n-k));
    console.log(`Rotated array: ${rotatedArray}`);
}

const exampleArr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotateArray(exampleArr, k);

// OUTPUT:
// Rotated array: 5,6,7,1,2,3,4

// Task 9: Write a function to marge two sorted arrays into one sorted array. Log the merged array.
function mergedSortedArray(arr1, arr2){
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while(i <arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        }else{
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        mergedArray.push(arr2[j]);
        j++;
    }

    console.log(`Merged Array: ${mergedArray}`);
}

const arr4 = [1, 3, 5, 7];
const arr5 = [2, 4, 6, 8];
mergedSortedArray(arr4, arr5);

// OUTPUT:
// Merged Array: 1,2,3,4,5,6,7,8