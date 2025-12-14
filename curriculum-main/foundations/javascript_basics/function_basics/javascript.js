/*
Written by: Yasin Zahir
----------------------
*/

// Write a function called add7 that takes one number and returns that number + 7.
// add7(10) should return 17

function add_7(num){
  return num + 7;
}
console.log("Add 7 function with 10 as input: " + add_7(10));

// Write a function called multiply that takes 2 numbers and returns their product.
// multiply(3, 2) should return 6

function multiply(num1, num2){
  return num1 * num2;
}
console.log("Multiply function with 10, 2 as input: " + multiply(10,2));

/* Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. 
Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
capitalize("abcd") should return "Abcd"
capitalize("ABCD") should return "Abcd"
capitalize("aBcD") should return "Abcd"
*/

function capitalize(word){
  word = word.toLowerCase();
  return word.replace(word.charAt(0), word.charAt(0).toUpperCase());

}
console.log(capitalize("yAsIn"));


/*
Write a function called lastLetter that takes a string and returns the very last letter of that string:
lastLetter("abcd") should return "d"
*/

function lastLetter(word){
  return word.charAt(word.length-1);
}

console.log(lastLetter("Yasin"));