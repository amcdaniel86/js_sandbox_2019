const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
// math is object, has properties and methods.
// properties are attributes, methods are functions within a function
val = Math.PI;
val = Math.E;
val = Math.round(2.4); // natural rounding
val = Math.ceil(2.4); //rounds up no matter what
val = Math.floor(2.8); // rounds down no matter what
val = Math.sqrt(64); //square root of number
val = Math.abs(-3); // makes positive
val = Math.pow(8, 2); // a to the power of b
val = Math.min(2,33,4,1,55,6,-2,3); // returns lowest number
val = Math.max(2,33,4,1,55,6,-2,3); // returns highest number
val = Math.random(); // produces random decimal number

val = Math.random() * 20 + 1; // 20 max number we want, produces random between 0 and 19.99, + 1 includes the max number.
// to round use Math.floor
val = Math.floor(Math.random() * 20 + 1); // produces random number between 0 and 20



console.log(val);