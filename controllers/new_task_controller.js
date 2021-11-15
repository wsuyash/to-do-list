// Getting the database
const db = require('../config/mongoose');
const Tasks = require('../models/task');

module.exports.new_task = function(req, res){
    Tasks.create({
        description: req.body.description,
        category: req.body.category,
        due_date: req.body.due_date
    }, function(err, newTask){
        if(err) {
            console.log(`Error adding task to the db: ${err}`);
            return;
        }
    });

    return res.redirect('/');
}
