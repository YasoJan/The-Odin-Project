/*
Write a constructor for making “Book” objects. 
We will revisit this in the next project. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

Put a function info() into the constructor that can report the book info like so:
*/

/*
function Book(title, author, num_pages, read){
  this.title = title;
  this.author = author;
  this.num_pages = num_pages;
  this.read = read;

  this.info = function (){
    return `Title: ${title}\nAuthor: ${author}\nNumber of pages: ${num_pages}\nRead or not: ${read}`;
  }
}

const harry_potter = new Book("Harry Potter and The Prizoner of Azkaban", "J.K. Rowling", 534, true);

console.log(harry_potter.info());
*/

/*
Prototypal inheritance Exercises
*/

/*
1. Working with prototype
Here’s the code that creates a pair of objects, then modifies them.
Which values are shown in the process?


let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1) --> probably true since thats what rabbit was set to

delete rabbit.jumps; // deletes rabbit property of jumps: true

alert( rabbit.jumps ); // ? (2) // probably now null

delete animal.jumps; // probably now undefined

alert( rabbit.jumps ); // ? (3) // undefined
*/


/*
2. Searching algorithm
Use __proto__ to assign prototypes in a way that any property lookup 
will follow the path: pockets → bed → table → head. 

For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).


let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

Object.setPrototypeOf(pockets, bed);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(table, head);

console.log(pockets.pen);
console.log(bed.glasses);

// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
// In modern engines, performance-wise, there’s no difference whether we take a property from an object or its prototype. 
// They remember where the property was found and reuse it in the next request.

*/

/*
3. Where does it write?

We have rabbit inheriting from animal.

If we call rabbit.eat(), which object receives the full property: animal or rabbit?


let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat(); 

//That’s because this is an object before the dot, so rabbit.eat() modifies rabbit.

//Property lookup and execution are two different things.

//The method rabbit.eat is first found in the prototype, then executed with this=rabbit.

*/


/*
4. Why are both hamsters full?
We have two hamsters: speedy and lazy inheriting from the general hamster object.

When we feed one of them, the other one is also full. Why? How can we fix it?




let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple

*/


/*
Challenge 1 — Basic Constructor
Build a Book constructor. Each book should have title, author, pages, and read (boolean). 
Add an info() method on the prototype (not inside the constructor) that returns a string like:
"The Hobbit by J.R.R. Tolkien, 295 pages, not read yet" or "..." read" depending on the read property.
*/

function Book(title, author, pages, read, location){
  if(!new.target){
    throw Error("Must use new keyword with constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.location = location;
}

Book.prototype.info = function (){
  let readStatus = "";
  if(this.read === true){
    readStatus = "read";
  }
  else {
    readStatus = "not read yet";
  }
  return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus} at ${this.location}`;
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "Shelf A7");
console.log(theHobbit.info());


/*
Challenge 2 — Safeguard It
Add a new.target guard to your Book constructor so calling Book("title", "author", 100, false) without new throws a descriptive error. Test that it works both ways.
*/


/*
Challenge 3 — Prototype Inspection
Without running code first, write down your prediction for each of these, then verify in the browser console:
javascriptObject.getPrototypeOf(theHobbit) === Book.prototype     // ?
Object.getPrototypeOf(Book.prototype) === Object.prototype // ?
theHobbit.hasOwnProperty("title")   // ?
theHobbit.hasOwnProperty("info")    // ?
Understanding why each one is true or false is the goal here.
*/


/*
Challenge 4 — Prototypal Inheritance
Create a LibraryItem constructor that takes a location (e.g. "Shelf A3") and has a prototype method getLocation() that logs "Find me at: Shelf A3". 
Make Book inherit from LibraryItem so that book instances can call both info() and getLocation(). 
Remember: set the prototype chain before creating any instances, and don't use = to assign prototypes.
*/

function LibraryItem(location){
   if(!new.target){
    throw Error("Must use new keyword with constructor");
  }
  this.location = location;
}

LibraryItem.prototype.getLocation = function(){
  return `Find me at: ${this.location}`;
}

Object.setPrototypeOf(Book.prototype, LibraryItem.prototype);
const libItem = new LibraryItem('Shelf A7');

const harryPotter = new Book("Harry Potter & The Chamber of Secrets", "J.K. Rowling", 435, true, "Shelf A19");
console.log(harryPotter.getLocation());
console.log(harryPotter.info());


function Timer(label) {
  this.label = label;
  this.count = 0;
}
Timer.prototype.start = function() {
  setInterval(() => {
    this.count++;
    console.log(this.label + ": " + this.count);
  }, 1000);
};

// This is broken. Run it, observe the problem, explain why this misbehaves inside setInterval, then fix it two different ways (hint: one fix uses an arrow function).

const timmyTime = new Timer("clock");
console.log(timmyTime.start()); // problem is clock is not defined.


/*
SituationWhat this refers toInside a constructor (with new)The new object being createdIn a prototype method called on an instanceThe instance itself
Regular function callGlobal object (or undefined in strict mode)
Arrow functionInherits this from surrounding scope
*/