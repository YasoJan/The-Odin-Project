/*
1. Translate border-left-width to borderLeftWidth

Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.
*/

function camelize(str){
  str = str.split('');
  for(let i =0; i<str.length; i++){
    if(str[i-1] == '-'){
      str[i] = str[i].toUpperCase();
      str[i-1] = '';
    }
  }
  return str.join("");
}

// console.log(camelize("my-short-string"));

/*
2. Filter range
Write a function filterRange(arr, a, b) that gets an array arr, 
looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array
*/

function filterRange(arr, a, b){
  vector = [];
  for(let i = 0; i<arr.length; i++){
    if(arr[i] >= a && arr[i] <=b){
      vector.push(arr[i]);
    }
  }
  return vector;
}
/*
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)
*/

/*
3. Filter range "in place"
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values 
except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.
*/

function filterRangeInPlace(arr, a, b){
  for(let i = 0; i<arr.length; i++){
    if(arr[i] < a || arr[i] >b){
      delete arr[i];
    }
  }
}

/*
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert(arr); // [3, 1]
*/


/*
4. Sort in decreasing order
*/



function sortDecreasing(arr){
  return arr.sort(function(a, b){return b - a});
}

/*

let arr = [5, 2, 1, -10, 8];
alert(sortDecreasing(arr)); // 8, 5, 2, 1, -10

/*

/*
5. Copy and sort array
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.
*/

function copySorted(arr){
  return arr.sort();
}

/*
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/

/*
6. Shuffle an array
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
Multiple runs of shuffle may lead to different orders of elements. For instance:
*/

function shuffle(array){
  for(let i =array.length-1; i > 0; i--){
    let j = arr[Math.floor(Math.random() * array.length+1)];
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  } 
  return array;
}
/*
let arr = [1, 2, 3];

console.log(shuffle(arr));
// arr = [3, 2, 1]

console.log(shuffle(arr));
// arr = [2, 1, 3]

console.log(shuffle(arr));
// arr = [3, 1, 2]
// ...

*/

/*
7. Filter unique array members
Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.
*/

function unique(arr){
  return [...new Set(arr)];
}

/*
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
*/