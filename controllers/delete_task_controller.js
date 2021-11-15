// Getting the database
const db = require('../config/mongoose');
const Tasks = require('../models/task');

module.exports.delete_task = function(req, res){
    let checkboxes = req.body.checkbox;

    if(checkboxes !== undefined) { // Check to see if no task is selected
        for(let i = 0; i < checkboxes.length; i++){
            Tasks.findByIdAndDelete(checkboxes, function(err){
                if(err){
                    console.log('Error deleting from db');
                }
            });
        }
    }

    return res.redirect('/');
}
