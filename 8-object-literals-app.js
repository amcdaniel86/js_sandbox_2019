const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 33,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2019 - this.age; // when inside object, must use this keyword to remind object to pull value from within itself.
  }
}
// above defines an object literal where you can place key-value pairs within it.

let val;

val = person;
// Get specific value
val = person.firstName; // recommended way pulling property from object
val = person['firstName']; // shows value for that property
val = person.age; // shows value for the property
val = person.hobbies[1]; // hobbies would show array of hobbies, hobbies with [1], would show the value in that position, zero based. array needs index value to pull from
val = person.address.state; // object within object, use . then property
val = person.address['city'];
val = person.getBirthYear();


console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name); //[i] means current iteration
}

// variables are always set with = signs. val = person, let val = dog
// objects, properties inside them always :, colon, name:, age:, city: