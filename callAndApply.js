
var person = {
    name: 'Neo',
    greet: function() {
        console.log('Hello' +' '+ this.name);
    }
}

person.greet(); // normal function invokation.
// invoke same function using .call function 
// so that we can chnage the meaning of 'this'
person.greet.call({ name: 'Trinity'});

// same can be done via apply
person.greet.apply({ name: 'Morphese'});