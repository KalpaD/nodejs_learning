
function Greeter() {
    this.greeting = "Hello from a function constructer direct";
    this.greet = function() {
        console.log(this.greeting);
    }
}

// this does not create an object insted, it returns a refrence to constructer function.
// so the client has to create the object.
module.exports = Greeter;