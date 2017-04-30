var mod_types = require('./module_types');

// populate the module.export object with a function
mod_types.direct_function();
// add attribute the module.export and that property hold a referenc to a function.

var moduleobj = mod_types.             // this returns the module.export object
                add_attr_to_mod_export;// and then access the attribute which hold the function.

moduleobj.add_attr_to_mod_export(); // execute it.

// get the greeter object 
var greeterObj = mod_types.export_new_object;
// excute the gree function.
greeterObj.greet();

// if we chnage the message from the object
greeterObj.greeting = "Hello from a function constructer has been chnaged";

// nad try to get new object
var greeterObjNew = mod_types.export_new_object;
// this execution will print the modified message since node cache the objects
// and return the same object without creating new one.
// basically we will get new refrence to the same object.
greeterObjNew.greet(); 

// GreetConsFunc holds the function constrcutor refrence 
var GreetConsFunc = mod_types.export_constrcuter_func;
// therefore, we have to create the Greeter object by our selves
var greet_obj = new GreetConsFunc();
// then execure the greet function.
greet_obj.greet();


