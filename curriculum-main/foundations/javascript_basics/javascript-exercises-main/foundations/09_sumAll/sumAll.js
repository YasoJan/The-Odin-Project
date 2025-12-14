const sumAll = function(num1, num2) {
  let total = 0;
  for(let i = num1; i<=num2; i++){
    total+=i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(1, 4)); // returns the sum of 1 + 2 + 3 + 4 which is 10)