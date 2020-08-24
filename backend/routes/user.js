const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const passport = require('passport')
const auth = passport.authenticate("jwt", { session: false })

router.get('/', userController.getAllUser)
router.get('/profile', auth, userController.getUserId)
router.get('/profile/:id', auth, userController.getOtherUser)
router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)
router.put('/:id', userController.updateUser)

module.exports = router