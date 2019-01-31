// Arrays are not immutable, they can be modifiec

// Create some arrays
const numbers = [43,56,33,23,44,36,5]; // 1 way is literally make an array within brackets
const numbers2 = new Array(22,45,33,76,54); // 2nd way is to use new Array constructor function
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

// console.log(mixed);

let val;
// mutate the variable to show different things and console.log it

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value from array
val = numbers[3]; // arrays are zero-based, so first value is 0, 2nd value is 1, etc
val = numbers[0];
// Insert into array
numbers[2] = 100; //simply add number value in that index slot of array
// Find index of value
val = numbers.indexOf(36); // shows index value of target

// MUTATING ARRAYS
// Add on to end of array
// numbers.push(250);
// // Add on to front of array
// numbers.unshift(120);
// // Take off from end
// numbers.pop(); // like popping off the top of a bottle, last value gets removed
// //Take off from front
// numbers.shift();
// //  Splice values
// numbers.splice(1,3); // put where we want to start to remove and where we want to end
// // Reverse an array order
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2); // adds on another array

// Sorting arrays
val = fruit.sort(); // alphabetical orderr
// val = numbers.sort();

// Use the "compare function"
// val = numbers.sort(function(x, y){ 
//   return x - y; //            ascending
// }); // lowest to highest

// // Reverse sort
// val = numbers.sort(function(x, y){
//   return y - x; //            descending
// });

// Find
function over50(num){
    return num > 50;
}

val = numbers.find(over50); // displays first value to match the fxn condition

console.log(numbers);
console.log(val);