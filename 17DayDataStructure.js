// ========================================= Day 17: Data Structures ======================================

// Activity 1: Linked List
// Task 1: Implement a node class to represent an element in a linked list with properties value and next.
class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Task 2: Implement a linkedlist class with methods to add a node to the end, remove a node from the end, and display all node.
class LinkedList{
    constructor(){
        this.head = null;
    }

    addNode(value){
        const newNode = new node(value);

        if(this.head === null){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeNode(){
        if(this.head === null){
            console.log("The list is empty.");
            return;
        }

        if(this.head.next === null){
            this.head = null;
        }else{
            let current = this.head;
            while(current.next.next !== null){
                current = current.next;
            }
            current.next = null;
        }
    }

    displayNode(){
        if(this.head === null){
            console.log("The list is empty.");
            return
        }

        let current = this.head;
        while(current != null){
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new LinkedList();

list.addNode(1);
list.addNode(2);
list.addNode(3);

console.log("Nodes in the list is: ");
list.displayNode();

list.removeNode();

console.log("Nodes in the list after removing a node:");
list.displayNode();

// OUTPUT:
// Nodes in the list is: 
// 1
// 2
// 3
// Nodes in the list after removing a node:
// 1
// 2


// Activity 2: Stack
// Task 3: Implement a stack class with methods push(add element), pop(remove element), and peek(view the top element).
class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return null;
        }
        return this.items.pop();
    }

    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty.");
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    display(){
        console.log("Stack Elements:", this.items.join(','));
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.display();

console.log("Top Element: ", stack.peek());
console.log("Popped element: ", stack.pop());

// Task 4: Use the stack class to reverse a string by pushing all characters onto the stack and then pooping them off.
function reverseString(str){
    const stack = new Stack();
    let reversedStr = '';

    for(let char of str){
        stack.push(char);
    }

    while(!stack.isEmpty()){
        reversedStr +=stack.pop();
    }

    return reversedStr;
}

const originalString = "Hello World";
const reversedString = reverseString(originalString);

console.log(`Original String: ${originalString}`);
console.log(`Reversed String: ${reversedString}`);

// OUTPUT:
// Task 3:
// Stack Elements: 1,2,3,4
// Top Element:  4
// Popped element:  4

// Task 4:
// Original String: Hello World
// Reversed String: dlroW olleH


// Activity 3: Queue
// Task 5: Implement a queue class with methods enqueue(add element), dequeue(remove element), and front(view the first element).
class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty.");
            return null;
        }
        return this.items.shift();
    }

    front(){
        if(this.isEmpty()){
            console.log("Queue is empty.");
            return null;
        }
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    display(){
        console.log("Queue elements: ", this.items.join(", "));
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log("Front element: ", queue.front());
console.log("Dequeueed element:", queue.dequeue());
console.log("Front element after dequeue:", queue.front());

queue.display();

// OUTPUT:
// Task 5:
// Front element:  1
// Dequeueed element: 1
// Front element after dequeue: 2
// Queue elements:  2, 3, 4

// Task 6: Use the Queue class to simple printer queue where print jobs are added to the queue and processed in order.
class PrinterQueue{
    constructor(){
        this.queue =new Queue();
    }

    addJob(job){
        this.queue.enqueue(job);
        console.log(`Added job: ${job}`);
    }

    processJob(){
        if(this.queue.isEmpty()){
            console.log("No print job to process.");
        }else{
            const job = this.queue.dequeue();
            console.log(`Processing job: ${job}`);
        }
    }

    viewNextJob(){
        const job = this.queue.front();
        if(job){
            console.log(`Next job: ${job}`);
        }
    }

    displayJob(){
        this.queue.display();
    }
}

const printerQueue = new PrinterQueue();

printerQueue.addJob("Print document 1");
printerQueue.addJob("Print document 2");
printerQueue.addJob("Print document 3");

printerQueue.displayJob();
printerQueue.viewNextJob();

printerQueue.processJob();
printerQueue.processJob();
printerQueue.displayJob();


// OUTPUT:
// Task 6:
// Added job: Print document 1
// Added job: Print document 2
// Added job: Print document 3
// Queue elements:  Print document 1, Print document 2, Print document 3
// Next job: Print document 1
// Processing job: Print document 1
// Processing job: Print document 2
// Queue elements:  Print document 3


// Activity 4: Binary Tree
// Task 7: Implement a treeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Task 8: Implement a binaryTree class with methods for inserting values and performing in order traversal to display nodes.
class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new TreeNode(value);
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode){
        if(newNode.value < node.value){
            if(node.left === null){
                node.left = newNode;
            }else{
                this.insertNode(node.left, newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node = this.root){
        if(node !== null){
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

console.log('In-order Traversal:');
tree.inOrderTraversal();


// OUTPUT:
// Task 8:
// In-order Traversal:
// 3
// 5
// 7
// 10
// 12
// 15