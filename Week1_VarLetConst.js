
// ---------------------------------------------------------------
// Declaring the variable using let/var/const
// ---------------------------------------------------------------
var a=10;
let b=20;
const c=30
console.log(a);
console.log(b);
console.log(c);

// ---------------------------------------------------------------
// try redeclaring the same variable using var/let/const
// --------------------------------------------------------------
var a=100; // allowed
let b=200; // not allowed (block scope variables error)
const c=300; // not allowed(block scope variables error)
console.log(a);
console.log(b);
console.log(c);

// ---------------------------------------------------------------
// Try reassigning a value to the variable using var/let/const
// --------------------------------------------------------------    
a=1000; // allowed
b=2000; // allowed
//c=3000; // not allowed (TypeError: Assignment to constant variable.)
console.log(a);
console.log(b);

// ---------------------------------------------------------------
// check the scope behaviour of var using block{} and function(){} blocks
// ---------------------------------------------------------------
function login()
 {
    var username='admin';  // allowed (var is function scoped)
  if(true)
  {
    var password='welcome'; // allowed (var is block scoped)
    console.log(password); // welcome (block scope variable is accessible inside block)
  }
console.log(username);     // admin (function scoped variable is accessible outside the block)
console.log(password);    // welcome (block scoped variable is accessible outside the block)
}
login()
console.log(username); // Error (username is not defined-global scope)


// ---------------------------------------------------------------
// check the scope behaviour of let using block{} and function(){} blocks
// ---------------------------------------------------------------
function login()
{
   let username='admin'; // allowed (let allows function scoped)
  if(true)
  {
    let password='admin123'; // allowed (let is block scoped)
    console.log(password); // admin123
  }
 console.log(username); // admin (function scoped variable is accessible outside the block)
  console.log(password); // ReferenceError (password is not accessible outside the block)
}
login()
console.log(username); // ReferenceError (username is not defined-global scope)


// ---------------------------------------------------------------
// check the scope behaviour of const using block{} and function(){} blocks
// ---------------------------------------------------------------
function login()
{
   const username='admin'; // allowed (const is allowed function scoped)
  if(true)
  {
    const password='admin123'; // allowed (const is block scoped)
    console.log(password); // admin123
  }
 console.log(username); // admin (function scoped variable is accessible outside the block)
  console.log(password); // ReferenceError (password is not accessible outside the block)
}
login()
console.log(username); // ReferenceError (username is not defined-global scope)


// ---------------------------------------------------------------
// HOISTING
// ---------------------------------------------------------------

console.log(a); // undefined (var is hoisted)
console.log(b); // ReferenceError Cannot access 'b' before initialization (let is not hoisted)
console.log(c); // ReferenceError Cannot access 'c' before initialization (const is not hoisted)  
var a=10;
let b=20;
const c=30; 



