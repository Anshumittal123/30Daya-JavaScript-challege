// ================================== Day 10 : Event Handling ====================================

// Activity 1: Basic Event Handling 
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const btn = document.querySelector('#btn');
const para = document.querySelector('#para')
btn.addEventListener('click', ()=>{
    para.textContent = 'Hello everyone, How are you all?';
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
const myImage = document.getElementById('myImage');
myImage.addEventListener('dblclick', ()=>{
    if(myImage.style.opacity === '0' || myImage.style.opacity === ''){
        myImage.style.opacity = '1';
    }else{
        myImage.style.opacity = '0';
    }
})


// Activity 2: Mouse Events 
// Task 3: Add a mouseover envent listener to an element that changes its background color.
para.addEventListener('mouseover', ()=>{
    para.style.backgroundColor = 'blue';
});

// Task 4: Add a mouseout event listener to an element that changes its background color. 
para.addEventListener('mouseout', ()=>{
    para.style.backgroundColor = 'white';
});


// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console. 
document.querySelector('#textInput').addEventListener('keydown', (event)=>{
    console.log('key pressed: ', event.key);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const textInput2 = document.querySelector('#textInput2');
const para2 = document.querySelector('#para2');
textInput2.addEventListener('keyup', (event)=>{
    para2.textContent = `Current pressed key: ${event.key}`;
});


// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console log.
document.getElementById('formData').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = {};
    
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log("Form Data: ", data);
});


// Task 8: Add a change event listener toa a select dropdown that displays the selected value in a paragraph.
 document.getElementById('myselect').addEventListener('change', function(){
    const selectedValue = this.value;
    document.getElementById('selectedValue').textContent = `Selected value: ${selectedValue}`;
});


// Activity 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
document.getElementById('myList').addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        console.log("Clicked item: ", e.target.textContent);
    }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
function addListItem(){
    const ul = document.getElementById('childList');
    const li = document.createElement('li');
    li.textContent = `Item ${ul.children.length + 1}`;
    ul.appendChild(li);
}

document.getElementById('parentDiv').addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        console.log("Click item:", e.target.textContent);
    }
});

document.getElementById('addButton').addEventListener('click', addListItem);