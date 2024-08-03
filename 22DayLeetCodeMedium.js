// ================= Day 22 : Leetcode Medium ==============================

// Activity 1: Add two Numbers
// Task 1: Solve the Add two Numbers problem on LeetCode.
// - Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list. 
// - Create a few test cases with linked lists and log the sum as a linked list. 
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}

function createLinkedList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}

function printLinkedList(list) {
    let current = list;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Test Case 1
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let result = addTwoNumbers(l1, l2);
printLinkedList(result); 

// Test Case 2
l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
result = addTwoNumbers(l1, l2);
printLinkedList(result);

// Test Case 3
l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
result = addTwoNumbers(l1, l2);
printLinkedList(result);

// OUTPUT:
// 7 -> 0 -> 8
// 0
// 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1


// Activity 2: Longest Substring Without Repeating Characters 
// Task 2: Solve the Longest substring without repeating characters problem on leetcode.
// - Write a function that takes a string and returns the lenght of the longest substring without repeating characters.
// - Log the length for a few test cases, including edge cases.
function lengthOfLongestSubstring(s) {
    let map = new Map();
    let start = 0;
    let maxLength = 0;

    for (let end = 0; end < s.length; end++) {
        if (map.has(s[end])) {
            start = Math.max(map.get(s[end]) + 1, start);
        }
        map.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

function testLengthOfLongestSubstring() {
    const testCases = [
        { input: "abcabcbb", expected: 3 },
        { input: "bbbbb", expected: 1 },
        { input: "pwwkew", expected: 3 },
        { input: "", expected: 0 },
        { input: "a", expected: 1 },
        { input: "au", expected: 2 },
        { input: "dvdf", expected: 3 }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = lengthOfLongestSubstring(input);
        console.log(`Test Case ${index + 1}: Input = "${input}"`);
        console.log(`Expected: ${expected}, Got: ${result}`);
        console.log(result === expected ? "PASS" : "FAIL");
        console.log("-----------------------------");
    });
}

testLengthOfLongestSubstring();

// OUTPUT:
// Test Case 1: Input = "abcabcbb"
// Expected: 3, Got: 3
// PASS
// -----------------------------
// Test Case 2: Input = "bbbbb"
// Expected: 1, Got: 1
// PASS
// -----------------------------
// Test Case 3: Input = "pwwkew"
// Expected: 3, Got: 3
// PASS
// -----------------------------
// Test Case 4: Input = ""
// Expected: 0, Got: 0
// PASS
// -----------------------------
// Test Case 5: Input = "a"
// Expected: 1, Got: 1
// PASS
// -----------------------------
// Test Case 6: Input = "au"
// Expected: 2, Got: 2
// PASS
// -----------------------------
// Test Case 7: Input = "dvdf"
// Expected: 3, Got: 3
// PASS
// -----------------------------


// Activity 3: Container with Most water
// Task 3: Solve the container with most water problem on leetcode.
// - write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
// - Log the maximum amount of water for  a few test cases.
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const currentArea = width * currentHeight;
        maxWater = Math.max(maxWater, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

function testMaxArea() {
    const testCases = [
        { input: [1,8,6,2,5,4,8,3,7], expected: 49 },
        { input: [1,1], expected: 1 },
        { input: [4,3,2,1,4], expected: 16 },
        { input: [1,2,1], expected: 2 }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = maxArea(input);
        console.log(`Test Case ${index + 1}: Input = [${input}]`);
        console.log(`Expected: ${expected}, Got: ${result}`);
        console.log(result === expected ? "PASS" : "FAIL");
        console.log("-----------------------------");
    });
}

testMaxArea();

// OUTPUT:
// Test Case 1: Input = [1,8,6,2,5,4,8,3,7]
// Expected: 49, Got: 49
// PASS
// -----------------------------
// Test Case 2: Input = [1,1]
// Expected: 1, Got: 1
// PASS
// -----------------------------
// Test Case 3: Input = [4,3,2,1,4]
// Expected: 16, Got: 16
// PASS
// -----------------------------
// Test Case 4: Input = [1,2,1]
// Expected: 2, Got: 2
// PASS
// -----------------------------


// Activity 4: 3 Sum
// Task 4: Solve the 3 sum problem on leetcode.
// - write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// - Log the triplets for a few test cases, including edge cases. 
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const triplets = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                triplets.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; 
                while (left < right && nums[right] === nums[right - 1]) right--; 
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
}

function testThreeSum() {
    const testCases = [
        { input: [-1, 0, 1, 2, -1, -4], expected: [[-1, -1, 2], [-1, 0, 1]] },
        { input: [], expected: [] },
        { input: [0], expected: [] },
        { input: [0, 0, 0], expected: [[0, 0, 0]] },
        { input: [-2, 0, 1, 1, 2], expected: [[-2, 0, 2], [-2, 1, 1]] }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = threeSum(input);
        console.log(`Test Case ${index + 1}: Input = [${input}]`);
        console.log(`Expected: ${JSON.stringify(expected)}, Got: ${JSON.stringify(result)}`);
        console.log(JSON.stringify(result) === JSON.stringify(expected) ? "PASS" : "FAIL");
        console.log("-----------------------------");
    });
}

testThreeSum();

// OUTPUT:
// Test Case 1: Input = [-4,-1,-1,0,1,2]
// Expected: [[-1,-1,2],[-1,0,1]], Got: [[-1,-1,2],[-1,0,1]]
// PASS
// -----------------------------
// Test Case 2: Input = []
// Expected: [], Got: []
// PASS
// -----------------------------
// Test Case 3: Input = [0]
// Expected: [], Got: []
// PASS
// -----------------------------
// Test Case 4: Input = [0,0,0]
// Expected: [[0,0,0]], Got: [[0,0,0]]
// PASS
// -----------------------------
// Test Case 5: Input = [-2,0,1,1,2]
// Expected: [[-2,0,2],[-2,1,1]], Got: [[-2,0,2],[-2,1,1]]
// PASS
// -----------------------------


// Activity 5: Group Anagrams
// Task 5: Solve the Group Anagrams problem on leetcode.
// - write a function that takes an array of strings and groups anagrams together. 
// Log the grouped anagrams for a few test cases.
function groupAnagrams(strs) {
    const map = new Map();

    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
}

function testGroupAnagrams() {
    const testCases = [
        {
            input: ["eat", "tea", "tan", "ate", "nat", "bat"],
            expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
        },
        {
            input: [""],
            expected: [[""]]
        },
        {
            input: ["a"],
            expected: [["a"]]
        },
        {
            input: ["", "b", ""],
            expected: [["", ""], ["b"]]
        }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = groupAnagrams(input);
        console.log(`Test Case ${index + 1}: Input = [${input}]`);
        console.log(`Expected: ${JSON.stringify(expected)}, Got: ${JSON.stringify(result)}`);
        console.log("-----------------------------");
    });
}

testGroupAnagrams();

// OUTPUT:
// Test Case 1: Input = [eat,tea,tan,ate,nat,bat]
// Expected: [["eat","tea","ate"],["tan","nat"],["bat"]], Got: [["eat","tea","ate"],["tan","nat"],["bat"]]
// -----------------------------
// Test Case 2: Input = []
// Expected: [[""]], Got: [[""]]
// -----------------------------
// Test Case 3: Input = [a]
// Expected: [["a"]], Got: [["a"]]
// -----------------------------
// Test Case 4: Input = [,b,]
// Expected: [["",""],["b"]], Got: [["",""],["b"]]
// -----------------------------