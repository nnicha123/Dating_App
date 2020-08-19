const db = require('../models')

const getAllFeedbacks = async (req, res) => {
  const feedbacks = await db.feedback.findAll({})
  res.status(200).send(feedbacks)
}
const getFeedbackForLocation = async (req, res) => {
  const locationSpecificFeedbacks = await db.feedback.findAll({ where: { location_id: req.params.location_id } })
  res.status(200).send(locationSpecificFeedbacks)
}
const addFeedback = async (req, res) => {
  const { comment, rating } = req.body
  const newFeedback = await db.feedback.create({ comment, rating, user_id: req.params.user_id, location_id: req.params.location_id })
  res.status(201).send(newFeedback)
}
const updateFeedback = async (req, res) => {
  const { comment, rating } = req.body
  const targetFeedback = await db.feedback.findOne({ where: { user_id: req.params.user_id, location_id: req.params.location_id } })
  if (!targetFeedback) {
    res.status(400).send({ message: 'Cannot find target feedback' })
  }
  else {
    await targetFeedback.update({ comment, rating })
    res.status(204).send({ message: 'Successfully updated feedback' })
  }
}
const deleteFeedback = async (req, res) => {
  const targetFeedback = await db.feedback.findOne({ where: { user_id: req.params.user_id, location_id: req.params.location_id } })
  if (!targetFeedback) {
    res.status(400).send({ message: 'Cannot find target feedback' })
  }
  else {
    await targetFeedback.destroy()
    res.status(204).send({ message: 'Successfully deleted feedback' })
  }
}

module.exports = { getAllFeedbacks, getFeedbackForLocation, addFeedback, updateFeedback, deleteFeedback }
