const express = require('express');
const router = express.Router();
const taskController = require('../Controllers/tasks');


router.post('/add', taskController.createTask);
router.get('/:userId', taskController.getTasks);
router.put('/update/:id', taskController.updateTask);
router.delete('/delete/:id', taskController.deleteTask);

module.exports = router;