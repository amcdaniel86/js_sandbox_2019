// WINDOW METHODS / OBJECTS / PROPERTIES

// console.log(123);
// technically it's window.console.log(123) not necessary to type window

// Alert
// alert('Hello World'); // window. isn't necessary

// Prompt
// const input = prompt(); // prompt displays a window for client interaction
// alert(input);

// Confirm (90's style)
// if(confirm('you sure')){ // confirm dialog boxes, like someone wants to delete, or a
//   console.log('YES');   //    significant or unusual action
// } else {
//   console.log('NO');
// }

let val;

// Outer height and width
val = window.outerHeight; // very cool, shows height of window depending on resizing
val = window.outerWidth;

// Inner height and width
val = window.innerHeight; // very cool, shows height of window depending on resizing
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; // will show query string from url bar

// Redirect
// window.location.href = 'http://google.com';
// // Reload
// window.location.reload();

// History Object
// browsing history

// window.history.go(-1); // will go to site how long it was visited
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform; //if its chrome do this, if safari do this
val = window.navigator.vendor;
val = window.navigator.language;


console.log(val);