const db = require('../models')

const getAllComments = async (req, res) => {
  const allComments = await db.comment.findAll({})
  res.status(200).send(allComments)
}
const getCommentsToUser = async (req, res) => {
  const comments = await db.comment.findAll({ where: { receiver_id: req.params.receiver_id } })
  res.status(200).send(comments)
}
const addCommentsToUser = async (req, res) => {
  const { comment, date, image, no_of_likes } = req.body
  const newComment = await db.comment.create({ comment, date, image, no_of_likes, commenter_id: req.params.commenter_id, receiver_id: req.params.receiver_id })
  res.status(201).send(newComment)
}
const updateComment = async (req, res) => {
  const { comment, date, image, no_of_likes } = req.body
  const targetComment = await db.comment.findOne({ where: { commenter_id: req.params.commenter_id, receiver_id: req.params.receiver_id } })
  if (!targetComment) {
    res.status(400).send({ message: 'Cannot find target comment' })
  } else {
    await targetComment.update({ comment, date, image, no_of_likes })
    res.status(204).send({ message: 'Successfully updated comment' })
  }
}
const deleteComment = async (req, res) => {
  const targetComment = await db.comment.findOne({ where: { commenter_id: req.params.commenter_id, receiver_id: req.params.receiver_id } })
  if (!targetComment) {
    res.status(400).send({ message: 'Cannot find target comment' })
  } else {
    await targetComment.destroy()
    res.status(204).send({ message: 'Successfully deleted comment' })
  }
}

module.exports = { getAllComments, getCommentsToUser, addCommentsToUser, updateComment, deleteComment }
