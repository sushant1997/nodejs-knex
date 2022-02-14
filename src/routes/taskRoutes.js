const router = require('express').Router()
const taskController = require('../controllers/task.controller')



router.post('',taskController.postTask)
router.get('',taskController.getTasks)
router.get('/:id',taskController.getTask)
router.put('/:id',taskController.updateData)
router.delete('/:id',taskController.deleteTasks)

module.exports= router;