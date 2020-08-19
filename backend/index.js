require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models')

const cors = require('cors')
const bodyParser = require('body-parser')

const userRoutes = require('./routes/user')
const feedbackRoutes = require('./routes/feedback')
const inviteRoutes = require('./routes/invite')
const locationRoutes = require('./routes/location')
const profileCommentRoutes = require('./routes/profile_comment')
const relatesToRoutes = require('./routes/relates_to')
const venueRoutes = require('./routes/venue')

require('./config/passport/passport')

// Middlewares 
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/user', userRoutes)
app.use('/feedback', feedbackRoutes)
app.use('/invite', inviteRoutes)
app.use('/location', locationRoutes)
app.use('/profile-comment', profileCommentRoutes)
app.use('/relates-to', relatesToRoutes)
app.use('/venue', venueRoutes)


db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => console.log('Listening on port', process.env.PORT));
})