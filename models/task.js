const mongoose = require('mongoose'); // Import mongoose library

// Create a schema
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    due_date: {
        type: Date,
        required: true
    }
});

// Make a database with name Tasks
const Tasks = mongoose.model('Tasks', taskSchema);

// Export 
module.exports = Tasks;