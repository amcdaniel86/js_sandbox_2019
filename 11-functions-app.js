// functions are blocks of code that can be defined and be called at a later time or defined and called at the same time.

// FUNCTION DECLARATIONS
function greet(firstName = 'John', lastName = 'Doe'){ // inside () are arguments, parameters, may have =values here too or they match the arguments when they're called in the call later on after and outside the function's scope.
  // console.log('Hello'); // anything inside the curly braces is within the function scope.
  return 'Hello ' + firstName + ' ' + lastName;
}

// CALLING THE FUNCTION
greet(); // if within function's scope only says to return 'Hello', then you must console.log the call.

// CONSOLE LOG AND CALL THE FUNCTION (will show up in console now)
console.log(greet()); // first value is firstName parameter 2nd is lastName, if empty then undefined will show in console log unless values were defined in fn parameter ().

// FUNCTION EXPRESSIONS

const square = function(x = 3){ // putting a function as a variable assignment, named variable, and anonymous function usually. if x = 3 in parameter, then that will be default if parameter isn't filled in the call area.
  return x*x;

};

// console.log(square());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFE'S
// a function you declare and run simultaneously

// (function(name){
//   console.log('Hello ' + name);
// })('Brad'); // () at the end because it is being called and declared simultaneously.

// functions can also go inside objects as well

// PROPERTY METHODS - function inside of an object is called a method.

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add(); // functionName.method():
todo.edit(22);
todo.delete();