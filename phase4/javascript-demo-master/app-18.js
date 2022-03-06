// closures

function greet(saysomething) {
  return function (name) {
    console.log(saysomething + ' ' + name);
  };
}

var sayHi = greet('Hello there..');

sayHi('William');

// function sayHi(name) {
//   console.log(saySomething + ' ' + name);
// }
