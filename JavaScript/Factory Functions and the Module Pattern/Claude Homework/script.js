/*
Write
createPerson(name, age)
that returns an object with a
greet()
method
*/

function createPerson(name, age){
  return{
    greet(){
      return `Hello! my name is ${name}, and I'm ${age} years old!`;
    }
  };
}

/*
Write
createRectangle(w, h)
that returns
area()
and
perimeter()
methods
*/

function createRectangle(w, h){
  return {
    area(){
      return w * h;
    },
    perimeter(){
      return 2*w + 2*h;
    }
  };
}
/*
Write
createCounter()
returning
increment()
,
decrement()
, and
value()
*/

function createCounter(){
  let count = 0;
  return {
    increment(){
      count++;
    },
    decrement(){
      count--;
    },
    value(){
      return count;
    }
  };
}

/*
Build
createBankAccount(balance)
with private
balance
, public
deposit/withdraw/getBalance
*/

function createBankAccount(balance){
  let b = balance;

  return{
    deposit(amount){
      b+=amount;
    },
    withdraw(amount){
      b-=amount;
    },
    getBalance(){
      return b;
    }
  };
}

/*
Build
createStack()
— a proper stack with private internal array; expose only
push
,
pop
,
peek
,
size
*/

function createStack(){
  let arr = [];
  return{
    push(element){
      arr.push(element);
    },
    pop(element){
      arr.pop(element);
    },
    size(){
      return arr.length;
    }
  };
}

/*
Build
createRateLimiter(maxCalls, perSeconds)
*/

function createRateLimiter(maxCalls, perSeconds){
  return function wrapped(){
    if(perSeconds > maxCalls){
      return false;
    }
    else{
      return true;
    }
  };
}

/*
Write
makeAdder(x)
that returns a function which adds
x
to any number passed to it.
*/

function makeAdder(x){
  return function(num){
    return x + num;
  };
}

/*
Write
makeCounter(start)
— returns a function. Each call returns the next number from
start
upward. No object, just a function returning a function.
*/

function makeCounter(start){
  return function(){
    return start++;
  };
}

/*
Write
makeGreeting(greeting)
that returns a function taking a name and returning e.g.
"Hello, Alice!"
. Create
sayHi
and
sayBye
from it.
*/

function makeGreeting(greeting){
  return function(name){
    return `Hello, ${name}! ${greeting}`;
  };
}

let sayHi = makeGreeting("Good day to you sir!");
let greetyasin = sayHi("Yasin");

let sayBye = makeGreeting("And a good night to you, lad!");
let byeYasin = sayBye("Yasin");



/*
Level 3
Task 1
Build createUser(name) with private reputation. Expose getReputation() and giveReputation() — but not takeReputation(). Verify user.reputation is undefined.
*/


function createUser(name){
  let reputation = 0;
  function takeReputation(){
    return reputation--;
  }
  return{
    getReputation(){
      return reputation;
    },
    giveReputation(){
      return reputation++;
    }
  };

}
let yasin = createUser("Yasin");
console.log(yasin.reputation); // log states undefined - privacy achieved


/*
Task 2
Build createTrafficLight() with private state "red", "green", or "amber". Expose only next() (cycles the light) and getState(). No direct state access from outside.
*/


function createTrafficLight(){
  let state = "red";
  return {
    getState(){
      return state;
    },
    next(){
      if(state === "red"){
        state = "green";
      }
      else if(state === "green"){
        state = "amber";
      }
      else{
        state = "red";
      }
      return state;
    }
  };
}

/*
Task 3
Explain in comments: what would break if you put reputation directly on the returned object instead of keeping it private?
*/

/*
Answer: You would make it a public variable and that would create a larger possibility for side effects where someone can unintentionally alter the variable. 
*/


/*
Task 1
Build createVehicle(make, speed) with a describe() method that returns "This is a [make] going [speed]mph". 
Then build createMotorbike(make) that inherits from it using Pattern A (destructuring), hardcodes the speed at 150, and adds a wheelie() method that returns "Doing a wheelie!".
*/

function createVehicle(make, speed){
  return {
    describe(){
      return `This is a ${make} going ${speed} mph`;
    }
  };
}

function createMotorbike(make){
  const vehicle = createVehicle(make, 150);
  return{
    describe: vehicle.describe,
    wheelie(){
      return "Doing a wheelie!";
    }
  };
}


/*
Task 2
Build createCharacter(name, hp) with getHealth() and takeDamage(amount) methods. 
Then build createWarrior(name) that inherits from it using Pattern B (Object.assign), 
and adds a shield() method that returns "${name} blocks the attack!". 
Write a comment on which pattern you preferred between Task 1 and Task 2 and why.
*/

function createCharacter(name, hp){
  return{
    getHealth(){
      return hp;
    },
    takeDamage(amount){
      hp-=amount;
    }
  };
}

function createWarrior(name){
  const character = createCharacter("Dhul Qarnayn", 100);
  return Object.assign({}, character, { shield() {return `${name} blocks the attack!`} });
}

// I prefered the pattern A because it feels more intuitive, pattern B feels like a shortcut that relies on memorization for me to be honest.


/*
Task 3
Build createModerator(name) that inherits from the createUser(name) you wrote in Level 3 — without looking at the example I showed you. 
Add a private warningCount variable starting at 0, and expose issueWarning() (increments it) and getWarningCount(). Verify that mod.warningCount is undefined.
*/

function createModerator(name){
  const moderator = createUser("Moderator");
  let warningCount = 0;
  return Object.assign({}, moderator, { issueWarning() {warningCount++}, getWarningCount() {return warningCount} });
}

