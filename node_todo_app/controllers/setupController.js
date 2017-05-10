// Get the model created in the todoModel.js
var Todos = require('../models/todoModel');

module.exports = function(app) {

    app.get('/api/setupTodos', (req, res) => {

        // seed database
        var starterTodos = [
            {
                username: 'Kalpa',
                todo: 'Pay Rent',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Kalpa',
                todo: 'Go to Coles',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Kalpa',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, (err, results) => {
            res.send(results);
        });
    });
}