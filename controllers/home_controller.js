// Getting the database
const db = require('../config/mongoose');
const Tasks = require('../models/task');

module.exports.home = function(req, res) {
    Tasks.find({}, function(err, tasks){
        if(err){
            console.log('Error fetching tasks from the db.');
            return;
        }
        return res.render('home', 
        {
            title: "To-Do List",
            task_list: tasks
        });
    }).sort({due_date: 1}); // Displaying the database documents in ascending order of dates
}