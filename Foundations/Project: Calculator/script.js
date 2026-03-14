/*
Calculator App
*/

/*
Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, 
so start by creating functions for the following items and testing them in your browser’s console:
*/


//add
function add(num1, num2){
  return num1 + num2;
}

// subtract
function subtract(num1, num2){
  return num1 - num2;
}

//multiply
function multiply(num1, num2){
  return num1 * num2;
}

//divides
function divide(num1, num2){
  return num1/num2;
}



/*
A calculator operation will consist of a number, an operator, and another number. 
For example, 3 + 5. Create three variables, one for each part of the operation. 
You’ll use these variables to update your display later.
*/

let num1 = "0";
let operator = "";
let num2 = "0";
let result = "";


/*
Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.
*/

function operate(num1, operator, num2){
  if(operator === "+"){
    return add(num1, num2);
  }
  else if(operator === "-"){
    return subtract(num1, num2);
  }
  else if(operator === 'x' || operator === "*"){
    return multiply(num1, num2);
  }
  else if(operator === "÷" || operator === "/"){
    return divide(num1, num2);
  }
}
//Create the functions that update one of your number variables when the calculator’s digit buttons are clicked. 
// Your calculator’s display should also update to reflect the value of that number variable.
const visual = document.querySelector(".visual");
const ac = document.querySelector(".ac");
ac.addEventListener("click", ()=>{
  num1 = "0";
  num2 = "0";
  operator = "";
  visual.textContent = 0;
  });

const negate = document.querySelector(".negate");
negate.addEventListener("click", ()=>{
  if(num1 === "0" && num2 === "0"){
    return;
  }
  else if(num1 !== "0"){
    num1 = 0-num1;
    visual.textContent = num1;
  }
  else{
    num2 = 0-num2;
    visual.textContent = num2;
  }
  
});

const percent = document.querySelector(".percent");
percent.addEventListener("click", () =>{
  if(num1 === "0" && num2 === "0"){
    return;
  }
  else if(num1 !== "0"){
    num1 = num1/100;
    visual.textContent = num1;
  }
  else{
    num2 = num2/100;
    visual.textContent = num2;
  }
});

const division = document.querySelector(".division");
division.addEventListener("click", () =>{
  if(operator!= ""){
    if(operator === "/"){
      if(num2 === 0){
        alert("ERROR! DIVISION BY ZERO");
        return;
      }
    }
    result = operate(num1, operator, num2);
    num1 = result;
    num2 = "0";
    operator = "";
    visual.textContent = num1;
  }
  operator = "/";
});

const seven = document.querySelector(".seven");
seven.addEventListener("click", () =>{
  if(operator !== ""){
    num2 = num2.toString();
    num2+="7";
    if(num2.includes(".")){
      num2 = parseFloat(num2);
    }
    else{
      num2 = parseInt(num2);
    }
    visual.textContent = num2;
  }
  else{
    num1 = num1.toString();
    num1+="7";
    if(num1.includes(".")){
      num1 = parseFloat(num1);
    }
    else{
      num1 = parseInt(num1);
    }
    visual.textContent = num1;
  }
});

const eight = document.querySelector(".eight");
eight.addEventListener("click", () =>{
  if(operator !== ""){
    num2 = num2.toString();
    num2+="8";
    if(num2.includes(".")){
      num2 = parseFloat(num2);
    }
    else{
      num2 = parseInt(num2);
    }
    visual.textContent = num2;
  }
  else{
    num1 = num1.toString();
    num1+="8";
    if(num1.includes(".")){
      num1 = parseFloat(num1);
    }
    else{
      num1 = parseInt(num1);
    }
    visual.textContent = num1;
  }
});

const nine = document.querySelector(".nine");
nine.addEventListener("click", () =>{
  if(operator !== ""){
    num2 = num2.toString();
    num2+="9";
    if(num2.includes(".")){
      num2 = parseFloat(num2);
    }
    else{
      num2 = parseInt(num2);
    }
    visual.textContent = num2;
  }
  else{
    num1 = num1.toString();
    num1+="9";
    if(num1.includes(".")){
      num1 = parseFloat(num1);
    }
    else{
      num1 = parseInt(num1);
    }
    visual.textContent = num1;
  }
});

const multiplication = document.querySelector(".multiplication");
multiplication.addEventListener("click", () =>{
  if(operator!= ""){
    if(operator === "/"){
      if(num2 === 0){
        alert("ERROR! DIVISION BY ZERO");
      }
    }
    result = operate(num1, operator, num2);
    num1 = result;
    num2 = "0";
    operator = "";
    visual.textContent = num1;
  }
  operator = "*";
});

const four = document.querySelector(".four");
four.addEventListener("click", () =>{
  if(operator !== ""){
    num2 = num2.toString();
    num2+="4";
    if(num2.includes(".")){
      num2 = parseFloat(num2);
    }
    else{
      num2 = parseInt(num2);
    }
    visual.textContent = num2;
  }
  else{
    num1 = num1.toString();
    num1+="4";
    if(num1.includes(".")){
      num1 = parseFloat(num1);
    }
    else{
      num1 = parseInt(num1);
    }
    visual.textContent = num1;
  }
});

