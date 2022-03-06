// Function constructors

function Person(firstname, lastname) {
  // console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
}

var john = new Person('john', 'doe');
// console.log(john);

Person.prototype.getFullName = function () {
  return this.firstname + ' ' + this.lastname;
};

console.log(john.getFullName());
