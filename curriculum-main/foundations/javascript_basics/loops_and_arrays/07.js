/*
Written By: Yasin Zahir
-----------------------

Filter unique array members
importance: 4
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

*/

function unique(arr){
  let unique_arr = [arr[0]];
  for(let i =1; i<arr.length; i++){
    if(unique_arr.includes(arr[i]) == false){
      unique_arr.push(arr[i]);
    }
  }
  return unique_arr;
}

console.log(unique(["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"]));