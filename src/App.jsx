

import './App.css'

function App() {
 
  // Variable declaration
console.log("Before variable declaration:", x); // undefined
var x = 10;
console.log("After variable declaration:", x); // 10

// Function declaration
foo(); // "Hello from foo!"
function foo() {
  console.log("Hello from foo!");
}


console.log(bar) //this will show undefined because it treats this as normal varibale 
// Function expression
// This would result in an error as function expressions are not hoisted
// bar(); // TypeError: bar is not a function
var bar = function() {
  console.log("Hello from bar!");
};

//lets check with let and const 

console.log (newVar)  // this will show reffrence error because let is not a global variable

let newVar = "I am new Variavble"

console.log (newVar2) // this will show reffrence error because let is not a global variable

const newVar2 = "I am new Variavble"



  return (
    <>
      <h1>App</h1>
    </>
  )
}

export default App