const five = document.querySelector(".five");
five.addEventListener("click", () =>{
  if(operator !== ""){
    num2 = num2.toString();
    num2+="5";
    if(num2.includes(".")){
      num2 = parseFloat(num2);
    }
    else{
      num2 = parseInt(num2);
    }
    visual.textContent = num2;
  }
  else{
    num1 = num1.toString();
    num1+="5";
    if(num1.includes(".")){
      num1 = parseFloat(num1);
    }
    else{
      num1 = parseInt(num1);
    }
    visual.textContent = num1;
  }
});

const six = document.querySelector(".six");
six.addEventListener("click", () =>{
  if(operator !== ""){
    num2 = num2.toString();
    num2+="6";
    if(num2.includes(".")){
      num2 = parseFloat(num2);
    }
    else{
      num2 = parseInt(num2);
    }
    visual.textContent = num2;
  }
  else{
    num1 = num1.toString();
    num1+="6";
    if(num1.includes(".")){
      num1 = parseFloat(num1);
    }
    else{
      num1 = parseInt(num1);
    }
    visual.textContent = num1;
  }
});



const subtraction = document.querySelector(".subtraction");
subtraction.addEventListener("click", () =>{
  if(operator!= ""){
    if(operator === "/"){
      if(num2 === 0){
        alert("ERROR! DIVISION BY ZERO");
      }
    }
    result = operate(num1, operator, num2);
    num1 = result;
    num2 = "0";
    operator = "";
    visual.textContent = num1;
  }
  operator = "-";

});

const one = document.querySelector(".one");
one.addEventListener("click", () =>{
  if(operator !== ""){
    num2 = num2.toString();
    num2+="1";
    if(num2.includes(".")){
      num2 = parseFloat(num2);
    }
    else{
      num2 = parseInt(num2);
    }
    visual.textContent = num2;
  }
  else{
    num1 = num1.toString();
    num1+="1";
    if(num1.includes(".")){
      num1 = parseFloat(num1);
    }
    else{
      num1 = parseInt(num1);
    }
    visual.textContent = num1;
  }
});

const two = document.querySelector(".two");
two.addEventListener("click", () =>{
  if(operator !== ""){
    num2 = num2.toString();
    num2+="2";
    if(num2.includes(".")){
      num2 = parseFloat(num2);
    }
    else{
      num2 = parseInt(num2);
    }
    visual.textContent = num2;
  }
  else{
    num1 = num1.toString();
    num1+="2";
    if(num1.includes(".")){
      num1 = parseFloat(num1);
    }
    else{
      num1 = parseInt(num1);
    }
    visual.textContent = num1;
  }
});

const three = document.querySelector(".three");
three.addEventListener("click", () =>{
  if(operator !== ""){
    num2 = num2.toString();
    num2+="3";
    if(num2.includes(".")){
      num2 = parseFloat(num2);
    }
    else{
      num2 = parseInt(num2);
    }
    visual.textContent = num2;
  }
  else{
    num1 = num1.toString();
    num1+="3";
    if(num1.includes(".")){
      num1 = parseFloat(num1);
    }
    else{
      num1 = parseInt(num1);
    }
    visual.textContent = num1;
  }
});


const addition = document.querySelector(".addition");
addition.addEventListener("click", () =>{
    if(operator!= ""){
    if(operator === "/"){
      if(num2 === 0){
        alert("ERROR! DIVISION BY ZERO");
      }
    }
    result = operate(num1, operator, num2);
    num1 = result;
    num2 = "0";
    operator = "";
    visual.textContent = num1;
  }
  operator = "+";
});

const zero = document.querySelector(".zero");
zero.addEventListener("click", () =>{
  if(operator !== ""){
    num2 = num2.toString();
    num2+="0";
    if(num2.includes(".")){
      num2 = parseFloat(num2);
    }
    else{
      num2 = parseInt(num2);
    }
    visual.textContent = num2;
  }
  else{
    num1 = num1.toString();
    num1+="0";
    if(num1.includes(".")){
      num1 = parseFloat(num1);
    }
    else{
      num1 = parseInt(num1);
    }
    visual.textContent = num1;
  }
});
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () =>{
  function isFloat(n) {
    return n === +n && n !== (n|0);
  }
  if(operator !== ""){
    if(!isFloat(num2)){
      num2 = num2.toString();
      num2+=".";
      visual.textContent = num2;
    }
  }
  else{
    if(!isFloat(num1)){
      num1 = num1.toString();
      num1+=".";
      visual.textContent = num1;
    }
  }
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () =>{
  if(num1 != 0 && num2!=0 && operator!== ""){
    result = operate(num1, operator, num2);
    num1 = result;
    num2 = "0";
    operator = "";
    visual.textContent = num1;
  }
});









/*
Logic

operations():
  if an operation has already been executed
    find the total of the two number
    reset both numbers
  otherwise


number buttons()

*/