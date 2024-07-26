// ================================================ Day 14: Classes ========================================

// Activity 1: Class definition
// Task 1: Define a class person with properties name and age, and a method to reture a greeting message. Create an instance of the class and log the greeting message.
class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        return `Hello, my name is ${this.name} and I am ${this.age} year old.`
    }
}

const per1 = new person("Anshu", 19);
console.log(per1.name);
console.log(per1.greeting());

// Task 2: Add a method to the person class that updates the age property and logs the updated age.
person.prototype.updateAge = function(newAge){
    return this.age = newAge; 
}

console.log(`Update age is : ${person1.updateAge(20)}`);

// OUTPUT:
// Task 1:
// Anshu
// Hello, my name is Anshu and I am 19 year old.

// Task 2:
// Update age is : 20


// Activity 2: Class Inheritance
// Task 3: Define a class student that extends the person class. Add a property StudentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class student extends person{
    constructor(name, age, email, studentID){
        super(name, age, email);
        this.studentID = studentID;
    }

    getStudentID(){
        return this.studentID;
    }
}

const s1 = new student("Deepak", 20, "deepake200445@gmail.com", 244576);
console.log(s1.greeting());
console.log(s1.getStudentID());

// Task 4: Override the greeting method in the student class to include the student ID in the meassage. Log the overriden greeting message.
student.prototype.greeting = function(){
    return `Hello, my name is ${this.name} and I am ${this.age} year old. My Student ID is ${this.studentID}.`;
}

console.log(s1.greeting());

// OUTPUT:
// Task 3:
// Hello, my name is Deepak and I am 20 year old.
// 244576

// Task 4:
// Hello, my name is Deepak and I am 20 year old. My Student ID is 244576.


// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the person class that returns a genertic greeting message. call this static method without creating an instance of the class and log the message.
class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        return `Hello, my name is ${this.name} and I am ${this.age} year old.`
    }
    static genericGreeting(){
        return "Hello, this is a generic greeting from the person class.";
    }
}

console.log(person.genericGreeting());

// Task 6: Add a static property to the student class to keep track of the number of students created. Increment this property in the  constructor and log the total number of the students.
class student extends person{
    static studentCount = 0;
    constructor(name, age, email, studentID){
        super(name, age, email);
        this.studentID = studentID;
        student.studentCount++;
    }

    getStudentID(){
        return this.studentID;
    }

    static getStudentCount(){
        return `Total number of students: ${student.studentCount}`
    }
}

const student1 = new student('Alice', 20, 'Alice@gmail.com', 'S12345');
const student2 = new student('Bob', 22, 'Alice@gmail.com', 'S67890');

console.log(student1.getStudentID());
console.log(student2.getStudentID());

console.log(student.getStudentCount());

// OUTPUT:
// Task 5:
// Hello, this is a generic greeting from the person class.

// Task 6:
// S12345
// S67890
// Total number of students: 2


// Activity 4: Getters and Setters
// Task 7: Add a getter method to the person class to return the full name (assume a firstName and lastname property). Create an instance and log the full name using the getter.
class person{
    constructor(Firstname, lastName, age){
        this.Firstname = Firstname;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.Firstname} ${this.lastName}`;
    }

    greeting(){
        return `Hello, my name is ${this.name} and I am ${this.age} year old.`
    }
    static genericGreeting(){
        return "Hello, this is a generic greeting from the person class.";
    }
}

const p1 = new person("Anshu", "Mittal", 19);
console.log(`Full Name is : ${p1.fullName}`);

// Task 8: Add a setter method to the person class to update the name properties (firstName and lastNume). Update the name using the setter and log the updated full name.
class person{
    constructor(firstname, lastName, age){
        this.firstname = firstname;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstname} ${this.lastName}`;
    }

    set fullName(name){
        const [firstName, lastName] = name.split(' ');
        this.firstname = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello, my name is ${this.name} and I am ${this.age} year old.`
    }
    static genericGreeting(){
        return "Hello, this is a generic greeting from the person class.";
    }
}

const person1 = new person('John', 'Doe', 30);
console.log(`Initial Full Name: ${person1.fullName}`);

person1.firstname = 'Deepak kumar';

console.log(`Updated Full Name: ${person1.fullName}`);

// OUTPUT:
// Task 7:
// Full Name is : Anshu Mittal

// Task 8:
// Initial Full Name: John Doe
// Updated Full Name: Deepak kumar Doe


// Activity 5: Private Fields 
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account{
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
        }else{
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount){
        if(amount    > 0 && amount <= this.#balance){
            this.#balance -= amount;
            console.log(`Withdraw: $${amount}. New balance: $${this.#balance}.`);
        }else if(amount > this.#balance){
            console.log('Insfficient funds.');
        }else{
            console.log('Withdrawal amount must be positive.');
        }
    }

    getBalance(){
        return this.#balance;
    }
}

// Task 10: Create an instance of the account class and test the deposit and withdraw methods, logging the balance after each operation.
const a1 = new Account(1000);
console.log(`Initial balance: $${a1.getBalance()}`); 

a1.deposit(50);
console.log(`Balance after deposit: $${a1.getBalance()}`);

a1.withdraw(30);
console.log(`Balance after withdrawal: $${a1.getBalance()}`); 

a1.deposit(-20);
console.log(`Current balance: $${a1.getBalance()}`);

// OUTPUT:
// Task 10:
// Initial balance: $1000

// Deposited: $50. New balance: $1050
// Balance after deposit: $1050

// Withdraw: $30. New balance: $1020.
// Balance after withdrawal: $1020

// Deposit amount must be positive.
// Current balance: $1020