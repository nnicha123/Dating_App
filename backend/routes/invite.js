const express = require('express')
const router = express.Router()
const passport = require('passport')
const inviteController = require('../controllers/invite')
const invite = require('../controllers/invite')

const auth = passport.authenticate("jwt", { session: false })

router.get('/', auth, inviteController.getAllInvites)
router.get('/sends_invite/:sends_invite', auth, inviteController.getInviteForInviter)
router.get('/receives_invite/:receives_invite', auth, inviteController.getInviteForReceiver)
router.post('/sends_invite/:sends_invite/receives_invite/:receives_invite/location/:location_id', auth, inviteController.addInvite)
router.put('/sends_invite/:sends_invite/receives_invite/:receives_invite', auth, inviteController.updateInvite)
router.delete('/sends_invite/:sends_invite/receives_invite/:receives_invite', auth, inviteController.deleteInvite)

module.exports = router