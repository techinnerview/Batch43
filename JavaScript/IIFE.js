// Regular Function.
function Greet()
{
    console.log("Welcome to GFG!");
};
// Execution of Regular Function.
Greet();

//Immediate invocation function expression
  
// IIFE creation and execution.
(function() { console.log("Welcome to Edureka!"); })();

(function() {
    document.write(window.location.search);
    const urlParams = new URLSearchParams(window.location.search);
   for (const [key, value] of urlParams){
       document.write("<br />")
       document.write(key + " = " + value)
   }
})();

//Obect destructuring

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

alert(user.name); // John
alert(user.surname); // Smith

let user2 = {
    name: "John",
    age: 30
  };
  
  // loop over keys-and-values
  for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:John, then age:30
  }


  let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is array of items, starting from the 3rd one
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name);    // Julius (from array)
alert(surname); // Anonymous (default used)


// callback function
// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);