/*
Create a function outer and within it set a variable outerVar equal to "Hey I am the outer var".

Now inside of that, make another function called inner() and within it declare the following variable 👇

*/

function outer(){
  let outerVar = "Hey I am the outer var";
  function inner(){
    const innerVar = "Hey I am an inner var";
    console.log(innerVar);
    console.log(outerVar);
  }
  return inner;
}

