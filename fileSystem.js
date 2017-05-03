
var fs = require('fs');

// read the file synchronous manner
var text = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(text);

// read the file in asyncrnous manner
var text1 = fs.readFile(__dirname + '/greet.txt', 'utf8', (err, data) => {
    console.log(data);
});

console.log('Done!');
