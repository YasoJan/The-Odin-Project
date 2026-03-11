/*
1. Map to names

You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
*/

function mapToNames(){
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  let users = [ john, pete, mary ];
  let names = [];
  for(let i =0; i< users.length; i++){
    names.push(users[i].name);
  }

  alert( names ); // John, Pete, Mary
}

// console.log(mapToNames());

/*
2. Map to objects

You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, 
of objects with id and fullName, where fullName is generated from name and surname.
*/

function mapToObjects(){
  let john = { name: "John", surname: "Smith", id: 1 };
  let pete = { name: "Pete", surname: "Hunt", id: 2 };
  let mary = { name: "Mary", surname: "Key", id: 3 };

  let users = [ john, pete, mary ];

  let usersMapped = [];

  for(let i =0; i<users.length; i++){
    usersMapped.push({fullName: users[i].name + " " + users[i].surname, id: users[i].id});
  }

  /*
  usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
  ]
  */

  alert( usersMapped[0].id ) // 1
  alert( usersMapped[0].fullName ) // John Smith
}

// console.log(mapToObjects());

/*
3. Sort users by age
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
*/

function sortByAge(){
  let arr = [ pete, john, mary ];
  arr.sort((a,b) => a.age - b.age);
}


  /*
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  // now: [john, mary, pete]
  alert(arr[0].name); // John
  alert(arr[1].name); // Mary
  alert(arr[2].name); // Pete

  */


  /*
  4. Get average age
  Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

  The formula for the average is (age1 + age2 + ... + ageN) / N.
  */

  function getAverageAge(users){
    let total = 0;
    for(let i =0; i<users.length; i++){
      total+=users[i].age;
    }
    return total/users.length;
  }
/*
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };

  let arr = [ john, pete, mary ];

  alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

*/


/*
5. Create keyed object from array
Let’s say we received an array of users in the form {id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

For example:
*/

  function groupById(arr){
    return arr.reduce((result, curr_obj) => {
      result[curr_obj.id] = curr_obj;
      return result;
     // return curr_obj.id + ": " + {"id": curr_obj.id,  "name": curr_obj.name, "age": curr_obj.age};
    }, {});
    
  }

  let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

  let usersById = groupById(users);
  console.log(usersById);
  /*
  // after the call we should have:

  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */ 

  //TODO use reduce()

  // array.reduce((accumulator, currentValue) => {}, initialValue)

