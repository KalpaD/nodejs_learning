
var fs = require('fs');
var zip = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet2.txt');

var writable = fs.createWriteStream(__dirname + '/greet2Copy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet2.txt.gz');

// Get an gzip object
var gzip = zip.createGzip();

// Readble object prototype has the pipe function.
readable.pipe(writable);

// Using duplex stream
readable
    .pipe(gzip) // pipe the readble stream to gzip dual stream, which will compress the content
    .pipe(compressed); // and handover the compressed content to writable stream.

