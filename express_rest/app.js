var express = require('express');
var app = express();
var cookieParser = require('cookie-parser')



//===============================================================
    // This section show usage of middleware in express.

// There are five types of middlewares in express

//1 . Application-level middleware
var logger = function(req, res, next) {
    req.requestTime = Date.now()
    console.log(`Recived request for ${req.url} at ${req.requestTime}`);
    next();
}
// The order of the middlewares are important
// Since they get called in the same order.
//This example shows a middleware function mounted on the / path. 
//The function is executed for any type of HTTP request on the / path.
app.use('/', logger);

app.get('/', (req, res) => {
    res.send(`Response from: ${req.url} at ${req.requestTime}`);
})

//2. Router-level middleware
//Router-level middleware works in the same way as application-level middleware, 
//except it is bound to an instance of express.Router().

//3. Error-handling middleware

//Error-handling middleware always takes four arguments.
// You must provide four arguments to identify it as an error-handling middleware function.

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// 4. Built-in middleware
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use(express.static('public', options));

// 5. Third-party middleware

// load the cookie-parsing middleware
app.use(cookieParser())

//===============================================================
/*
// Basic routing with route methods
// route mthods are derived from HTTP methods
app.get('/secret', (req, res) => {
    res.send('Get request to home page!');
});

app.post('/', (req, res) => {
    res.send('Post request to home page!');
});

// app.all() is not derived from any HTTP method 
// it can be used for loading middleware functions at apath for all 
// request methods

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})

// patterns 
app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})

//This route path will match anything with an “a” in the route name.
app.get(/a/, function (req, res) {
  res.send('/a/')
})

// Using path params
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

// Route Handlers
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})*/

app.listen(7777);