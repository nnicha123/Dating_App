const express = require('express')
const router = express.Router()
const passport = require('passport')
const relatesToController = require('../controllers/relates_to')

const auth = passport.authenticate("jwt", { session: false })

router.get('/:user_id', auth, relatesToController.getRelationship)
router.post('/:user_id', auth, relatesToController.likeUser)
router.put('/accept/:user_id', auth, relatesToController.likeBack)
router.put('/decline/:user_id', auth, relatesToController.declineMatch)
router.delete('/:user_id', auth, relatesToController.deletePerson)

module.exports = router