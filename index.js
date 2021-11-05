const express = require('express'); // Importing Express
const app = express(); // Using Express
const port = 8000; // Setting port to 8000

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