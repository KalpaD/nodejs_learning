
var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet2.txt',
 { encoding: 'utf8', highWaterMark: 32 * 1024 });

// Since all the stream inherited by event emitters 
// we can get event when the buffer filled by data chuncks
// The 'data' event is emitted whenever the stream is relinquishing ownership 
// of a chunk of data to a consumer
readable.on('data', (chunk) => {
    //console.log(chunk);
    console.log(`Received ${chunk.length} of data`);
});

readable.on('end', () => {
    console.log('There will be no more data.');
});