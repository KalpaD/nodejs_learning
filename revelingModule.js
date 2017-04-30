 var message = "Hello I am private message";

 function messenger() {
     console.log(message);
 }

// note that this only exports the function , not the message variable
// this makes 
 module.exports = {
    messenger: messenger
 };