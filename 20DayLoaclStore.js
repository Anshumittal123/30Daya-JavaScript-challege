// ================================= Day 20 : LocalStorage and SessionStorage =============================== 

// Activity 1: Understanding LocalStorage
// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
const key = 'myKey';
const value = 'Hello, localStorage!';

localStorage.setItem(key, value);
console.log(`Saved "${value}" to localStorage with key "${key}"`);

const retrievedValue = localStorage.getItem(key);
console.log(`Retrieved value: "${retrievedValue}"`);

// OUTPUT:
// Saved "Hello, localStorage!" to localStorage with key "myKey"
// Retrieved value: "Hello, localStorage!"

// Task 2: Write a Script to save an object to loaclStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const myObject = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};

const key1 = 'user';

localStorage.setItem(key1, JSON.stringify(myObject));
console.log('Object saved to localStorage:', myObject);

const jsonString = localStorage.getItem(key1);

const retrievedObject = JSON.parse(jsonString);

console.log('Retrieved object from localStorage:', retrievedObject);

// OUTPUT:
// Object saved to localStorage: {
//     name: "John Doe", 
//     age: 30, 
//     email: "john.doe@example.com"
// }
// Retrieved object from localStorage: {
//     name: "John Doe", 
//     age: 30, 
//     email: "john.doe@example.com"
// }


// Activity 2: Using LocalStorage
// Task 3: create a simple from that a saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
// HTML Code:-
{/* <h1>User Input Form</h1>
    <form id="userForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br><br>
        <button type="submit">Submit</button>
    </form>

    <h2>Saved Data</h2>
    <p id="savedData"></p> */}

    document.addEventListener('DOMContentLoaded', function() {
        const savedName = localStorage.getItem('name');
        const savedEmail = localStorage.getItem('email');

        if (savedName && savedEmail) {
            document.getElementById('savedData').textContent = `Name: ${savedName}, Email: ${savedEmail}`;
        } else {
            document.getElementById('savedData').textContent = 'No saved data found.';
        }

        document.getElementById('userForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            localStorage.setItem('name', name);
            localStorage.setItem('email', email);

            document.getElementById('savedData').textContent = `Name: ${name}, Email: ${email}`;
        });
    });

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal. 
localStorage.setItem('exampleItem', 'This is an example item');
function logLocalStorageContents() {
    console.log('Current localStorage contents:');
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        console.log(`${key}: ${localStorage.getItem(key)}`);
    }
}
console.log('Before removal:');
logLocalStorageContents();

document.getElementById('removeItemButton').addEventListener('click', function() {
    localStorage.removeItem('exampleItem');
    console.log('After removal:');
    logLocalStorageContents();
});

// OUTPUT:
// Before removal:
// Current localStorage contents:
// exampleItem: This is an example item
// After removal:

// Activity 3: Understanding SessionStorage
// Task 5: Write a script to save a string value to sessionStorage and retriesve it. Log the retrieved value.
function saveToSessionStorage() {
    const valueToSave = 'This is a string value';
    sessionStorage.setItem('exampleString', valueToSave);
    console.log('Value saved to sessionStorage:', valueToSave);
}

function retrieveFromSessionStorage() {
    const retrievedValue = sessionStorage.getItem('exampleString');
    console.log('Value retrieved from sessionStorage:', retrievedValue);
}
console.log('Before removal:');
saveToSessionStorage();
localStorage.removeItem('exampleString');
 console.log('After removal:');
retrieveFromSessionStorage()

// OUTPUT:
// Before removal:
// Value saved to sessionStorage: {
//     exampleString: This is a string value,
// }
// After removal:
// Value retrieved from sessionStorage: {
//     exampleString: This is a string value,
// }

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
function saveObjectToSessionStorage() {
    const objectToSave = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 30
    };

    const jsonString = JSON.stringify(objectToSave);

    sessionStorage.setItem('userObject', jsonString);

    console.log('Object saved to sessionStorage:', objectToSave);
}

