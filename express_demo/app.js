var express = require('express');
var fs = require('fs');

var app = express();

// A middelware that serve the static content 
app.use('/assets', express.static(__dirname + '/public'));

// A middleware with next operation
app.use('/', (req, res, next) => {
    console.log(`{request recived for : ${req.url}'`);
    next();
});

/** This middleware response with a html output */
app.get('/', (req, res) => {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');
});

/**This demonestrate how the use the path parameters in express */
app.get('/person/:id', (req, res) => {
    res.json({ name: req.params.id, age: '30'});
});

/**Streaming can be achived via express */
app.get('/movie', (req, res) => {
    var stream = fs.createReadStream(__dirname + '/movie.mp4');
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    stream.pipe(res);
})

app.listen(7777);