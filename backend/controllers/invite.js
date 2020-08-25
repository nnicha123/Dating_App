const db = require('../models')
const { Op } = require('sequelize')

const getAllInvites = async (req, res) => {
  const allInvites = await db.invite.findAll({})
  res.status(200).send(allInvites)
}
const getAllInvitesForUser = async (req, res) => {
  const userInvites = await db.invite.findAll({ where: { [Op.or]: [{ receives_invite: req.user.id }, { sends_invite: req.user.id }] } })
  res.status(200).send(userInvites)
}
const getInviteForReceiver = async (req, res) => {
  const receiverInvites = await db.invite.findAll({ where: { receives_invite: req.user.id } })
  res.status(200).send(receiverInvites)
}
const getInviteForInviter = async (req, res) => {
  const inviterInvites = await db.invite.findAll({ where: { sends_invite: req.user.id } })
  res.status(200).send(inviterInvites)
}
const addInvite = async (req, res) => {
  const { status, time, date } = req.body
  const newInvite = await db.invite.create({ status: 'pending', time, date, receives_invite: req.params.receives_invite, sends_invite: req.user.id, location_id: req.params.location_id })
  res.status(201).send(newInvite)
}
const updateInvite = async (req, res) => {
  const { status, time, date, location_id } = req.body
  const targetInvite = await db.invite.findOne({ where: { receives_invite: req.params.receives_invite, sends_invite: req.params.sends_invite } })
  if (!targetInvite) {
    res.status(400).send({ message: 'Cannot find invite' })
  } else {
    await targetInvite.update({ status, time, date, location_id })
    res.status(204).send({ message: 'Successfully updated invite' })
  }
}
const deleteInvite = async (req, res) => {
  const targetInvite = await db.invite.findOne({ where: { receives_invite: req.params.receives_invite, sends_invite: req.params.sends_invite } })
  if (!targetInvite) {
    res.status(400).send({ message: 'Cannot find invite' })
  } else {
    await targetInvite.destroy()
    res.status(204).send({ message: 'Successfully deleted invite' })
  }
}

module.exports = { getAllInvitesForUser, getAllInvites, getInviteForInviter, getInviteForReceiver, addInvite, updateInvite, deleteInvite }
