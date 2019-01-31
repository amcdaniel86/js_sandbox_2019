// if statements used to evaluate a condition

// if(something){
//   do something
// } else {
//   do something else
// }

// ASSIGNING =
const id = 100; // single = means assigning id to 100.

// // EQUAL TO ==
// if(id == 100){ // double = means COMPARING 100 to id, tests value only, NOT type.
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }
// // will run without an else part, if id == different than id = above the if statement.

// // NOT EQUAL TO !=
// if(id != 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE === (usually correct when in doubt)
// if(id === 100){ // double = means COMPARING 100 to id, tests value only, NOT type.
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO VALUE & TYPE
// if(id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test if undefined
// if(typeof id !== 'undefined'){ // to test if a value exists or not, this is how to type it. use typeof value !== 'undefined', if you just put id it'll throw an error
//   console.log(`The ID is ${id}`)
// } else {
//   console.log('NO ID');
// }

// GREATER OR LESS THAN
// if(id <= 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE

// const color = 'yellow';

// if(color === 'red'){
//   console.log('color is red');
// } else if(color === 'blue'){
//   console.log('color is blue');
// } else { // ends the else ifs, last option
//   console.log('color is not red or blue');
// }

// LOGICAL OPERATORS

const name = 'Steve';
const age = 80;

// AND &&
if(age > 0 && age < 12){ // ampersand && means both NEED to be true
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR ? (if true, then output), : (if false, else, then output)
console.log(id === 100 ? 'CORRECT' : 'INCORRECT'); // ternary is if yes ? 'CORRECT' it not : 'INCORRECT'

// WITHOUT CURLY BRACES
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');

  // SWITCHES
// switches good if there are MANY, MANY cases for a situation, rather than an if/else
  const color = 'red';

  switch(color){
    case 'red':
      console.log('Color is red');
      break;
    case 'blue':
      console.log('Color is blue');
      break;
    default:
      console.log('Color is not red or blue');
  }


  let day;

  switch(new Date().getDay()){
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
  }

  console.log(`Today is ${day}`)