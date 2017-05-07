var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// A middelware that serve the static content 
app.use('/assets', express.static(__dirname + '/public'));

// Setting ESJ as the view engine
app.set('view engine', 'ejs');

// A middleware with next operation
app.use('/', (req, res, next) => {
    console.log(`{request recived for : ${req.url}'`);
    next();
});

/** This middleware response with a html output */
app.get('/person/:name', (req, res) => {
    res.render('index', {name: req.params.name, // Demo how to access the path param and inject it in to template.
         age: req.query.age}); // Demo how to access the query param and inject it in to template.
});

app.post('/person', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400)
    res.render('submitted', {username: req.body.username, password: req.body.password})
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