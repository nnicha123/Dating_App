const express = require('express')
const router = express.Router()
const passport = require('passport')
const feedbackController = require('../controllers/feedback')

const auth = passport.authenticate("jwt", { session: false })

router.get('/', auth, feedbackController.getAllFeedbacks)
router.get('/location/:location_id', auth, feedbackController.getFeedbackForLocation)
router.post('/user/:user_id/location/:location_id', auth, feedbackController.addFeedback)
router.put('/user/:user_id/location/:location_id', auth, feedbackController.updateFeedback)
router.delete('/user/:user_id/location/:location_id', auth, feedbackController.deleteFeedback)

module.exports = router