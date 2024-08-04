// ==================================== Day 23: LeetCode Hard =====================================

// Activity 1: Median of Two Sorted Arrays
// Task 1: Solve the median of two sorted arrays problem on LeetCode.
// - Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// - Log the median for a few test cases, including edge cases.
function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let imin = 0, imax = m, halfLen = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        const i = Math.floor((imin + imax) / 2);
        const j = halfLen - i;

        if (i < m && nums2[j - 1] > nums1[i]) {
            imin = i + 1;
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            imax = i - 1; 
        } else {
            let maxLeft = 0;
            if (i === 0) {
                maxLeft = nums2[j - 1];
            } else if (j === 0) {
                maxLeft = nums1[i - 1];
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }

            if ((m + n) % 2 === 1) {
                return maxLeft;
            }

            let minRight = 0;
            if (i === m) {
                minRight = nums2[j];
            } else if (j === n) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums1[i], nums2[j]);
            }

            return (maxLeft + minRight) / 2;
        }
    }
}

function testFindMedianSortedArrays() {
    const testCases = [
        {
            nums1: [1, 3],
            nums2: [2],
            expected: 2
        },
        {
            nums1: [1, 2],
            nums2: [3, 4],
            expected: 2.5
        },
        {
            nums1: [0, 0],
            nums2: [0, 0],
            expected: 0
        },
        {
            nums1: [],
            nums2: [1],
            expected: 1
        },
        {
            nums1: [2],
            nums2: [],
            expected: 2
        }
    ];

    testCases.forEach(({ nums1, nums2, expected }, index) => {
        const result = findMedianSortedArrays(nums1, nums2);
        console.log(`Test Case ${index + 1}: nums1 = [${nums1}], nums2 = [${nums2}]`);
        console.log(`Expected: ${expected}, Got: ${result}`);
        console.log("-----------------------------");
    });
}

testFindMedianSortedArrays();

// OUTPUT:
// Test Case 1: nums1 = [1,3], nums2 = [2]
// Expected: 2, Got: 2
// -----------------------------
// Test Case 2: nums1 = [1,2], nums2 = [3,4]
// Expected: 2.5, Got: 2.5
// -----------------------------
// Test Case 3: nums1 = [0,0], nums2 = [0,0]
// Expected: 0, Got: 0
// -----------------------------
// Test Case 4: nums1 = [], nums2 = [1]
// Expected: 1, Got: 1
// -----------------------------
// Test Case 5: nums1 = [2], nums2 = []
// Expected: 2, Got: 2
// -----------------------------


// Activity 2: Merge k Sorted Lists
// Task 2: Solve the merge k sorted lists problem LeetCode.
// - Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// - Create a few test cases with linked lists and log the merged list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 !== null ? l1 : l2;

    return dummy.next;
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;

    let interval = 1;
    while (interval < lists.length) {
        for (let i = 0; i + interval < lists.length; i += interval * 2) {
            lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
        }
        interval *= 2;
    }

    return lists[0];
}

function printList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
}

// Test cases
const l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const l3 = new ListNode(2, new ListNode(6));

const lists = [l1, l2, l3];
const mergedList = mergeKLists(lists);

printList(mergedList); 

// OUTPUT:
// [
//     1, 1, 2, 3,
//     4, 4, 5, 6
//   ]


// Activity 3: Trapping Rain Water 
// Task 3: Solve the Trapping Rain Water problem on Leetcode.
// - Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
// - Log the amount of trapped water for a few test cases.
function trap(height) {
    if (height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;
    let left_max = 0;
    let right_max = 0;
    let water_trapped = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= left_max) {
                left_max = height[left];
            } else {
                water_trapped += left_max - height[left];
            }
            left++;
        } else {
            if (height[right] >= right_max) {
                right_max = height[right];
            } else {
                water_trapped += right_max - height[right];
            }
            right--;
        }
    }

    return water_trapped;
}

