var greet = require('./greet');
greet();


var person = {
    firstName : 'Jhone',
    lastName : 'Doe',
    greet : function() {
        console.log('Hello ' + this.firstName +' '+ this.lastName);
    }
};

person.greet();