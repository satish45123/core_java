// IIFEs
// Immediately Invocable Function Expressions

function greet(name) {
  console.log('Hello ' + name);
}
greet('john');

var greetfunction = function (name) {
  console.log('Hello ' + name);
};
greetfunction('william');

var greeting = (function (name) {
  console.log('Hello ' + name);
})('thomas');

function x(name) {
  var greeting = 'Inside IIFE: Hello ';
  console.log(greeting + name);
}

(function (name) {
  var greeting = 'Inside IIFE: Hello ';
  console.log(greeting + name);
})('jane');
