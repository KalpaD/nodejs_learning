
// function constructor for Emitter.
function Emitter() {
    this.events = {};
}

// nothing fancy here
Emitter.prototype.on = function(type, listner) {
    this.events[type] = this.events[type] || []; // if this.events[type] make and array
    this.events[type].push(listner); // add in coming functions to that array
}

Emitter.prototype.emit = function(type) {
    if(this.events[type]) {  // if this.events[type] array exisits
        this.events[type].forEach(function(listner) { // run the functions in a loop
            listner();   
        });
    }
}

module.exports = Emitter;