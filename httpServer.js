var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html'});
    var fileContent = fs.readFileSync(__dirname + '/index.html', 'utf8');
    res.end(fileContent);

}).listen(7777, '127.0.0.1');