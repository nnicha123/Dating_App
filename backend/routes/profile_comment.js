const express = require('express')
const router = express.Router()
const passport = require('passport')
const profileCommentController = require('../controllers/profile_comment')

const auth = passport.authenticate("jwt", { session: false })

router.get('/', auth, profileCommentController.getAllComments)
router.get('/receiver/:receiver_id', auth, profileCommentController.getCommentsToUser)
router.post('/receiver/:receiver_id', auth, profileCommentController.addCommentsToUser)
router.put('/receiver/:receiver_id/commenter/:commenter_id', auth, profileCommentController.updateComment)
router.delete('/receiver/:receiver_id/commenter/:commenter_id', auth, profileCommentController.deleteComment)

module.exports = router