// object.create

var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function () {
    return 'hello ' + this.firstname;
  },
};

var john = Object.create(person);
console.log(john.greet());
john.firstname = 'john';
console.log(john.greet());
