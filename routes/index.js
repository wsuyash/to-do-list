const express = require('express');
const router = express.Router();

// Getting the database
const db = require('../config/mongoose');
const Tasks = require('../models/task');

const homeController = require('../controllers/home_controller');
const addTask = require('../controllers/new_task_controller');
const deleteTask = require('../controllers/delete_task_controller');

router.get('/', homeController.home);
router.post('/new-task', addTask.new_task);
router.post('/delete-task', deleteTask.delete_task);

module.exports = router;