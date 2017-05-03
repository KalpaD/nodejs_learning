// Buffers are fundamental component of node that we do not need to
// use require function to load the component in to out code
// it is globally available

var buffer = new Buffer('Hello', 'utf8');

// few samples about how to use buffers
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer[2]);

// overriding the buffer content
buffer.write('Ho');
console.log(buffer.toString());