// objects and functions
var person = new Object();
person['firstname'] = 'john';
person['lastname'] = 'wilson';
console.log(person);
console.log(person['firstname']);
var lastnamePropertyName = 'lastname';
console.log(person[lastnamePropertyName]);

person.address = new Object();
person.address.street = '111 main stree';
person.address.city = 'ny';
person.address.state = 'NY';

console.log(person.address.city);
