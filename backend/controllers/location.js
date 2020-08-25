const db = require('../models')

const getAllLocations = async (req, res) => {
  const allLocations = await db.location.findAll({})
  res.status(200).send(allLocations)
}
const getSingleLocation = async (req, res) => {
  const singleLoc = await db.location.findOne({ where: { id: req.params.id } })
  res.status(200).send(singleLoc)
}
const getLocationByVenueId = async (req, res) => {
  const targetLocations = await db.location.findAll({ where: { venue_id: req.params.venue_id } })
  if (!targetLocations) {
    res.status(400).send({ message: 'Cannot Find target locations' })
  } else {
    res.status(200).send(targetLocations)
  }
}
const addLocation = async (req, res) => {
  const { name, address, price, image } = req.body
  const newLocation = await db.location.create({ name, address, price, image, venue_id: req.params.venue_id })
  res.status(201).send(newLocation)
}
const updateLocation = async (req, res) => {
  const { address, price, image } = req.body
  const targetLocation = await db.location.findOne({ where: { id: req.params.location_id, venue_id: req.params.venue_id } })
  if (!targetLocation) {
    res.status(400).send({ message: 'Cannot find target location' })
  } else {
    await targetLocation.update({ address, image, price })
    res.status(204).send({ message: 'Updated location' })
  }
}
const deleteLocation = async (req, res) => {
  const targetLocation = await db.location.findOne({ where: { id: req.params.location_id, venue_id: req.params.venue_id } })
  if (!targetLocation) {
    res.status(400).send({ message: 'Cannot find target location' })
  } else {
    await targetLocation.destroy()
    res.status(204).send({ message: 'Deleted location' })
  }
}

module.exports = { getSingleLocation, getAllLocations, getLocationByVenueId, addLocation, updateLocation, deleteLocation }
