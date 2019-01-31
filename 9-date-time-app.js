let val;

const today = new Date(); //instantiating the date object
let birthday = new Date('9-10-1981 11:25:00');
// let birthday = new Date('9-10-1981 11:25:00'); can't have two let's, one let and then just put birthday next to show that it has a new value.
birthday = new Date('9/10/1981'); // JavaScript Date object

val = today.getMonth(); // zero-based 0 is January
val = today.getDate(); // day of the month
val = today.getDay(); // number value of the week, starting on Sunday, zero-based
val = today.getFullYear(); // shows year
val = today.getHours(); // time in military time
val = today.getMinutes(); // in minutes
val = today.getSeconds(); // in seconds
val = today.getMilliseconds(); 
val = today.getTime(); // timestamp, number of seconds passed since 1-1-1970

//  MANIPULATE dates
birthday.setMonth(2); // this is adjusting the birthday new Date constructor we started with at top.
birthday.setDate(12);
birthday.setFullYear(1986);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);

// more in MDN documentation