
//primitives are pass by value , the function get a copy of the 
//primitive.
function chnage(b) {
    b = 2;
}

var a = 1;
chnage(a);
console.log(a);


// object are pass by reference
function chnageObject(obj) {
    obj.prop_1 = function(){};
    obj.prop_2 = {
        name : "Jhone",
        age : "34"
    };
}

var object = {};
chnageObject(object);
console.log(object);