const express = require('express'); // Importing Express
const app = express(); // Using Express
const port = 8000;

// Getting the database
const db = require('./config/mongoose');
const Tasks = require('./models/task');

app.use(express.static('./assets')); // Using middleware to load static files like css, js, images
app.use(express.urlencoded({extended: true})); // Using middleware to parse form data
app.use('/', require('./routes')); // Using Express Router

app.set('view engine', 'ejs'); // Setting up the EJS view engine
app.set('views', './views'); // Path to look for views for EJS

// Listen on port 8000
app.listen(port, function(err){
    if(err){
        console.log(`Error starting the server: ${err}`);
    }

    console.log(`Server up and running on port: ${port}`);
});

// Adding a task to the db
/* app.post('/new-task', function(req, res){
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

    return res.redirect('back');
});

// Deleting task(s)
app.post('/delete-task', function(req, res){
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

    return res.redirect('back');
});

// Render the home page and display tasks
app.get('/', function(req, res){
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
    });
}); */