const mod = createModerator("moderator");
console.log(mod.warningCount); // can say that this is undefined :)


/*
Task 1
Build a calculator module using an IIFE. It should have a private lastResult variable. 
Expose add(a, b), subtract(a, b), multiply(a, b), divide(a, b), and getLastResult(). 
Each operation should update lastResult. Verify that calculator.lastResult is undefined.
*/



const calculator = (() =>{
  //private stuff
  let lastResult = 0;

  return{
    add(a,b){
      lastResult = a+b;
      return a + b;
    },
    subtract(a,b){
      lastResult = a-b;
      return a-b;
    },
    multiply(a,b){
      lastResult = a*b;
      return a*b;
    },
    divide(a,b){
      lastResult = a/b;
      return a/b;
    },
    getLastResult(){
      return lastResult;
    }
  };
})();

console.log(`Calculator.lastResult = ${calculator.lastResult}`); // undefined! Success!

/*
Task 2
Build a gameState module using an IIFE. It should have private score and level variables. 
Expose addPoints(n) (adds n to score), levelUp() (increments level), and getState() which returns both values as an object like { score: 0, level: 1 }.
No direct mutation from outside.
*/

const gameState = (()=>{
  //private stuff
  let score = 0;
  let level = 0;
  return{
    addPoints(n){
      return score+=n; 
    },
    levelUp(){
      return ++level; //Deliberately pre-fix increment level so the returned value reflects the immediate changes.
    },
    getState(){
      return {score, level};
    }
  };
})();


/*
Task 3
Write a comment block answering this question: when would you choose an IIFE module over a regular factory function that you call once? What's the practical difference?
*/

//Answer: I would choose an IIFE module over a regular factory function that I call once because I need ONE instance of something, not many.


/*
Master blindspots
Task 1 — Predict the output
Without running it, write down what each of these returns. Then verify in the console and write a comment explaining the rule.
*/
 
function a() { 2 + 2 } // probably returns undefined because it computes and doesn't store the result in a binding.
function b() { return 2 + 2 } // returns 4;
const c = () => 2 + 2 //doesn't return anything (undefined) --> oops I was wrong it returns 4, i guess because its a one liner arrow function return statement that doesn't need a return statement
const d = () => { 2 + 2 } // doesn't return anything at all (undefined).

console.log(`function a should return undefined: ${a()}`);
console.log(`function b should return '4': ${b()}`);
console.log(`function c should return undefined: ${c()}`);
console.log(`function d should return undefined: ${d()}`);


/*
Task 2 — Write 5 explicit return functions
Write 5 functions that each compute something different. 
Every single one must use curly braces { } with an explicit return statement — 
no arrow function implicit return shortcuts. Suggestions: multiply two numbers, reverse a string, 
find the max of two numbers, check if a number is even, convert celsius to fahrenheit.
*/


function multiply(a, b){
  return a * b;
}

function reverseString(str){
  let newStr = "";
  for(let i = str.length-1; i>=0; i--){
    newStr+=str[i];
  }
  return newStr;
}

console.log(`The reverse of Hi is not bye but: ${reverseString("Hi")}`);

function max(a, b){
  return Math.max(a, b);
}

function isEven(num){
  if(num%2 === 0){
    return true;
  }
  else{
    return false;
  }
}

function celsiusToFarenheit(num){
  return num * 1.8 + 32;
}

console.log(`The maximum between 5 and 10 is: ${max(5, 10)}`);

function double(n) { return n * 2 } //missing return

function greet(name) { return `Hello ${name}` }//only one with return

function isAdult(age) { return age >= 18 }//missing return

function addTax(price) { return price * 1.2 }//missing return

console.log(double(5));
console.log(greet("Yasin"));
console.log(isAdult(28));
console.log(addTax(53));



/*
Task 1 — Build two communicating IIFEs
Build two IIFE modules that talk to each other through public methods only.

inventory should have a private items array and expose two methods: 
addItem(item) which pushes an item into the array, and getItems() which returns the full array.

display should have no internal state at all. It exposes one method: 
showItems() which calls inventory.getItems() and logs each item to the console. It must never touch items directly.
*/

const inventory = (()=>{
  let arr = [];
  return{
    addItem(item){
      arr.push(item);
    },
    getItems(){
      return arr;
    }
  };
})();

const display = (()=>{
  return{
    showItems(){
      for(let i =0; i<inventory.getItems().length; i++){
        console.log(inventory.getItems()[i]);
      }
    }
  };
})();


/*
Task 2 — Break it deliberately
Write a second broken version where display tries to access inventory's private items array directly without going through getItems(). 
Run it, observe what happens, and write a comment explaining exactly why it fails.
*/


// didnt need to run it and test it out, I already know accessing private methods directly outside an IIFE leads to undefined.


/*
Task 3 — Add a third IIFE
Add a search IIFE with one method: find(query) which calls inventory.getItems(), 
filters the results to only items that include the query string, and returns the matches. 
It must never touch the private items array directly — only go through the public interface.
*/

const search = (()=>{
  return{
    find(query){
      let matches = [];
      for(let i =0; i<inventory.getItems().length; i++){
        if(inventory.getItems()[i].includes(query)){
          matches.push(inventory.getItems()[i]);
        }
      }
      return matches;
    }
  };
})();

inventory.addItem("apple");
inventory.addItem("banana");
inventory.addItem("apricot");
console.log(search.find("ap")); // should return ["apple", "apricot"]

