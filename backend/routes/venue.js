const express = require('express')
const router = express.Router()
const passport = require('passport')
const venueController = require('../controllers/venue')

const auth = passport.authenticate("jwt", { session: false })

router.get('/', auth, venueController.getVenues)
router.post('/', auth, venueController.addVenue)
router.put('/:venue_id', auth, venueController.updateVenue)
router.delete('/:venue_id', auth, venueController.deleteVenue)

module.exports = router