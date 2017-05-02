
// This demonestrate how to achive prototype inheritance via
// Object.create() function 

// person object will be used as the prototype for the objects
// that are being created after
var person = {
    firstName: '',
    lastName: '',
    greet: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var neo = Object.create(person);
neo.firstName = 'Neo';
neo.lastName = 'Doe';

var trinity = Object.create(person);
trinity.firstName = 'Trinity';
trinity.lastName = 'Doe';

console.log(neo.greet());
console.log(trinity.greet());
