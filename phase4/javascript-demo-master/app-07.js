// object literals
var person1 = {};
// console.log(person1);

var person = { firstname: 'Dexter', lastname: 'Wilson' };
// console.log(person);

var john = {
  firstname: 'john',
  lastname: 'Doe',
  address: {
    street: 'xyz street',
    city: 'New York',
    state: 'NY',
  },
};

function greet(person) {
  console.log(person);
  console.log('Hello ' + person.firstname);
}
greet(john);

greet({
  firstname: 'mary',
  lastname: 'wilson',
});

greet('x');