function retrieveObjectFromSessionStorage() {
    const jsonString = sessionStorage.getItem('userObject');
    const retrievedObject = JSON.parse(jsonString);
    console.log('Object retrieved from sessionStorage:', retrievedObject);
}
saveObjectToSessionStorage();
retrieveObjectFromSessionStorage();

// OUTPUT:
// Object saved to sessionStorage: {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     age: 30
// }
// Object retrieved from sessionStorage: {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     age: 30
// }

// Activity 4: Using SessionStorage
// Task 7: Create a simple form that saves user input (e.g. name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
// HTML code:-
{/* <h1>SessionStorage Form Example</h1>
<h1>SessionStorage Form Example</h1>
<form id="userForm" onsubmit="saveFormData(event)">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>
    <button type="submit">Save</button>
</form>
<h2>Saved Data</h2>
<p id="savedData"></p>
<h2>Saved Data</h2>
<p id="savedData"></p> */}

function saveFormData(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const userData = {
        name: name,
        email: email
    };
    sessionStorage.setItem('userData', JSON.stringify(userData));

    displaySavedData();
}

function displaySavedData() {
    const jsonString = sessionStorage.getItem('userData');
    if (jsonString) {
        const userData = JSON.parse(jsonString);
        document.getElementById('savedData').textContent = `Name: ${userData.name}, Email: ${userData.email}`;
    } else {
        document.getElementById('savedData').textContent = 'No data found in sessionStorage.';
    }
}
window.onload = displaySavedData;


// Task 8: Write a script to removal an item from sessionStorage. Log the sessionStorage content before and after removal.
function logSessionStorage() {
    console.log("SessionStorage content:");
    for (let i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        console.log(`${key}: ${sessionStorage.getItem(key)}`);
    }
}
sessionStorage.setItem('item1', 'value1');
sessionStorage.setItem('item2', 'value2');
sessionStorage.setItem('item3', 'value3');

console.log("Before removal:");
logSessionStorage();

sessionStorage.removeItem('item2');

console.log("After removal:");
logSessionStorage();

// OUTPUT:
// Before removal:
// SessionStorage content:
// item1: value1
// item2: value2
// item3: value3
// After removal:
// SessionStorage content:
// item1: value1
// item3: value3

// Activity 5: Comparing LocalStoage and SessionStorage
// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function saveToStorages(key, value) {
    localStorage.setItem(key, value);
    console.log(`Value saved to localStorage with key "${key}": ${localStorage.getItem(key)}`);

    sessionStorage.setItem(key, value);
    console.log(`Value saved to sessionStorage with key "${key}": ${sessionStorage.getItem(key)}`);
}

function exampleUsage() {
    const key = 'exampleKey';
    const value = 'exampleValue';
    
    saveToStorages(key, value);
}
exampleUsage();

// OUTPUT:
// Value saved to localStorage with key "exampleKey": "exampleValue"
// Value saved to sessionStorage with key "exampleKey": "exampleValue"


// Task 10: Write a function that clears all data from both localStorage and seesionStorage. Verify that both storage are empty. 
function clearStorages() {
    localStorage.clear();
    console.log('localStorage cleared:', localStorage);
    sessionStorage.clear();
    console.log('sessionStorage cleared:', sessionStorage);
}
function exampleUsage() {
    localStorage.setItem('key1', 'value1');
    sessionStorage.setItem('key2', 'value2');
    
    console.log('Before clearing:');
    console.log('localStorage:', localStorage);
    console.log('sessionStorage:', sessionStorage);

    clearStorages();

    console.log('After clearing:');
    console.log('localStorage:', localStorage);
    console.log('sessionStorage:', sessionStorage);
}
exampleUsage();

// OUTPUT:
// Before clearing:
// localStorage:{
//     key1: value1,
// }
// sessionStorage:{
//     key2: value2,
// }

// After clearing:
// localStorage cleared:
// localStorage:
// sessionStorage cleared:
// sessionStorage: