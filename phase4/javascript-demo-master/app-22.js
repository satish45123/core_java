//prototype

var person = {
  firstname: 'default',
  lastname: 'default',
  getFullname: function () {
    return this.firstname + ' ' + this.lastname;
  },
};

var john = {
  firstname: 'john',
  lastname: 'doe',
};

//Never do this . only for demo
john.__proto__ = person;
console.log(john.getFullname());

// Function constructors
// Object.create
