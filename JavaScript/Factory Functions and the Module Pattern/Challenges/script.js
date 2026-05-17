/*
Challenge 1 — Scope 🟢
*/
/*
let x = 10;

function outer() {
  let x = 20;
  function inner() {
    let x = 30;
    console.log(x);
  }
  inner();
  console.log(x);
}

outer(); // 30 then 20
console.log(x); // 10 
*/

/*
Challenge 2 — Closures 🟢
Write a makeCounter() function that returns a counter object with:

increment() — adds 1
decrement() — subtracts 1
getCount() — returns current count

The count itself should be private.
*/

/*
function makeCounter(){
  let count = 0;
  return {
    increment(){
      count++;
    },
    decrement(){
      count--;
    },
    getCount(){
      return count;
    }
  };
}


const counterA = makeCounter();
const counterB = makeCounter();

counterA.increment();
counterA.increment();
counterB.increment();

console.log(counterA.getCount()); // 2
console.log(counterB.getCount()); // 1
*/


/*
Challenge 3 — Factory Function 🟡
Create a createAnimal(name, sound) factory that returns an object with:

A speak() method that logs "[name] says [sound]!"
A rename(newName) method that updates the name
getName() to read the current name (make name private)
*/

function createAnimal(name, sound){
  return{
    speak(){
     return `${name} says ${sound}`;
    },
    rename(newName){
      name = newName;
    },
    getName(){
      return name;
    }
  };
}

const cow = createAnimal("cow", "Moo!");
console.log(cow.speak());
console.log(cow.getName());  // "cow"
cow.rename("Bessie");
console.log(cow.getName());  // "Bessie"
console.log(cow.speak());    // "Bessie says Moo!"


/*
Challenge 4 — Prototypal Inheritance with Factories 🟡
Create a createVehicle(make, speed) factory, then a createCar(make, speed, numDoors) factory 
that builds on top of createVehicle using Object.assign. The car should have all vehicle properties plus a honk() method.
*/


function createVehicle(make, speed){
  return {
    getMake(){
      return make;
    },
    getSpeed(){
      return speed;
    },
    accelerate(){
      speed++;
    },
    decelerate(){
      speed--;
    }
  };
}

function createCar(make, speed, numDoors){
  const car = createVehicle(make, speed);
  return {
    ...car,
    honk(){
      return `BEEP BEEP!`;
    },
    getDoors(){
      return numDoors();
    },
  };
}


const toyota = new createCar("Toyota", 45, 4);
for(let i =0; i< 10; i++){
  toyota.accelerate();
}
console.log(toyota.getSpeed());
console.log(toyota.honk());



/*
Challenge 5 — Module Pattern 🔴
Build a shoppingCart module using an IIFE. It should:

Keep an items array private
Expose addItem(item, price)
Expose removeItem(item)
Expose getTotal() — returns sum of all prices
Expose listItems() — returns the items array
*/

const shoppingCart = (() =>{
  let items = [];
  return {
    addItems(item, price){
      items.push({item, price});
    },
    removeItem(item){
      for(let i = items.length-1; i>= 0; i--){
        if(items[i].item === item){
          items.splice(i, 1);
          break;
        }
      }
      return items;
    },
    getTotal(){
      let total = 0;
      for(let i =0; i<items.length; i++){
        total+=items[i].price;
      }
      return total;
    },
    listItems(){
      for(let i =0; i<items.length; i++){
        console.log(items[i].item);
      }
    }
  };
})();

shoppingCart.addItems("Pencil", 0.25);
shoppingCart.addItems('Notebook', 5.75);
shoppingCart.removeItem("Pencil");
console.log(shoppingCart.getTotal());
shoppingCart.listItems();


/*
Write a function makeBankAccount(initialBalance) that returns an object with these methods:

deposit(amount) — adds to balance
withdraw(amount) — subtracts from balance, but rejects (does nothing and prints a warning) if the withdrawal would make balance negative
getBalance() — returns the current balance
*/

const makeBankAccount = (initialBalance) =>{
  let balance = initialBalance;
  return{
    deposit(amount){
      balance += amount;
    },
    withdraw(amount){
      if(amount <= balance){
        balance -= amount;
      }
      else{
        console.log("WARNING! CANNOT WITHDRAW THIS AMOUNT!");
      }
    },
    getBalance(){
      return balance;
    }
  };
}

const account = makeBankAccount(100);
console.log(account.getBalance());  // 100
account.deposit(50);
console.log(account.getBalance());  // 150
account.withdraw(30);
console.log(account.getBalance());  // 120
account.withdraw(500);              // should print a warning
console.log(account.getBalance());  // 120 (unchanged)
console.log(account.balance);       // undefined (proves it's private)

// Bonus: prove each account is independent
const account2 = makeBankAccount(0);
account2.deposit(1000);
console.log(account.getBalance());  // still 120
console.log(account2.getBalance()); // 1000

/*
🎯 Challenge 3: Build a Library system with composition
Build two factory functions:
1. createBook(title, author, pages)
Returns an object with:

Public properties: title, author, pages
getStatus() — returns "read" or "unread"
markAsRead() — sets the book's read status to true
A private isRead variable (starts as false)

2. createLibrary()
Returns an object with:

addBook(book) — adds a book object to the library's collection
removeBook(title) — removes a book by title
getBooks() — returns a copy of the collection (not the original array — think about why)
getUnreadBooks() — returns only books where getStatus() === "unread"
A private books array

*/


