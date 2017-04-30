
function greet() {
    console.log('Hello I am node talking to you...');
}

// functions are first-class citizans in javascript
function executor(func) {
    func();
}

executor(greet);

// function expresssions
var expression = function() {
    console.log('Hello this is from the expression..');
}

executor(expression);


//use a function expression on the fly
executor(function() {
    console.log('Hello this is from on the fly function expression');
});