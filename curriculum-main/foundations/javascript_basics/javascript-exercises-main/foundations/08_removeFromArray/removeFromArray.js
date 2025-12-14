const removeFromArray = function(arr, num) {
  let new_arr = [];
  for(let i =0; i<arr.length; i++){
    if(arr[i] != num){
      new_arr.push(arr[i]);
    }
  }
  return new_arr;
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // should remove 3 and return [1,2,4]
// Do not edit below this line
module.exports = removeFromArray;
