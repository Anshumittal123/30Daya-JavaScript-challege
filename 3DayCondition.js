// ======================================================= DAY 3 CONDITION ================================================

// Activity 1: IF-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
const num = 25;
if(num < 0){
    console.log(`${num} is negative`);
}else if(num > 0){
    console.log(`${num} is positive`);
}else{
    console.log(`${num} is a zero`);
}

// Task 2: Write a program to check if a person is eligible to vote  (age >= 18) and log the result to the console. 
const age = 23;
if(age > 18){
    console.log(`Your age is ${age}. So, you are eligible for vote.`);
}else{
    console.log(`Your age is ${age}. So, you are not eligible for vote.`);
}

// OUTPUT:
// 25 is positive
// Your age is 23. So, you are eligible for vote.


// Activity 2: Nested if-else Statements
// Task 3 : Write a program to find the largest of three numbers using nested if-else statements.
const a = 5;
const b = 6;
const c = 8;

if(a > b){
    if(a > c){
        console.log(`${a} (A) is a largest number`);
    }else{
        console.log(`${c} (C) is a largest number`);
    }
}else if(b > c){
    console.log(`${b} (B) is a largest number`);
}else{
    console.log(`${c} (C) is a largest number`);
}

// OUTPUT: 
// 8 is a largest number


// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the grade to the console.
const day = 5;
switch (day) {
    case 1:
        console.log(`${day} Monday`);
        break;
    case 2:
        console.log(`${day} Tuesday`);
        break;
    case 3:
        console.log(`${day} Wednesday`);
        break;
    case 4:
        console.log(`${day} Thusday`);
        break;
    case 5:
        console.log(`${day} Friday`);
        break;
    case 6:
        console.log(`${day} Saturday`);
        break;
    case 7:
        console.log(`${day} Sunday`);
        break;

    default:
        console.log(`${day} is not vaild day`);
        break;
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console. 
const score = 85;
switch (score) {
    case 99 :
        console.log(`You score is ${score}. You got A++`);
        break;
    case 90 :
        console.log(`You score is ${score}. You got A`);
        break;
    case 85 :
        console.log(`You score is ${score}. You got B`);
        break;
    case 75 :
        console.log(`You score is ${score}. You got C`);
        break;
    case 55 :
        console.log(`You score is ${score}. You got D`);
        break;
    case 40 :
        console.log(`You score is ${score}. You got F`);
        break;

    default:
        console.log(`You score is ${score}. Invaild score`);
        break;
}

// OUTPUT:
// 5 Friday
// You score is 85. You got B


// Activity 4: Conditional Ternary Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
const number = 25
number % 2 == 0 ? console.log(`${number} is a even`) : console.log(`${number} is a odd`);

// OUTPUT: 25 is a odd


// Activity 5: Combining Condition 
// Task 7: Write a program to check if a year is a leap year using multiple condition (divisible by 4, but not 100 unless also divisible by 400)

const year = 2024;
 if(year % 4 == 0 || year % 100 != 0 && year % 400 == 0){
    console.log(`${year} is a leap year`);
 }else{
    console.log(`${year} is not a leap year`);
 }

//  OUTPUT: 2024 is a leap year
