var Emitter = require('events');
var util = require('util');

// create the function constrcutor
function Greeter() {
    this.greeting = 'Hello World!';
}

// inherit events using util.inherits
util.inherits(Greeter, Emitter);

// adding a greet function using prototype inheritance
Greeter.prototype.greet = function(data) {
    console.log(this.greeting +' : '+ data);
    // emit event named 'greet' using Emitter inheritance
    this.emit('greet', data);
}

var greeter = new Greeter();
// using on method inherited from Emitter
greeter.on('greet', function(data) {
    console.log('greet event emitted! : '+ data);
});

// invoking the greet function on prototype object
greeter.greet('arbitrary data');