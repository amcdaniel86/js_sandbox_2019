const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template strings (es5) HORRIBLE
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + '</li><li>City: ' + city + ' </li></ul>';

// html = '<ul>' +
//         '<li>Name: ' + name + ' </li>' +
//         '<li>Age: ' + age + ' </li>' +
//         '<li>Job: ' + job + ' </li>' +
//         '<li>City: ' + city + ' </li>';



function hello() {
  return 'hello';
}

// With template strings (literals) (es6) `` back ticks are template literals BEST !!
html = `
<ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  <li>${2 + 2}</li>
  <li>${hello()}</li>
  <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;