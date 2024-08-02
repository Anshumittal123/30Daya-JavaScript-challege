// ======================================== Day 21: LeetCode Easy ===============================

// Activity 1: Two Sum
// Task 1: Solve the Two Sum problem on LeetCode.
// - Write a function that takes an array of numbers and a target number, and returns the inices of the two numbers that add up to the target. Log the indinces for a few test case. 
function twoSum(nums, target) {
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        numMap.set(nums[i], i);
    }
    
    return [];
}

// Test cases
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(`Indices for nums1: ${twoSum(nums1, target1)}`); // [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(`Indices for nums2: ${twoSum(nums2, target2)}`); // [1, 2]

const nums3 = [3, 3];
const target3 = 6;
console.log(`Indices for nums3: ${twoSum(nums3, target3)}`); // [0, 1]

const nums4 = [1, 2, 3, 4, 5];
const target4 = 9;
console.log(`Indices for nums4: ${twoSum(nums4, target4)}`); // [3, 4]

const nums5 = [1, 5, 3, 2, 8];
const target5 = 10;
console.log(`Indices for nums5: ${twoSum(nums5, target5)}`); // [3, 4]

// OUTPUT:
// Indices for nums1: 0,1
// Indices for nums2: 1,2
// Indices for nums3: 0,1
// Indices for nums4: 3,4
// Indices for nums5: 3,4


// Activity 2: Reverse Integer 
// Task 2: Solve the Reverse Integer problem on LeetCode.
// - Write a function that takes an integer and returns it with its digits reversed.
// - Handle edge cases like negative numbers and numbers ending in Zero.
// - Log the reversed integers for a few test cases.
function reverseInteger(x) {
    let reversed = 0;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    reversed *= sign;

    // Check for 32-bit signed integer overflow
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }

    return reversed;
}

// Test cases
const testCases = [123, -123, 120, 0, 1534236469];

testCases.forEach(num => {
    console.log(`Original: ${num}, Reversed: ${reverseInteger(num)}`);
});

// OUTPUT:
// Original: 123, Reversed: 321
// Original: -123, Reversed: -321
// Original: 120, Reversed: 21
// Original: 0, Reversed: 0
// Original: 1534236469, Reversed: 0

// Activity 3: Palindrome Number
// Task 3: Solve the Palindrome Number problem on LeetCode.
// - Write a function that takes an integer and returns true if it is  a palindrome, and false otherwise.
// - Log the result for a few test cases, including edge cases like negative numbers.
function isPalindrome(x) {

    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversed = 0;
    let original = x;

    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    return original === reversed;
}

const testCases2 = [121, -121, 10, 0, 12321, 1234321];

testCases2.forEach(num => {
    console.log(`Number: ${num}, Is Palindrome: ${isPalindrome(num)}`);
});

// OUTPUT:
// Number: 121, Is Palindrome: true
// Number: -121, Is Palindrome: false
// Number: 10, Is Palindrome: false
// Number: 0, Is Palindrome: true
// Number: 12321, Is Palindrome: true
// Number: 1234321, Is Palindrome: true

// Activity 4: Merge Two Sorted Lists
// Task 4: Solve the Merge Two Sorted Lists problem on LeetCode.
// - Write a function function that takes two sorted linked lists and returns a new sorted list by merging them. 
// Create a few test cases with linked lists and log the merged list. 
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next;
}

function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 4]);

console.log("List 1:");
printLinkedList(list1);

console.log("List 2:");
printLinkedList(list2);

let mergedList = mergeTwoLists(list1, list2);
console.log("Merged List:");
printLinkedList(mergedList);

// OUTPUT:
// List 1:
// 1 -> 2 -> 4
// List 2:
// 1 -> 3 -> 4
// Merged List:
// 1 -> 1 -> 2 -> 3 -> 4 -> 4


// Activity 5: Valid Parentheses
// Task 5: Solve the Valid Parentheses promble on LeetCode.
// - Write a function that takes a string containing just the characters (, ), {, }, [, ], and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order. 
// Log the result for a few test cases.  
function isValid(s) {
    const stack = [];
    const matchingPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (matchingPairs[char]) {
            const topElement = stack.length === 0 ? '#' : stack.pop();

            if (topElement !== matchingPairs[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("")); // true
console.log(isValid("[({(())}[()])]")); // true