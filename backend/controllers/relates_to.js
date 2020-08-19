const db = require('../models')
const { Op } = require('sequelize')

const orLogic = (myId, targetId) => {
  return {
    [Op.or]: [{ requester_id: myId, responder_id: targetId }, { requester_id: targetId, responder_id: myId },],
  }
}
const getRelationship = async (req, res) => {
  const targetId = req.params.user_id
  const myId = req.user.id
  const relation = await db.relates_to.findOne({ where: orLogic(myId, targetId) })
  if (relation) {
    res.status(200).send(relation)
  } else {
    res.status(400).send({ message: 'Relationship not found' })
  }
}
const likeUser = async (req, res) => {
  const targetId = req.params.user_id
  const myId = req.user.id
  const relationship = await db.relates_to.findOne({ where: orLogic(myId, targetId) })
  if (!relationship && targetId !== myId) {
    const newRelation = await db.relates_to.create({ relation: 'pending', requester_id: myId, responder_id: targetId })
    res.status(201).send(newRelation)
  } else {
    res.status(400).send({ message: 'Already related' })
  }
}
const likeBack = async (req, res) => {
  const targetId = req.params.user_id
  const myId = req.user.id
  const relationship = await db.relates_to.findOne({ where: { [Op.and]: [{ relation: 'pending' }, orLogic(myId, targetId)] } })
  if (relationship) {
    await relationship.update({ relation: 'match' })
    res.status(200).send({ message: 'You are now matched' })
  } else {
    res.status(400).send({ message: 'Cannot like back' })
  }
}

const declineMatch = async (req, res) => {
  const targetId = req.params.user_id
  const myId = req.user.id
  const relationship = await db.relates_to.findOne({ where: { [Op.and]: [{ relation: 'pending' }, orLogic(myId, targetId)] } })
  if (relationship) {
    await relationship.update({ relation: 'declined' })
    res.status(200).send({ message: 'You have declined a match' })
  } else {
    res.status(400).send({ message: 'Cannot decline match' })
  }
}
const deletePerson = async (req, res) => {
  const targetId = req.params.user_id
  const myId = req.user.id
  const relationship = await db.relates_to.findOne({ where: { [Op.and]: [{ relation: 'match' }, orLogic(myId, targetId)] } })
  if (relationship) {
    await friendRelationship.destroy()
    res.status(200).send({ message: 'Deleted match' })
  } else res.status(400).send({ message: 'Cannot delete match' })
}
module.exports = { getRelationship, likeUser, likeBack, declineMatch, deletePerson }
