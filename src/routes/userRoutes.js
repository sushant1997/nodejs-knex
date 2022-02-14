const router = require('express').Router()
const userController = require('../controllers/user.controller')



router.get('',userController.getUsers)
router.get('/:id',userController.getUser)
router.post('',userController.postUsers)
router.put('/:id',userController.updateData)
router.delete('/:id',userController.deleteUsers)






module.exports = router;