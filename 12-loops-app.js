// loop is an instruction that repeats until a specific condition is reached.
// same block of code using different values each time

// // FOR LOOP
// for(let i = 0; i <= 10; i++){
//   if(i === 2){
//     console.log('2 is my favorite number');
//     continue; // go to the next iteration in the loop
//   }

//   if(i === 5){
//     console.log('Stop the loop');
//     break; // stops the loop from continuing
//   }
//   console.log('Number ' + i);
// }

// i++ same i = i + 1

// WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// let i = 100;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
cars[1];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]); //logging the array with [i], will produce the values in the array, names, numbers etc.
// }

// FOREACH
// USE FOREACH loops for arrays, arrayname.forEach(anonymousfunction(anything){
  // console.log(anything)
// });
cars.forEach(function(car, index, array) { // function(iterator, index, )
  console.log(`${index} : ${car}`);
  console.log(array);
});

// MAP - used to return a different array
// const users = [
//   {id: 1, name:'John'},
//   {id: 2, name:'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'}
// ];

// // take array, and make an array of the ids of the user
// const ids = users.map(function(user){ // call the new array something, ids, and then use originalarrayname.map to make a new array from it.
//   return user.id;
// });

// console.log(ids);


// FOR IN LOOP
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}
console.clear();