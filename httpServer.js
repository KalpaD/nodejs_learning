var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {

    if (req.url == '/movie') {
        res.writeHead(200, { 'Content-Type': 'video/mp4' });
        var fileContent = fs.createReadStream(__dirname + '/movie.mp4');
        fileContent.pipe(res);
    } else if (req.url == '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var object = {
            name: 'Kalpa',
            age: '30'
        }
        res.end(JSON.stringify(object));
    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(7777, '127.0.0.1');