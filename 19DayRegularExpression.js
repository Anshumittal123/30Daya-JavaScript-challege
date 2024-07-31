// ================================== Day 19 Regular Expressions =========================================

// Activity 1: Basic Regular Expressions
// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
function FindJavaScriptOccurrences(inputString){
    const regex = /JavaScript/g;
    const matches = inputString.match(regex);

    console.log("Matches: ", matches);
}

const text = "JavaScript is a versatiale language. I love programming in JavaScript!";

FindJavaScriptOccurrences(text);

// OUTPUT:
// Matches:  [ 'JavaScript', 'JavaScript' ]

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
function FindDigit(inputString){
    const regex = /[0-9]/g;
    const matches = inputString.match(regex);

    console.log("Matches: ", matches);
}

const text1 = "I got marks 80 out of 100 and secure a 1st rank into my schools in 2022";
FindDigit(text1);

// OUTPUT:
// Matches:  [
//     '8', '0', '1', '0',
//     '0', '1', '2', '0',
//     '2', '2'
//   ]

// Activity 2: Character Classes and Quantifiers
// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
function FindCapitalChar(inputString){
    const regex = /[A-Z]/g;
    const matches = inputString.match(regex);

    console.log("Matches: ", matches);
}

const text2 = "Hello, Everyone My name is Anshu Mittal. I am 19 year old.";
FindCapitalChar(text2);

// OUTPUT:
// Matches:  [ 'H', 'E', 'M', 'A', 'M', 'I' ]

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
function FindOneOrMoreDigits(inputString){
    const regex = /\d+/g;
    const matches = inputString.match(regex);

    console.log("Match: ", matches);
}

const text3 = "My phone is 123-456-7890 and my zip is 98765.";
FindOneOrMoreDigits(text3);

// OUTPUT:
// Match:  [ '123', '456', '7890', '98765' ]

// Activity 3: Grouping and Capturing
// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
function capturePhoneNumberComponents(phoneNumber){
    const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
    const matches = phoneNumber.match(regex);

    if(matches){
        console.log("Area Code: ", matches[1]);
        console.log("Centeral office code: ", matches[2]);
        console.log("Line Number: ", matches[3]);
    }else{
       console.log("No matches found."); 
    }
}

const phoneNumber = "(123) 456-7890";
capturePhoneNumberComponents(phoneNumber);

// OUTPUT:
// Area Code:  123
// Centeral office code:  456
// Line Number:  7890


// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
function captureEmailParts(email){
    const regex = /^([^@]+)@([^@]+)$/;
    const matches = email.match(regex);

    if(matches){
        console.log("Match Found:");
        console.log("Username: ", matches[1]);
        console.log("Domain:", matches[2]);
    }else{
        console.log("Match not found.");
    }
}

const email1 = "user@example.com";
const email2 = "name@domain.org";
const email3 = "invaild-email";
captureEmailParts(email1);
captureEmailParts(email2);
captureEmailParts(email3);

// OUTPUT:
// Username:  user
// Domain: example.com
// Match Found:
// Username:  name
// Domain: domain.org
// Match not found.
 

// Activity 4: Assertions and Boundaries
// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
function FindWordAtBeginning(inputString, word){
    inputString = inputString.trim();
    const regex = new RegExp(`^${word}`, 'i');
    const matches = inputString.match(regex);

    if(matches){
        console.log("Match Found: ", matches[0]);
    }else{
        console.log("Match not found.");
    }
}

const text6 = "Hello Everyone!";
const str = "hello Again!";
const text7 = "This is a different test.";
FindWordAtBeginning(text6, "Hello");
FindWordAtBeginning(str, "Hello");
FindWordAtBeginning(text7, "Hello");

// OUTPUT:
// Match Found:  Hello
// Match Found:  hello
// Match not found.

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
function FindWordAtEndString(inputString, word){
    inputString = inputString.trim();
    const regex = new RegExp(`${word}$`, 'i');
    const matches = inputString.match(regex);

    if(matches){
        console.log("Match Found: ", matches[0]);
    }else{
        console.log("Match not found.");
    }
}

const text4 = "This is a test string";
const text5 = "This is a another test";

FindWordAtEndString(text4, "string");
FindWordAtEndString(text5, "test");
FindWordAtEndString(text5, "string");

// OUTPUT:
// Match Found:  string
// Match Found:  test
// Match not found.

// Activity 5: Practical Applications
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
function validatePassword(password){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const matches = password.match(regex);

    if(matches){
        console.log("password is valid.");
    }else{
        console.log("password is not valid.");
    }
}

const password1 = "Password123!";
const password2 = "pass123";
const password3 = "PASSWORD123!";
const password4 = "Password!";
validatePassword(password1);
validatePassword(password2);
validatePassword(password3);
validatePassword(password4);

// OUTPUT:
// password is valid.
// password is not valid.
// password is not valid.
// password is not valid.

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
function vaildateURL(url){
    const regex = /^(https?:\/\/)?([a-zA-Z\d-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
    const isValid = regex.test(url);

    if(isValid){
        console.log("URL is valid.");
    }else{
        console.log("URL is not valid.");
    }
}

const url1 = "https://www.example.com";
const url2 = "http://example.com/path/to/resource?query=123#fragment";
const url3 = "ftp://invalid-url.com";
const url4 = "https://invalid-url";
const url5 = "http://www.example.co.uk";

vaildateURL(url1);
vaildateURL(url2);
vaildateURL(url3);
vaildateURL(url4);
vaildateURL(url5);

// OUTPUT:
// URL is valid.
// URL is valid.
// URL is not valid.
// URL is not valid.
// URL is valid.