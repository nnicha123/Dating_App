const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.get('/', userController.getAllUser)
router.get('/:id', userController.getUserId)
router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)
router.put('/:id', userController.updateUser)

module.exports = router