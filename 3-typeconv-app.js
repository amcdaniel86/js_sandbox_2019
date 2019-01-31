let val;

// Number to string
val = String(555);
// without string before, the value is strictly a number
val = String(4+4);
// converting number to string, js takes expression and returns the answer
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();
// Two methods to convert data types - String(datatype, 5, true, date)
// OR (5).toString(), (true).toString()

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

// 2nd method
val = parseInt('100.3');
val = parseFloat('100.30');
// parseFloat used for decimals





// Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// // .length only works on strings, number of characters in a string
// console.log(val.toFixed(2));
// // .toFixed, in () # of decimals, ONLY works on numbers so must change above

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);
// concatenated when one number was a string, but not the other

console.log(sum);
console.log(typeof sum);