// Test cases
const heights1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const heights2 = [4, 2, 0, 3, 2, 5];
const heights3 = [1, 2, 1, 2, 1, 2, 1, 2, 1];

console.log(trap(heights1)); // Output: 6
console.log(trap(heights2)); // Output: 9
console.log(trap(heights3)); // Output: 0


// Activity 4: N-Queens
// Task 4: Solve the N-Queens problem on LeetCode.
// - write a function thata places n queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
// - Log the distinct solutions for a few test cases.
function solveNQueens(n) {
    const results = [];
    const columns = new Set();
    const diag1 = new Set();
    const diag2 = new Set();

    function backtrack(row, board) {
        if (row === n) {
            results.push(board.map(r => '.'.repeat(n).split('').map((_, i) => r === i ? 'Q' : '.').join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (!columns.has(col) && !diag1.has(row - col) && !diag2.has(row + col)) {
                columns.add(col);
                diag1.add(row - col);
                diag2.add(row + col);
                board.push(col);

                backtrack(row + 1, board);

                columns.delete(col);
                diag1.delete(row - col);
                diag2.delete(row + col);
                board.pop();
            }
        }
    }

    backtrack(0, []);
    return results;
}

// Test cases
const n1 = 4;
const n2 = 6;

console.log(`Solutions for ${n1}-Queens:`);
console.log(solveNQueens(n1));

console.log(`Solutions for ${n2}-Queens:`);
console.log(solveNQueens(n2));

// OUTPUT:
// Solutions for 4-Queens:
// [
//   [ '.Q..', '...Q', 'Q...', '..Q.' ],
//   [ '..Q.', 'Q...', '...Q', '.Q..' ]
// ]
// Solutions for 6-Queens:
// [
//   [ '.Q....', '...Q..', '.....Q', 'Q.....', '..Q...', '....Q.' ],
//   [ '..Q...', '.....Q', '.Q....', '....Q.', 'Q.....', '...Q..' ],
//   [ '...Q..', 'Q.....', '....Q.', '.Q....', '.....Q', '..Q...' ],
//   [ '....Q.', '..Q...', 'Q.....', '.....Q', '...Q..', '.Q....' ]
// ]


// Activity 5: Word Ladder
// Task 5: Solve the Word Ladder problem LeetCode.
// - Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list. 
// - Log the length of the shorted transformation sequence for a few test cases. 
function wordLadder(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    const queue = [[beginWord, 1]]; // [currentWord, currentLength]
    const visited = new Set();
    visited.add(beginWord);

    while (queue.length > 0) {
        const [currentWord, currentLength] = queue.shift();

        if (currentWord === endWord) return currentLength;

        for (let i = 0; i < currentWord.length; i++) {
            for (let charCode = 'a'.charCodeAt(0); charCode <= 'z'.charCodeAt(0); charCode++) {
                const newChar = String.fromCharCode(charCode);
                if (newChar === currentWord[i]) continue;

                const newWord = currentWord.substring(0, i) + newChar + currentWord.substring(i + 1);

                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    queue.push([newWord, currentLength + 1]);
                    visited.add(newWord);
                }
            }
        }
    }

    return 0; // No possible transformation sequence
}

// Test cases
const beginWord1 = "hit";
const endWord1 = "cog";
const wordList1 = ["hot", "dot", "dog", "cog", "lot", "log"];

const beginWord2 = "hit";
const endWord2 = "cog";
const wordList2 = ["hot", "dot", "dog", "lot", "log"];

console.log(`Shortest transformation length from "${beginWord1}" to "${endWord1}":`, wordLadder(beginWord1, endWord1, wordList1));

console.log(`Shortest transformation length from "${beginWord2}" to "${endWord2}":`, wordLadder(beginWord2, endWord2, wordList2)); 


// OUTPUT:
// Shortest transformation length from "hit" to "cog": 5
// Shortest transformation length from "hit" to "cog": 0