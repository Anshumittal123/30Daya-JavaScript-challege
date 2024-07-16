// ============================================= DAY 4 : LOOPS ===================================

// Activity 1 : For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for(let i = 1; i <= 10; i++){
    console.log(`Number is a : ${i}`);
}

// Task 2: Write a program to print multiplication table of 5 using a for loop.
for(let i = 1; i <= 10; i++){
    console.log(`Table of 5 is a : ${i * 5}`);
}

// OUPUT:
// Task 1:
// Number is a : 1
// Number is a : 2
// Number is a : 3
// Number is a : 4
// Number is a : 5
// Number is a : 6
// Number is a : 7
// Number is a : 8
// Number is a : 9
// Number is a : 10

// Task 2:
// Table of 5 is a : 5
// Table of 5 is a : 10
// Table of 5 is a : 15
// Table of 5 is a : 20
// Table of 5 is a : 25
// Table of 5 is a : 30
// Table of 5 is a : 35
// Table of 5 is a : 40
// Table of 5 is a : 45
// Table of 5 is a : 50


// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let i = 1;
let sum = 0;
while(i <= 10){
     sum += i
    console.log(`Sum of number ${i} is : ${sum}`);
    i++;
}

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let j = 10;
while(j >= 1){
    console.log(`Reverse number is a : ${j}`);
    j--;
}

// OUTPUT: 
// Task 3: 
// Sum of number 1 is : 1
// Sum of number 2 is : 3
// Sum of number 3 is : 6
// Sum of number 4 is : 10
// Sum of number 5 is : 15
// Sum of number 6 is : 21
// Sum of number 7 is : 28
// Sum of number 8 is : 36
// Sum of number 9 is : 45
// Sum of number 10 is : 55

// Task 4:
// Reverse number is a : 10
// Reverse number is a : 9
// Reverse number is a : 8
// Reverse number is a : 7
// Reverse number is a : 6
// Reverse number is a : 5
// Reverse number is a : 4
// Reverse number is a : 3
// Reverse number is a : 2
// Reverse number is a : 1


// Activity 3: Do-While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do..while loop.
let x = 1
do {
    console.log(`Number is : ${x}`);
    x++;
} while (x <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do..while loop.
let num = 5;
let fact = 1;
let y = 1;
do {
    fact *= y;
    console.log(`Factorial of ${num} is : ${fact}`);
    y++;
} while (y <= num);

// OUTPUT: 
// Task 5:
// Number is : 1
// Number is : 2
// Number is : 3
// Number is : 4
// Number is : 5

// Task 6:
// Factorial of 5 is : 1
// Factorial of 5 is : 2
// Factorial of 5 is : 6
// Factorial of 5 is : 24
// Factorial of 5 is : 120

// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops:
// *
// * *
// * * *
// * * * *
// * * * * *
let pattern = "";
for(let i = 1; i<=5; i++){
    for(let j=1; j <= i; j++){
        pattern += "*"
    }
    pattern += '\n';
}
console.log(pattern);

// OUTPUT:
// *
// * *
// * * *
// * * * *
// * * * * *


// Activity 5: Loop control statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for(let i = 1; i<= 10; i++){
    if (i === 5) {
        continue;
    }
    console.log(`Number is a :${i}`);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop loop when the number is 7 using the break statement.
for(let i = 1; i<= 10; i++){
    if (i === 7) {
        break;
    }
    console.log(`Number is a :${i}`);
}

// OUTPUT:
// Task 8:
// Number is a :1
// Number is a :2
// Number is a :3
// Number is a :4
// Number is a :6
// Number is a :7
// Number is a :8
// Number is a :9
// Number is a :10

// Task 9: 
// Number is a :1
// Number is a :2
// Number is a :3
// Number is a :4
// Number is a :5
// Number is a :6
