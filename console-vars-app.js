// 1 - Using the Console

// alert('Hello World');

// // you can execute JavaScript from the console. undefined in console, meanings nothing was returned from the alert example in console.
// // using DOM, chrome dev tools is great way for debugging, testing without actually modifying original code.

// // Log to console
// console.log('hello world');
// console.log(123);
// console.log(true);
// var greeting = 'Hello';
// console.log(greeting);
// // array of numbers
// console.log([1,2,3,4]);
// // numbers are blue, strings black in dev tools console
// // log objects below, object literal
// console.log({a:1, b:2});
// // print out object as a table below
// console.table({a:1, b:2});
// // errors
// console.error('This is some error');
// // to clear the console, do below
// console.clear();
// // warnings
// console.warn('This is a warning');
// // timer below
// console.time('Hello');
//       console.log('hello world');
//       console.log('hello world');
//       console.log('hello world');
//       console.log('hello world');
//       console.log('hello world');
//       console.log('hello world');
// console.timeEnd('Hello');
// // console.time and console.timeEnd will give the time it took for certain functions, tasks to take place/occur

/*
multi
line
comments
*/

// 2 - Variables
// var, let, const. let and const apply to block level scope.

// var name = 'John Doe';
// // strings can be single or double quotes
// console.log(name);
// name = 'Steve Smith';
// console.log(name);
// // can reassign variables with var and let.

// // Init var, used for conditionals, if statements
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);
// // if true, greeting = this, if greeting = that, greeting = that

// // Rules conventions variables in JavaScript
// // letters, numbers, _, $, in a variable name
// // cannot start with a number
// var name = 'John'; 
// invalid, unexpected token if 1name

// Multi word vars
// var firstName = 'John'; // Camel Case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; //Pascal case, starts with uppercase

//let is identical to var on global scope.

// LET
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST
// cannot be reassigned later after initial designation
// const name = 'John';
// console.log(name);
// name = 'Sara';
// required to assign a value;
// const greeting; // cannot do this

const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara';
// can change properties/fields inside an object, but you CANNOT change the name of the constant. person is stuck as is
person.age = 32;

// console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);
numbers = [1,2,3,4,5,6]

console.log(numbers);

// CANNOT reassign const names to other objects, data types, you can can alter/modify the original one declared but CANNOT reassign.

// Const should be used as it shows users that that value cannot be reassigned, has to stay the same for the program. use const, unless value changes, initialize it, or inside an iterator or a loop then use let.

