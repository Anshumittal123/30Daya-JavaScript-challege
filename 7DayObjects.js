// ============================================= Day 7 : Objects =======================================

// Activity 1: Object Creation and Access
// Task 1: Create an object represnting a book with properties like title, author, and year, and log the object to the console.
let book = {
    title: "Learn JavaScript from basic",
    author: "Anshu Mittal",
    year: 2023,
}

console.log(book);

// Task 2: Access and log the title and auther properties of the book object.
const title = book.title;
const auther = book.author;
console.log(`Title of a book is ${title} and auther is ${auther}`);

// OUTPUT:
// Task 1:
// {
//   title: 'Learn JavaScript from basic',
//   author: 'Anshu Mittal',
//   year: 2023
// }

// Task 2:
// Title of a book is Learn JavaScript from basic and auther is Anshu Mittal


// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log result of calling this method.
book = {
    title: "Learn JavaScript from basic",
    author: "Anshu Mittal",
    year: 2023,
    getTitleAndAuthor: function(){
        return `Book title ${this.title} and author ${this.auther}`;
    }
}

console.log(book.getTitleAndAuthor());

// task 4: Add a metod to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book = {
    title: "Learn JavaScript from basic",
    author: "Anshu Mittal",
    year: 2023,
    getTitleAndAuthor: function(){
        return `Book title ${this.title} and author ${this.auther}`;
    },
    updateYear: function(newYear){
        this.year = newYear;
    }
}
book.updateYear(2024);
console.log(`Updated year is : ${book.year}`);

// OUTPUT:
// Task 3:
// Book title Learn JavaScript from basic and author undefined

// Task 4:
// Updated year is : 2024


// Activity 3: Nested Objects
// Task 5: Create a nested object representing a libraray with properties like name and books (am array of book objects), and log the library object to the console.
const library ={
    name: "Study and grow more",
    books:[
        {
            title: "Learn JavaScript from basic",
            author: "Anshu Mittal",
            year: 2023,
        },
        {
            title: "The World: A Family History",
            author: "Shubhra Gupta",
            year: 1985,
        },
        {
            title: "Revolutionaries: The Other Story of How India Won Its Freedom",
            author: "	Sanjeev Sanyal",
            year: 1965,
        }
    ]
}

console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(`library name ${library.name}`);
console.log("Book Titles: ");
library.books.forEach((book) =>{
    console.log(book.title);
});

// OUTPUT:
// Task 5: 
// {
//     name: 'Study and grow more',
//     books: [
//       {
//         title: 'Learn JavaScript from basic',
//         author: 'Anshu Mittal',
//         year: 2023
//       },
//       {
//         title: 'The World: A Family History',
//         author: 'Shubhra Gupta',
//         year: 1985
//       },
//       {
//         title: 'Revolutionaries: The Other Story of How India Won Its Freedom',
//         author: '\tSanjeev Sanyal',
//         year: 1965
//       }
//     ]
//   }

// Task 6:
// library name Study and grow more
// Book Titles: 
// Learn JavaScript from basic
// The World: A Family History
// Revolutionaries: The Other Story of How India Won Its Freedom


// Activity 4: The this keyword
// Task 7: add a method to the book object that uses the this keyword to return a string with the book's title  an year, and log the result of calling this method.
book = {
    title: "Learn JavaScript from basic",
    author: "Anshu Mittal",
    year: 2023,
    getTitleAndAuthor: function(){
        return `Book title ${this.title} and author ${this.auther}`;
    },
    updateYear: function(newYear){
        this.year = newYear;
    },
    getTitleAndYear: function(){
        return `Book title ${this.title} and year ${this.year}`;
    }
}

console.log(book.getTitleAndYear());

// OUTPUT:
// Task 7:
// Book title Learn JavaScript from basic and year 2023


// Activity 5: Object Iteration 
// Task 8: Use a for..in loop to iterate over the properties of the book object and log each property and its value.
for (const key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]} `);
    }
}

// Task 9: Use Object.keys and object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));

// OUTPUT:
// Task 8:
// title: Learn JavaScript from basic 
// author: Anshu Mittal 
// year: 2023 
// getTitleAndAuthor: function(){
//         return `Book title ${this.title} and author ${this.auther}`;
//     } 
// updateYear: function(newYear){
//         this.year = newYear;
//     } 
// getTitleAndYear: function(){
//         return `Book title ${this.title} and year ${this.year}`;
//     } 

// Task :9
// [
//     'title',
//     'author',
//     'year',
//     'getTitleAndAuthor',
//     'updateYear',
//     'getTitleAndYear'
// ]

// [
//     'Learn JavaScript from basic',
//     'Anshu Mittal',
//     2023,
//     [Function: getTitleAndAuthor],
//     [Function: updateYear],
//     [Function: getTitleAndYear]
//   ]