const express = require('express')
const router = express.Router()
const passport = require('passport')
const locationController = require('../controllers/location')

const auth = passport.authenticate("jwt", { session: false })

router.get('/:id', auth, locationController.getSingleLocation)
router.get('/', auth, locationController.getAllLocations)
router.get('/venue/:venue_id', auth, locationController.getLocationByVenueId)
router.post('/venue/:venue_id', auth, locationController.addLocation)
router.put('/venue/:venue_id/location/:location_id', auth, locationController.updateLocation)
router.delete('/venue/:venue_id/location/:location_id', auth, locationController.deleteLocation)

module.exports = router