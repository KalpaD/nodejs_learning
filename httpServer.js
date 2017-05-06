var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'video/mp4'});
    var fileContent = fs.createReadStream(__dirname + '/movie.mp4');
    fileContent.pipe(res);

}).listen(7777, '127.0.0.1');