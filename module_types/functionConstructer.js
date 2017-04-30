
function Greeter() {
    this.greeting = "Hello from a function constructer";
    this.greet = function() {
        console.log(this.greeting);
    }
}

//creating a new object eveytime 
module.exports = new Greeter();