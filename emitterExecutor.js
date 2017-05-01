var Emitter = require('./emitter');

var emitter = new Emitter(); 

//adding functions to emit type 'greet'
emitter.on('greet', function() {
    console.log('First emiter function syas hello!');
});

//adding functions to emit type 'greet'
emitter.on('greet', function() {
    console.log('Second emiter function syas hola!');
});

console.log('Hello');
// emitting the type 'greet'
emitter.emit('greet');