const reverseString = function(str) {
  let text = str.split("");
  return text.reverse().join("");
};

console.log(reverseString('hello there')); // returns 'ereht olleh'
// Do not edit below this line
module.exports = reverseString;