const createBook = (title, author, pages) =>{
  let isRead = false;
  return{
    title,
    author,
    pages,
    getStatus(){
      if(isRead === true){
        return "read";
      }
      else{
        return "unread";
      }
    },
    markAsRead(){
      isRead = true;
    }
  };
}

const createLibrary = () =>{
  let books = [];
  return{
    addBook(book){ 
      books.push(book);
    },
    removeBook(title){
      for(let i =0; i<books.length; i++){
        if(books[i].title == title){
          books.splice(i, 1);
        }
      }
    },
    getBooks(){
        return books.slice();
    },
    getUnreadBooks(){
      let unreadBooks = []; // if we simply return books[i] it will return the first unread book. We need an array to return filled with unread books
      for(let i =0; i<books.length; i++){
        if(books[i].getStatus() === "unread"){
          unreadBooks.push(books[i]);
        }
      }
      return unreadBooks;
    }
  };
}


const library = createLibrary();

const book1 = createBook("The Hobbit", "Tolkien", 310);
const book2 = createBook("Dune", "Herbert", 688);
const book3 = createBook("1984", "Orwell", 328);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

book1.markAsRead();
book3.markAsRead();

console.log(library.getBooks().length);        // 3
console.log(library.getUnreadBooks().length);  // 1
console.log(library.getUnreadBooks()[0].title); // "Dune"

library.removeBook("Dune");
console.log(library.getBooks().length);        // 2

// Privacy checks
console.log(library.books);    // undefined
console.log(book1.isRead);     // undefined


/*
Use the module pattern (IIFE-wrapped factory) so there's exactly one todoList and the internal state is private.

The todoList object should expose these methods:

addTodo(text) — adds a new todo. Each todo should be an object { id, text, completed }. Auto-generate the id (start at 1, increment each time). Return the new todo.
removeTodo(id) — removes the todo with that id. Return true if found and removed, false otherwise.
toggleTodo(id) — flips the completed status of the todo with that id. Return the updated todo, or null if not found.
getAll() — returns a copy of all todos (remember why from Challenge 3).
getCompleted() — returns a copy containing only completed todos.
getPending() — returns a copy containing only non-completed todos.
getStats() — returns { total, completed, pending }.
clear() — removes all todos. Return the number of todos that were cleared.

Privacy requirements:

The internal todos array must be inaccessible (todoList.todos should be undefined)
The internal id counter must be inaccessible
There should be no way to create a second todoList from outside
*/

const todoList = (() =>{
  let todos = [];
  let id = 1;
  let completed = false;

  return{
    addTodo(text){
      todos.push({id, text, completed});
      id+=1;
      return todos[id-1];
    },
    removeTodo(id){
      for(let i =0; i<todos.length; i++){
        if(todos[i].id === id){
          todos.splice(i, 1);
          return true;
        }
      }
      return false;
    },
    toggleTodo(id){
      for(let i =0; i<todos.length; i++){
        if(todos[i].id === id){
          todos[i].completed = true;
          return todo[i];
        }
      }
      return null;
    },
    getAll: () => [...todos],
    getCompleted(){
      let completed = [];
      for(let i =0; i<todos.length; i++){
        if(todos[i].completed === true){
          completed.push(todos[i]);
        }
      }
      return completed;
    },
    getPending(){
      let pending = [];
      for(let i =0; i<todos.length; i++){
        if(todos[i].completed === false){
          pending.push(todos[i]);
        }
      }
      return pending;
    },
    getStats: () => {
      let total = todos.length;
      let completed =0;
      let pending =0;
      for(let i =0; i<todos.length; i++){
        if(todos[i].completed === true){
          completed+=1;
        }
        else if(todos[i] === false){
          pending+=1;
        }
      }
      return {total, completed, pending};
    },
    clear(){
      let total = getAll().length;
      for(let i =0; i<todos.length; i++){
        todos[i] = null;
      }
      return total;
    }
  };
})();

console.log(todoList.getStats());  // { total: 0, completed: 0, pending: 0 }

const t1 = todoList.addTodo("Learn closures");
const t2 = todoList.addTodo("Learn factories");
const t3 = todoList.addTodo("Learn modules");

console.log(t1);  // { id: 1, text: "Learn closures", completed: false }
console.log(t2.id);  // 2
console.log(t3.id);  // 3

todoList.toggleTodo(1);
todoList.toggleTodo(2);

console.log(todoList.getStats());  // { total: 3, completed: 2, pending: 1 }
console.log(todoList.getPending()[0].text);  // "Learn modules"

const removed = todoList.removeTodo(2);
console.log(removed);  // true
console.log(todoList.removeTodo(999));  // false

console.log(todoList.getStats());  // { total: 2, completed: 1, pending: 1 }

const cleared = todoList.clear();
console.log(cleared);  // 2
console.log(todoList.getStats());  // { total: 0, completed: 0, pending: 0 }

// Privacy checks
console.log(todoList.todos);     // undefined
console.log(todoList.nextId);    // undefined