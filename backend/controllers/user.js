const db = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const getAllUser = async (req, res) => {
  const allUsers = await db.user.findAll({})
  res.status(200).send(allUsers)
}
const getUserId = async (req, res) => {
  const targetUser = await db.user.findOne({ where: { id: req.user.id } })
  if (!targetUser) {
    res.status(400).send({ message: 'Cannot find target user' })
  } else {
    res.status(200).send(targetUser)
  }
}
const getOtherUser = async(req,res) => {
  const targetUser = await db.user.findOne({ where: { id: req.params.id } })
  if (!targetUser) {
    res.status(400).send({ message: 'Cannot find target user' })
  } else {
    res.status(200).send(targetUser)
  }
}

const registerUser = async (req, res) => {
  const { username, password, email, first_name, last_name, profile_pic, cover_pic, about_me, total_hearts } = req.body
  const usernameRepeated = await db.user.findOne({ where: { username } })
  if (usernameRepeated) {
    res.status(400).send({ message: 'username already used' })
  } else {
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    const newUser = await db.user.create({ username, password: hashedPassword, email, first_name, last_name, profile_pic, cover_pic, about_me, total_hearts, user_type: 'normal', role: 'user' })
    res.status(201).send(newUser)
  }
}

const loginUser = async (req, res) => {
  const { username, password } = req.body
  const user = await db.user.findOne({ where: { username } })

  if (!user) {
    res.status(400).send({ message: 'username or password not found' })
  }
  else {
    const isSuccess = bcrypt.compareSync(password, user.password)
    if (!isSuccess) {
      res.status(400).send({ message: 'username or password not found' })
    }
    else {
      const payload = {
        id: user.id,
        name: user.name
      }
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: 3600 })
      res.status(200).send({ token, message: "User found & logged in", username })
    }
  }
}

const updateUser = async (req, res) => {
  const { username, password, email, first_name, last_name, profile_pic, cover_pic, about_me, total_hearts, user_type, role } = req.body
  const targetUser = await db.user.findOne({ where: { id: req.params.id } })
  if (!targetUser) {
    res.status(400).send({ message: 'Cannot find target user' })
  } else {
    await targetUser.update({ username, password, email, first_name, last_name, profile_pic, cover_pic, about_me, total_hearts, user_type, role })
    res.status(204).send({ message: 'Successfully updated' })
  }
}

module.exports = { registerUser, loginUser, getAllUser, getUserId, updateUser,getOtherUser }
