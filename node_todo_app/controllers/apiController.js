var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
    //A new body object containing the parsed data is populated 
    //on the request object after the middleware
    app.use(bodyParser.json());
    //Returns middleware that only parses urlencoded bodies.
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todos/:uname', (req, res) => {
        console.log('Request recived for api/todos/:uname');
        Todos.find({ username: req.params.uname }, (err, todos) => {
            if(err) throw err;

            res.send(todos);
        });
    });

    app.get('/api/todo/:id', (req, res) => {
        console.log('Request recived for /api/todos/:id '+ req.params.id);
        Todos.findById({ _id: req.params.id}, (err, todo) => {
            if(err) throw err;

            res.send(todo);
        });
    });

    app.post('/api/todo', (req, res) => {
        console.log('Request recived for POST /api/todo');
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id,
             { todo: req.body.todo,
               isDone: req.body.isDone,
               hasAttachment: req.body.hasAttachment
             }, (err, todo) => {
                 if(err) throw err;

                 res.send("Success - Update");
             });
        } else {
            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save((err) => {
                if(err) throw err;

                res.send("Success - Create");
            });
        }
    });

    app.delete('/api/todo', (req, res) => {
        console.log('Request recived for DELETE /api/todo');
        console.log(`Request recived with id: ${req.body._id}`);
        Todos.findByIdAndRemove(req.body._id, (err) => {
             if(err) throw err;
             
             res.send("Success");
        });
    });
}
