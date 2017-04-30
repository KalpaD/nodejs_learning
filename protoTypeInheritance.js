
// A function constructor.
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    
}
// All the objects of Person will have a function named greed since it is plugged in to 
// the prototype object.
Person.prototype.greet = function() {
        console.log('Hello from prototype inherited function '+ this.firstName +' '+
        this.lastName);
};

var person = new Person('Jhone', 'Doe');
person.greet();

var personOne = new Person('Jeena', 'Doe');
personOne.greet();

// to see the prototype object
console.log(person.__proto__);
console.log(personOne.__proto__);