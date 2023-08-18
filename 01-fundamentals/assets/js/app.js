// First line of code
//console.log('Hello World');
//variables
let a = 10; //modern way to initialize variables
var b = 20; //first way to manage variable implemented, no longer used at all, just for rendering (node.js thing)
const c = 2021; //current year

//let d = 40;
// Pollyfil =  chunk of modern JS code to use in previous version of JS

//console.log({e});
//console.log({f});

//console.table({a, b, d, e, f});

// console messages

//console.log('Simple Message');
//console.warn('Warning Message');
//console.error('Error Message');

const todayHTML = new Date();
document.getElementById("today").innerHTML = todayHTML;
