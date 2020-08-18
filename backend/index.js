require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models')

const cors = require('cors')
const bodyParser = require('body-parser')

// Middlewares 
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => console.log('Listening on port', process.env.PORT));
})