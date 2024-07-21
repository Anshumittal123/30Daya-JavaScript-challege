// ======================================= Day 9 : DOM Manipulation ======================================

// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by it's ID and Changes it's text content.
const h2Text = document.getElementById('head');
h2Text.innerText = "Day 9: Dom Manipulation";

// Task 2: Select an HTML element by its class and changes its background color.
let changeBGC = document.getElementsByClassName('para');
if(changeBGC.length > 0){
    changeBGC[0].style.backgroundColor = 'lightblue';
} // because it's write html collection. so, we want to access it as an array.


// Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to the body.
const section = document.querySelector('#Container');
const createDivElement = document.createElement('div');
createDivElement.textContent = "This is a new div element appended to the body."

section.append(createDivElement);

// Task 4: Create a new li element and add it to an existing ul list.
const ulContainer = document.querySelector('#lists');
const lists = document.createElement('li');
lists.textContent = "Home";
ulContainer.append(lists);


// Activity 3: Remiving Elements
// Task 5: Select an HTML element and remove it from the DOM.
const removeElement = document.querySelector('.para');
removeElement.remove();

// Task 6: Remove the last child of a specific HTML element.
const container = document.querySelector("#Container");
if(container.lastElementChild){
    container.removeChild(container.lastElementChild);
}

// Activity 4: Modifing Atribues and Classes
// Task 7: Select an HTML element and change one of it's attributes (eg. src of an img tag).
const img = document.querySelector('.img');
img.setAttribute('src', 'https://via.placeholder.com/300');

// Task 8: ADD and remove a css class to / from an HTML element.
const head = document.querySelector('#head');
head.classList.add('head-text');
const remove = document.querySelector('#head');
remove.classList.remove('head-text');


// Activity 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const buttonText = document.querySelector('#btn-1');
buttonText.addEventListener('click', ()=>{
    buttonText.textContent = "Hello Anshu";
});

// Task 10: Add a mouseOver event listener to an element that changes its border color.
const elementBorderColor = document.querySelector('#head');
elementBorderColor.addEventListener('mouseover', ()=>{
    elementBorderColor.style.border = '1px solid gray';
});
