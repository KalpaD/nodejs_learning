//Since there is not js file call 'module'
// require function will start looking for folder named module
// inside the module folder it will look for index.js which has the 
// rest of the details about that module.
// It demeonestrates how to create module as well modularize 
// components to be re-used in a nodejs application.
var greet = require('./module');

greet.english();
greet.spanish();
greet.sinhala();