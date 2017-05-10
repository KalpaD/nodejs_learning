var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Create the schema
var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var Todos = mongoose.model('Todos', todoSchema);
// Return the model
module.exports = Todos;