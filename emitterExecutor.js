// using the node code emitter so called 'events'
var Emitter = require('events');
// get the event configurations event object
var eventConfig = require('./config').eventConfig.events;
var emitter = new Emitter(); 

// adding functions to emit type 'greet'
emitter.on(eventConfig.GREET, function() {
    console.log('First emiter function syas hello!');
});

// adding functions to emit type 'greet'
emitter.on(eventConfig.GREET, function() {
    console.log('Second emiter function syas hola!');
});

console.log('Hello');
// emitting the type 'greet'
emitter.emit(eventConfig.GREET);