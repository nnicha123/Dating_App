const db = require('../models')

const getVenues = async (req, res) => {
  const venues = await db.venue.findAll({})
  res.status(200).send(venues)
}
const addVenue = async (req, res) => {
  const { category } = req.body
  const newVenue = await db.venue.create({ category })
  res.status(201).send(newVenue)
}
const updateVenue = async (req, res) => {
  const { category } = req.body
  const targetVenue = await db.venue.findOne({ where: { id: req.params.venue_id } })
  if (!targetVenue) {
    res.status(400).send({ message: 'Cannot find what you are looking for' })
  }
  else {
    await targetVenue.update({ category })
    res.status(204).send({ message: 'Updated Venue' })
  }
}
const deleteVenue = async (req, res) => {
  const targetVenue = await db.venue.findOne({ where: { id: req.params.venue_id } })
  if (!targetVenue) {
    res.status(400).send({ message: 'Cannot find what you are looking for' })
  } else {
    await targetVenue.destroy()
    res.status(204).send({ message: 'Successfully deleted venue' })
  }
}

module.exports = { getVenues, addVenue, updateVenue, deleteVenue }
