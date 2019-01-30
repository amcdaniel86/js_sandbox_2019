const firstName = 'William';
const lastName = 'Johnson';
const age = 36;

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName; // space concatenated

// Append (add on to variable, not replace)
val = 'Brad ';
val += 'Traversy'

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

console.log(val);