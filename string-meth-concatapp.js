const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName; // space concatenated

// Append (add on to variable, not replace)
val = 'Brad ';
val += 'Traversy'

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait'; // backslash \ turns ' into apostrophe not string indicator

// Length
val = firstName.length;
// properties, in this case .length do NOT require () like methods do

// concat
val = firstName.concat(' ', lastName); // same result as above concatenation with + '' + but not needed.

// Change case
val = firstName.toUpperCase(); //whole words CAPITALS
val = firstName.toLowerCase(); // whole word lowercase

val = firstName[0]; // 0 index of the value, arrays, strings start at 0

// indexOf() method
val = firstName.indexOf('l'); // will pull up the numeral index of first l it finds.
val = firstName.lastIndexOf('l'); // pulls up numeral index starting from end of string

// charAt() method
val = firstName.charAt('2'); // l because, it is 2 place of the value firstName.
// Get last char of string
val = firstName.charAt(firstName.length - 1); // always produces last character of string, whole length - 1, is the last character.

// substring()
val = firstName.substring(0, 4); // pulls out partial string from original value, does not include b)

// slice() method
val = firstName.slice(0,4);
val = firstName.slice(-3); //negative number, starts from the back instead of front

// split() method
val = str.split(' '); // splits up a sentence into an array.
val = tags.split(','); // splits up words by comma into array

// replace()
val = str.replace('Brad', 'Jack'); // replace a with b in target value, in this case str

// includes()
val = str.includes('foo'); // check target value if it contains value, and return with a boolean



console.log(val);